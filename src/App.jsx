import React, { useState } from 'react'
import ColorSlider from './components/ColorSlider'

export function App() {
  // hooks here

  const [hValue, setHValue] = useState(Math.ceil(Math.random() * 360))
  const [sValue, setSValue] = useState(Math.ceil(Math.random() * 100))
  const [lValue, setLValue] = useState(Math.ceil(Math.random() * 100))

  //functions here
  function changeH(event) {
    setHValue(event.target.value)
  }

  function changeS(event) {
    setSValue(event.target.value)
  }

  function changeL(event) {
    setLValue(event.target.value)
  }
  function randomColor(event) {
    setHValue(Math.ceil(Math.random() * 360))
    setSValue(Math.ceil(Math.random() * 100))
    setLValue(Math.ceil(Math.random() * 100))
  }

  return (
    <div className="everything">
      <header>
        <h1>Color</h1>
        {/* box that shows color */}
        <div
          className="color output box"
          style={{
            backgroundColor: `hsl(${hValue}, ${sValue}%, ${lValue}%)`,
          }}
        ></div>
        <p>
          hsl({hValue}, {sValue}%, {lValue}%)
        </p>
        <button onClick={randomColor}>Random Color</button>
      </header>
      <ColorSlider
        hue={hValue}
        sat={sValue}
        light={lValue}
        updateH={changeH}
        updateS={changeS}
        updateL={changeL}
      />
    </div>
  )
}
