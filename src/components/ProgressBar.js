// Create a react component that mimics a progres-bar
// The progression should happen automatically every "delay" seconds

import React, { useState, useRef } from "react";
const ProgressBar = () => {
  const [width, setWidth] = useState(0);
  const delay = 200;
  let renderCount = useRef(0);
  renderCount.current++;
  setTimeout(() => {
    if (width < 100) {
      setWidth((prevWidth) => prevWidth + 1);
    }
  }, delay);
  console.log(`Render Count = ${renderCount.current}`);
  return (
    <>
      <div
        style={{
          maxWidth: "100%",
          height: "50px",
          border: "5px solid black",
          margin: "10px",
          marginRight: "10px",
        }}
      >
        <div
          style={{
            maxWidth: `${width}%`,
            height: "40px",
            backgroundColor: "blue",
          }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
