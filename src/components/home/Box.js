import React, { useState } from "react";
import "./Box.css";

const Box = () => {
  const [minValue, setMinValue] = useState(-60);
  const [maxValue, setMaxValue] = useState(60);
  const [value, setValue] = useState(0);
  const [bluerValue, setbluerValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleChangeBluer = (e) => {
    setbluerValue(e.target.value);
  };
  console.log("value is ...", value);
  return (
    <>
      <div className="main">
        <div className="container-for-ranges">
        <div className="inner-div-for-range-section">
          <div className="label-adjustment">
            <label className="label-text-size">Horizental Length</label>
            <div className="value-box-setting">
              <div className="length-value">{value}</div>
              <span className="span-setting">px</span>
            </div>
          </div>
          <div className="text-field">
            <input
              type="range"
              name="x-axis-border"
              min={minValue}
              max={maxValue}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* ---------- for Bluer Radius--------- */}
        <div className="inner-div-for-range-section">
          <div className="label-adjustment">
            <label className="label-text-size">Horizental Bluer</label>
            <div className="value-box-setting">
              <div className="length-value">{bluerValue}</div>
              <span className="span-setting">px</span>
            </div>
          </div>
          <div className="text-field">
            <input
              type="range"
              name="x-axis-border"
              min={minValue}
              max={maxValue}
              onChange={handleChangeBluer}
            />
          </div>
        </div>
        </div>
        <div className="card" style={{ boxShadow: `${value}px 2px ${bluerValue}px rgb(0, 191, 255, 0.1)` }}></div>
      </div>
    </>
  );
};

export default Box;
