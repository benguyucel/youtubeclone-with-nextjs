import * as React from "react";

function Hamburger() {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      className="style-scope yt-icon"
      style={{
        pointerEvents: "none",
        display: "block",
        width: "24px",
        height: "24px",
      }}
    >
      <g className="style-scope yt-icon">
        <path
          d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"
          className="style-scope yt-icon"
        />
      </g>
    </svg>
  );
}

export default Hamburger;
