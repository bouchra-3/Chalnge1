import React, { useState } from "react";

function Couleur() {
  const [color, setColor] = useState("white");

  const colors = [
    "#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#FF6F91",
    "#845EC2", "#00C9A7", "#FFC75F", "#B0A8B9", "#0081CF"
  ];

  const changeColor = () => {
    const random = Math.floor(Math.random() * colors.length);
    setColor(colors[random]);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        transition: "background-color 0.8s ease"
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          padding: "40px",
          borderRadius: "16px",
          textAlign: "center",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)"
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#333" }}>🎨 Change la couleur de fond</h1>
        <button
          onClick={changeColor}
          style={{
            padding: "12px 30px",
            fontSize: "18px",
            background: "linear-gradient(90deg, #4D96FF, #6BCB77)",
            color: "white",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)"
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
          }}
        >
          🌈 Changer la couleur
        </button>
      </div>
    </div>
  );
}

export default Couleur;
