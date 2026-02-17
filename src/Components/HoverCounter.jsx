import React from "react";

export default function HoverCounter({ count, incrementCount,theme }) {
    const style = theme === 'dark' ? {backgroundColor: "#000000", color: "#ffffff"} : null;

    return (
        <h1 onMouseOver={incrementCount} style={style}> 
            Hovered {count} times
        </h1>
    )
}