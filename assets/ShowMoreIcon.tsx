import * as React from "react";

function ShowMoreIcon(props: any) {
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
                    d="M12,15.7L5.6,9.4l0.7-0.7l5.6,5.6l5.6-5.6l0.7,0.7L12,15.7z"
                    className="style-scope yt-icon"
                />
            </g>
        </svg>
    );
}

export default ShowMoreIcon;
