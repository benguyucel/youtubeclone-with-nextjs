import * as React from "react";

function HomeIcon(props: any) {
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
                    d="M4,10V21h6V15h4v6h6V10L12,3Z"
                    className="style-scope yt-icon"
                />
            </g>
        </svg>
    );
}

export default HomeIcon;
