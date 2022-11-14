import * as React from "react";

function YourVideosIcon(props:any) {
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
      {...props}
    >
      <g className="style-scope yt-icon">
        <path
          d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z"
          className="style-scope yt-icon"
        />
      </g>
    </svg>
  );
}

export default YourVideosIcon;
