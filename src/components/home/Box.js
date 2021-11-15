import React, { useState } from "react";
import "./Box.css";

const Box = () => {
  const [minValue, setMinValue] = useState(-200);
  const [maxValue, setMaxValue] = useState(200);
  const [value, setValue] = useState();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  console.log("value is ...", value);
  return (
    <>
      <div className="main">
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

        <div className="card" style={{ boxShadow: `${value}px 0px` }}></div>
      </div>
    </>
  );
};

export default Box;
