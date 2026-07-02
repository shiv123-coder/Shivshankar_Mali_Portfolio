import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'Shivshankar Mali Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
 
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #09090b, #18181b)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fafafa',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '4px solid #06b6d4',
            borderRadius: '24px',
            padding: '24px 64px',
            background: 'rgba(255,255,255,0.05)',
            marginBottom: '40px',
          }}
        >
          <span style={{ fontSize: 100, fontWeight: 800 }}>Shivshankar Mali</span>
        </div>
        <p style={{ fontSize: 40, color: '#06b6d4', fontWeight: 600, margin: 0 }}>
          Software Engineer | AI & Full Stack
        </p>
        <p style={{ fontSize: 24, color: '#a1a1aa', marginTop: '24px' }}>
          JSPM BSIOTR '27
        </p>
      </div>
    ),
    { ...size }
  )
}
