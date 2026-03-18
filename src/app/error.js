'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

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
      padding: '20px',
      textAlign: 'center'
    }}>
      <h2 style={{ marginBottom: '16px' }}>Algo salió mal</h2>
      <p style={{ marginBottom: '24px', color: '#888' }}>
        {error?.message || 'Se produjo un error inesperado'}
      </p>
      <button
        onClick={() => reset()}
        style={{
          padding: '12px 24px',
          background: '#00ff88',
          color: '#000',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: '600'
        }}
      >
        Reintentar
      </button>
    </div>
  )
}
