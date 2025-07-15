import React from 'react';
import { useState } from "react";
function Couleur() {
    const [color, setColor] = useState("white");

  const changeColor = () => {
    const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "black",
  "white",
  "gray",
  "brown"
];

    const random = Math.floor(Math.random() * colors.length);
    setColor(colors[random]);
  };
    return (
        <div>
            <div
             style={{ backgroundColor: color, height: "100vh", padding: "2rem" }}>
                    <h1>Change la couleur de fond</h1>
                    <button onClick={changeColor}>Changer</button>
            </div>
  
        </div>
    );
}

export default Couleur;