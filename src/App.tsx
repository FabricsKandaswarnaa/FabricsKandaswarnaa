import React, { useEffect, useState } from "react";
import MainRoutes from "./Components/00-MainRoutes/MainRoutes";
import "./App.css";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const hoverTargets = document.querySelectorAll("button, a, .hover-target");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => setIsHovered(true));
      el.addEventListener("mouseleave", () => setIsHovered(false));
    });

    window.addEventListener("mousemove", moveHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", () => setIsHovered(true));
        el.removeEventListener("mouseleave", () => setIsHovered(false));
      });
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor hidden lg:block ${
          isHovered ? "hovered" : ""
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <MainRoutes />
    </>
  );
};

export default App;
