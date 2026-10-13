import { useState } from 'react'
import Fejlec from './Fejlec'

function ColorChanger() {
  const [backgroundColor, setBackgroundColor] = useState('')

  function generateColor() {
    setBackgroundColor((currentColor) => {
      let nextColor = currentColor

      while (nextColor === currentColor) {
        nextColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
      }

      return nextColor
    })
  }

  return (
    <main style={{ backgroundColor, minHeight: '100vh', width: '100%' }}>
      <Fejlec />
      <button onClick={generateColor}>
        Új szín generálása
      </button>
    </main>
  )
}

export default ColorChanger
