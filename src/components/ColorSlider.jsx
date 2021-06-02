import React from 'react'

export default function ColorSlider(props) {
  return (
    <div className="all sliders">
      <div className="hue slide container">
        <h2>H</h2>
        {/* hue slider */}
        <input
          type="range"
          min="0"
          max="360"
          value={props.hue}
          className="h slider"
          onChange={props.updateH}
        ></input>
      </div>
      <div className="saturation slide container">
        {/* saturation slider */}
        <h2>S</h2>
        <input
          type="range"
          min="0"
          max="100"
          value={props.sat}
          className="s slider"
          onChange={props.updateS}
        ></input>
      </div>
      <div className="lightness slide container">
        {/* lightness slider */}
        <h2>L</h2>
        <input
          type="range"
          min="0"
          max="100"
          value={props.light}
          className="l slider"
          onChange={props.updateL}
        ></input>
      </div>
    </div>
  )
}
