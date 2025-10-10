import React from "react";
import "./LogoLoop.css";


const logos = [
    "/logos/react.svg.png",
    "/logos/js.svg.png",
    "/logos/tailwind.svg",
    "/logos/html.svg.png",
    "/logos/css.svg.png",
];

export default function LogoLoop() {
    return (
        <div className="logo-loop-wrapper">
            <div className="logo-loop">
                {logos.concat(logos).map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt="Tech Logo"
                        className="logo-img"
                        draggable="false"
                    />
                ))}
            </div>
        </div>
    );
}
