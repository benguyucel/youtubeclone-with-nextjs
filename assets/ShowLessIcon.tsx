import * as React from "react";

function ShowLessIcon(props: any) {
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
                <polygon
                    points="18.4 14.6 12 8.3 5.6 14.6 6.4 15.4 12 9.7 17.6 15.4"
                    className="style-scope yt-icon"
                />
            </g>
        </svg>
    );
}

export default ShowLessIcon;
