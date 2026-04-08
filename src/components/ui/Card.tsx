import type { ReactNode } from 'react'

export const Card = ({ title, children }: { title?: string; children: ReactNode }) => (
  <section className="card">
    {title ? <h3>{title}</h3> : null}
    {children}
  </section>
)
