// ScrollToTopButton.jsx
import React from "react";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={scrollToTop} className="scroll-to-top-button">
      ir para o topo ⬆
    </button>
  );
};

export default ScrollToTopButton;
