import React from "react";
import "./App.css";

// Helper function to darken a hex color
function darkenColor(hex, percent) {
  let num = parseInt(hex.replace("#", ""), 16);
  let r = Math.max(0, ((num >> 16) & 0xFF) - percent);
  let g = Math.max(0, ((num >> 8) & 0xFF) - percent);
  let b = Math.max(0, (num & 0xFF) - percent);
  return `rgb(${r},${g},${b})`;
}

function App() {
  const petalCounts = [36, 30, 24, 18, 12];
  const radii = [200, 180, 140, 100, 60];
  const colors = [
    "#216404ff", // bright coral
    "#ffb400ff", // golden yellow
    "#ba0909ff", // fresh green
    "#7b0890ff", // royal purple
    "#e25d1fff"  // festive blue
  ];

  return (
    <div className="App">
      <h1>🌼 Onam Pookalam 🌼</h1>
      <div className="content">
        {/* Pookalam */}
        <div className="svg-container">
          <svg width="500" height="500" viewBox="0 0 500 500">
            {petalCounts.map((count, ring) =>
              Array.from({ length: count }).map((_, i) => (
                <ellipse
                  key={`${ring}-${i}`}
                  cx="250"
                  cy={250 - radii[ring]}
                  rx={35}
                  ry={50}
                  fill={colors[ring]}
                  stroke={darkenColor(colors[ring], 60)} // darker border
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  transform={`rotate(${(360 / count) * i} 250 250)`}

                  opacity="0.9"
                  className="petal"
                />
              ))
            )}
            {/* Center Circle */}
            <circle
              cx="250"
              cy="250"
              r="45"
              fill="#fff"
              stroke="#FF4081"
              strokeWidth="6"
            />
          </svg>
        </div>

        {/* Side Panel */}
        <div className="side-panel">
          <h2>🌸 Pookalam Details</h2>
          {petalCounts.map((count, ring) => (
            <div key={ring} className="ring-details">
              <h3>Ring {ring + 1}</h3>
              <p><b>Petals:</b> {count}</p>
              <p><b>Radius:</b> {radii[ring]} px</p>
              <p>
                <b>Color:</b>
                <span
                  className="color-box"
                  style={{ backgroundColor: colors[ring] }}
                ></span>
                {colors[ring]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
