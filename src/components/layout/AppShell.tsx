import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Dashboard' },
  { to: '/conteudo', label: 'Conteúdo' },
  { to: '/mapas', label: 'Mapas Mentais' },
  { to: '/simulado', label: 'Simulado' },
  { to: '/historico', label: 'Histórico' }
]

export const AppShell = () => {
  const location = useLocation()
  const isMapRoute = location.pathname.startsWith('/mapas')

  return (
    <div className={`app-shell ${isMapRoute ? 'map-mode' : ''}`}>
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
      <main className={`main ${isMapRoute ? 'main-map' : ''}`}>
        <header className={`header ${isMapRoute ? 'header-map' : ''}`}>
          <h1>{isMapRoute ? 'Mapa Mental Interativo — Fullscreen' : 'Plataforma de Estudos — Concurso 001/2026'}</h1>
        </header>
        <Outlet />
      </main>
    </div>
  )
}
