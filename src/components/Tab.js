import React from "react";

export function Tab({ isActive, onClick, children }) {
  return (
    <div
      onClick={onClick}
      style={{
        ...styles,
        borderBottom: isActive ? "2px solid black" : ""
      }}>
      {children}
    </div>
  );
}

const styles = {
  cursor: "pointer",
  padding: "15px 30px",
  background: "#f2f2f2",
  fontFamily: "Sans-serif",
  letterSpacing: 0.5
};
