import * as React from "react";

function YoutubeIcon(props: any) {
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
                <defs className="style-scope yt-icon">
                    <radialGradient
                        cx="5.4%"
                        cy="7.11%"
                        r="107.93%"
                        fx="5.4%"
                        fy="7.11%"
                        gradientTransform="matrix(.70653 0 0 1 .016 0)"
                        className="style-scope yt-icon"
                    >
                        <stop
                            offset="0%"
                            stopColor="#FFF"
                            className="style-scope yt-icon"
                        />
                        <stop
                            offset="100%"
                            stopColor="#FFF"
                            stopOpacity={0}
                            className="style-scope yt-icon"
                        />
                    </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd" className="style-scope yt-icon">
                    <path d="M1 1h21.77v22H1z" className="style-scope yt-icon" />
                    <g fillRule="nonzero" className="style-scope yt-icon">
                        <path
                            fill="#F00"
                            d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z"
                            className="style-scope yt-icon"
                        />
                        <path
                            fill="#FAFAFA"
                            d="M9.68 8.9v6.18l5.84-3.1"
                            className="style-scope yt-icon"
                        />
                        <path
                            fill="#000"
                            fillOpacity={0.12}
                            d="M9.68 8.88l5.13 3.48.73-.38"
                            className="style-scope yt-icon"
                        />
                        <path
                            fill="#FFF"
                            fillOpacity={0.2}
                            d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v.1c.04-1.76.26-3.54.26-3.54s.2-1.5.86-2.17c.83-.88 1.75-.88 2.18-.93 3.04-.22 7.6-.2 7.6-.2s4.56-.02 7.6.2c.43.05 1.35.05 2.18.93.65.66.86 2.17.86 2.17s.22 1.78.23 3.55v-.1c0-1.8-.23-3.56-.23-3.56z"
                            className="style-scope yt-icon"
                        />
                        <path
                            fill="#3E2723"
                            fillOpacity={0.2}
                            d="M22.54 16.4s-.2 1.5-.86 2.17c-.83.87-1.75.88-2.18.93-3.04.22-7.6.2-7.6.2s-4.56.02-7.6-.2c-.43-.05-1.35-.06-2.18-.93-.65-.67-.86-2.18-.86-2.18s-.22-1.8-.26-3.57v-.1c.04 1.76.26 3.54.26 3.54s.2 1.5.86 2.17c.83.88 1.75.88 2.18.93 3.04.22 7.6.2 7.6.2s4.56.02 7.6-.2c.43-.05 1.35-.05 2.18-.93.65-.66.86-2.17.86-2.17s.22-1.78.23-3.55v.1c0 1.8-.23 3.56-.23 3.56z"
                            className="style-scope yt-icon"
                        />
                        <path
                            fill="#FFF"
                            fillOpacity={0.2}
                            d="M9.68 15.08v.1l5.84-3.08v-.12"
                            className="style-scope yt-icon"
                        />
                        <path
                            fill="#3E2723"
                            fillOpacity={0.2}
                            d="M9.68 8.9v-.13l5.84 3.1v.1"
                            className="style-scope yt-icon"
                        />
                        <path
                            fill="url(#youtube_round__a)"
                            fillOpacity={0.1}
                            d="M21.54 3.4s-.2-1.5-.86-2.18C19.85.35 18.93.35 18.5.3 15.46.07 10.9.1 10.9.1S6.34.07 3.3.3c-.43.05-1.35.05-2.18.92C.47 1.9.26 3.4.26 3.4S.04 5.17 0 6.95V8.6c.04 1.8.26 3.56.26 3.56s.2 1.52.86 2.18c.83.87 1.9.85 2.4.94 1.7.16 7.2.2 7.38.2 0 0 4.57 0 7.6-.2.43-.06 1.35-.07 2.18-.94.65-.66.86-2.18.86-2.18s.22-1.77.24-3.55V6.97c-.02-1.78-.24-3.55-.24-3.55z"
                            transform="translate(1 4.208)"
                            className="style-scope yt-icon"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default YoutubeIcon;
