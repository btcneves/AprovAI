import { createBrowserRouter } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { RouteErrorBoundary } from '@/components/layout/RouteErrorBoundary'
import { ConteudoPage } from '@/pages/ConteudoPage'
import { DashboardPage } from '@/pages/DashboardPage'
import { HistoricoPage } from '@/pages/HistoricoPage'
import { MapasPage } from '@/pages/MapasPage'
import { SimuladoPage } from '@/pages/SimuladoPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'conteudo', element: <ConteudoPage /> },
      { path: 'mapas', element: <MapasPage /> },
      { path: 'simulado', element: <SimuladoPage /> },
      { path: 'historico', element: <HistoricoPage /> }
    ]
  }
])
