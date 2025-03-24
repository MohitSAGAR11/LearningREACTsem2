import React, { useState } from "react";

function RandomColor() {
    const[color, setColor] = useState("#ffffff");

    const randomColor = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setColor(randomColor);
    }

   return (
    <div style = {{backgroundColor: color , height: '100vh' , display: 'flex' , justifyContent: 'center' , alignItems: 'center'}}>
        <button onClick={randomColor}>Random Color</button>
    </div>
   );
}

export default RandomColor;