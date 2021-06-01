import React, { useState } from 'react'

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
      <div className="all sliders">
        <div className="hue slide container">
          <h2>H</h2>
          {/* hue slider */}
          <input
            type="range"
            min="0"
            max="360"
            value={hValue}
            className="h slider"
            onChange={changeH}
          ></input>
        </div>
        <div className="saturation slide container">
          {/* saturation slider */}
          <h2>S</h2>
          <input
            type="range"
            min="0"
            max="100"
            value={sValue}
            className="s slider"
            onChange={changeS}
          ></input>
        </div>
        <div className="lightness slide container">
          {/* lightness slider */}
          <h2>L</h2>
          <input
            type="range"
            min="0"
            max="100"
            value={lValue}
            className="l slider"
            onChange={changeL}
          ></input>
        </div>
      </div>
    </div>
  )
}
