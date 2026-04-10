import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom'

export const RouteErrorBoundary = () => {
  const error = useRouteError()
  const navigate = useNavigate()

  const title = isRouteErrorResponse(error) ? `Erro ${error.status}` : 'Ops! Algo deu errado'
  const description = isRouteErrorResponse(error)
    ? error.statusText || 'Não foi possível carregar esta tela no momento.'
    : 'Encontramos um problema inesperado. Você pode tentar novamente com segurança.'

  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '1.5rem', background: '#f8fafc' }}>
      <div style={{ maxWidth: 560, width: '100%', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16, padding: '1.25rem' }}>
        <h1 style={{ marginTop: 0 }}>{title}</h1>
        <p>{description}</p>
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          <button type="button" onClick={() => window.location.reload()}>Recarregar página</button>
          <button type="button" onClick={() => navigate('/')}>Voltar ao início</button>
        </div>
      </div>
    </div>
  )
}
