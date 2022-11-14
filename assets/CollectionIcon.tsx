import * as React from "react";

function CollectionIcon(props: any) {
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
                    d="M21,16h-7v-1h7V16z M21,11H9v1h12V11z M21,7H3v1h18V7z M10,15l-7-4v8L10,15z"
                    className="style-scope yt-icon"
                />
            </g>
        </svg>
    );
}

export default CollectionIcon;
