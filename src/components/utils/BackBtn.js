import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import chroma from "chroma-js";

import "./backBtn.scss";

const BackBtn = ({ setActiveTab }) => {
  const navigate = useNavigate();
  const glowButtonRef = useRef(null); // Ссылка на glow-кнопку

  const goHome = (e) => {
    e.preventDefault();
    // Плавный скролл вверх
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
    setActiveTab(0);
  };

  useEffect(() => {
    const button = glowButtonRef.current;

    if (!button) return;

    // Добавление элемента с классом "gradient"
    let gradientElem = button.querySelector(".gradient");
    if (!gradientElem) {
      gradientElem = document.createElement("div");
      gradientElem.classList.add("gradient");
      button.appendChild(gradientElem);
    }

    const handlePointerMove = (e) => {
      const rect = button.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Анимация GSAP для указателя
      gsap.to(button, {
        "--pointer-x": `${x}px`,
        "--pointer-y": `${y}px`,
        duration: 0.6,
      });

      // Анимация свечения
      gsap.to(button, {
        "--button-glow": chroma
          .mix(
            getComputedStyle(button)
              .getPropertyValue("--button-glow-start")
              .trim(),
            getComputedStyle(button)
              .getPropertyValue("--button-glow-end")
              .trim(),
            x / rect.width
          )
          .hex(),
        duration: 0.2,
      });
    };

    // Добавление слушателя
    button.addEventListener("pointermove", handlePointerMove);

    // Очистка при размонтировании
    return () => {
      button.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      <button
        ref={glowButtonRef}
        className="glow-button"
        onClick={goHome}
      >
        <span>На главную</span>
      </button>
    </>
  );
};

export default BackBtn;
