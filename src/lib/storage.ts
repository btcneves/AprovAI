export type VersionedEnvelope<T> = {
  version: number
  data: T
}

type MigrationMap<T> = Record<number, (data: unknown) => T>

type VersionedGetOptions<T> = {
  version: number
  fallback: T
  isValid: (value: unknown) => value is T
  migrate?: MigrationMap<T>
}

const isVersionedEnvelope = <T>(value: unknown): value is VersionedEnvelope<T> => {
  if (!value || typeof value !== 'object') return false
  const candidate = value as Partial<VersionedEnvelope<T>>
  return typeof candidate.version === 'number' && 'data' in candidate
}

export const storage = {
  get<T>(key: string, fallback: T): T {
    try {
      const raw = localStorage.getItem(key)
      return raw ? (JSON.parse(raw) as T) : fallback
    } catch {
      return fallback
    }
  },

  set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value))
  },

  getVersioned<T>(key: string, options: VersionedGetOptions<T>): VersionedEnvelope<T> {
    const parsed = this.get<unknown>(key, null)

    if (isVersionedEnvelope<T>(parsed)) {
      if (parsed.version === options.version && options.isValid(parsed.data)) {
        return parsed
      }

      const migration = options.migrate?.[parsed.version]
      if (migration) {
        const migrated = migration(parsed.data)
        if (options.isValid(migrated)) {
          const envelope = { version: options.version, data: migrated }
          this.set(key, envelope)
          return envelope
        }
      }
    }

    const legacyMigration = options.migrate?.[0]
    if (legacyMigration) {
      const migrated = legacyMigration(parsed)
      if (options.isValid(migrated)) {
        const envelope = { version: options.version, data: migrated }
        this.set(key, envelope)
        return envelope
      }
    }

    const safe = { version: options.version, data: options.fallback }
    this.set(key, safe)
    return safe
  },

  setVersioned<T>(key: string, version: number, data: T): VersionedEnvelope<T> {
    const envelope = { version, data }
    this.set(key, envelope)
    return envelope
  }
}
