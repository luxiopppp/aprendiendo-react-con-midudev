import { useEffect, useState } from "react"

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0})

  // pointer move
  useEffect(() => {
    console.log('effect', {enabled})

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY})
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // -> cleanup para que deje de ejecutarse el efecto
    // -> cuando cambian depen y antes de ejec de nuevo el efecto
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // no cursor
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      <main>
        <div style={{
          position: 'absolute',
          backgroundColor: 'rgba(177, 93, 255, 0.479)',
          borderRadius: '50%',
          opacity: .8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}></div>
        <button onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Desactivar' : 'Activar'}
        </button>
      </main>
    </>
  )
}

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
