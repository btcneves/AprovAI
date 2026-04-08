import { Link, NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Dashboard' },
  { to: '/conteudo', label: 'Conteúdo' },
  { to: '/mapas', label: 'Mapas Mentais' },
  { to: '/simulado', label: 'Simulado' },
  { to: '/historico', label: 'Histórico' }
]

export const AppShell = () => (
  <div className="app-shell">
    <aside className="sidebar">
      <Link to="/" className="brand">Bombeiro Imaruí 2026</Link>
      <nav>
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
    <main className="main">
      <header className="header">
        <h1>Plataforma de Estudos — Concurso 001/2026</h1>
      </header>
      <Outlet />
    </main>
  </div>
)
