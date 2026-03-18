import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a0a0a',
      color: '#fff',
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center',
      padding: '20px',
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '0' }}>404</h1>
      <h2 style={{ marginTop: '8px', color: '#888' }}>Página no encontrada</h2>
      <p style={{ color: '#666', marginTop: '16px' }}>
        La página que buscas no existe o ha sido movida.
      </p>
      <Link
        href="/"
        style={{
          marginTop: '24px',
          padding: '12px 24px',
          background: '#00ff88',
          color: '#000',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: '600',
        }}
      >
        Volver al inicio
      </Link>
    </div>
  );
}
