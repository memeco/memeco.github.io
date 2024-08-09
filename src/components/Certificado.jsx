import React, { useState, useEffect } from "react";

function Certificado() {
  // eslint-disable-next-line
  const [linkColor, setLinkColor] = useState("blue");

  useEffect(() => {
    const links = document.querySelectorAll(".certificados a");
    for (const link of links) {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
      link.addEventListener("click", handleClick);
    }

    return () => {
      for (const link of links) {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
        link.removeEventListener("click", handleClick);
      }
    };
  });

  function handleMouseEnter(e) {
    e.target.style.color = "#FFFFFF";
  }

  function handleMouseLeave(e) {
    if (e.target.tagName === "A") {
      e.target.style.color = linkColor;
    }
  }

  function handleClick(e) {
    if (e.target.tagName === "A") {
      e.target.style.color = "blue";
    }
  }

  return (
    <section
      id="certificado"
      className="py-5"
      style={{ backgroundColor: "#CCCCCC" }}
    >
      <div className="container">
        <h2>Meus certificados</h2>

        <p>Meus certificados e qualificações:</p>

        <ul className="certificados">
          <li>
            <p>
              Agosto de 2023 -{" "}
              <a
                href="https://www.credly.com/earner/earned/badge/b012a013-6920-427c-8107-68b36145cfd0"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                style={{ color: linkColor }}
                alt="Certificado Profissional de Análise de Dados do Google e Coursera"
                title="Certificado Profissional de Análise de Dados do Google e Coursera"
              >
                Certificado Profissional de Análise de Dados do Google e
                Coursera.
              </a>
            </p>
          </li>
          <li>
            <p>
              Agosto de 2023 -&nbsp;
              <a
                href="https://imgur.com/Xm4B7PC"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                style={{ color: linkColor }}
                alt="Certificado de conclusão do Bootcamp PcD para desenvolvedor Front-End com React e Bootstrap da SoulCode Academy"
                title="Certificado de conclusão do Bootcamp PcD para desenvolvedor Front-End com React e Bootstrap da SoulCode Academy"
              >
                Certificado de conclusão do Bootcamp PcD para desenvolvedor
                Front-End com React e Bootstrap da SoulCode Academy.
              </a>
            </p>
          </li>
          <li>
            <p>
              Março de 2024 -{" "}
              <a
                href="https://imgur.com/a/dP0EpX6"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                style={{ color: linkColor }}
                alt="Meu inglês - 65/100 B2 Upper Intermediate por EF SET"
                title="Meu inglês - 65/100 B2 Upper Intermediate por EF SET"
              >
                Meu inglês - 65/100 B2 Upper Intermediate por EF SET.
              </a>
            </p>
          </li>
          <li>
            <p>
              Abril de 2024 -{" "}
              <a
                href="https://imgur.com/a/P5FV19f"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                style={{ color: linkColor }}
                alt="Certificado Git e GitHub pela PcDWeb"
                title="Certificado Git e GitHub pela PcDWeb"
              >
                Certificado Git e GitHub pela PcDWeb.
              </a>
            </p>
          </li>
          <li>
            <p>
              Junho de 2024 -{" "}
              <a
                href="https://imgur.com/a/certificado-de-conclus-o-5gjK2AY"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                style={{ color: linkColor }}
                alt="Certificado de conclusão do Bootcamp PcD da Microsoft e SoulCode Academy sobre nuvem (Azure), Python e IA"
                title="Certificado de conclusão do Bootcamp PcD da Microsoft e SoulCode Academy sobre nuvem (Azure), Python e IA"
              >
                Certificado de conclusão do Bootcamp PcD da Microsoft e SoulCode
                Academy sobre nuvem (Azure), Python e IA.
              </a>
            </p>
          </li>
          <li>
            <p>
              Agosto de 2024 -{" "}
              <a
                href="https://imgur.com/gallery/ai-900-microsoft-certified-azure-ai-fundamentals-fb2IE4K"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                style={{ color: linkColor }}
                alt="AI-900: Microsoft Certified Azure AI Fundamentals"
                title="AI-900: Microsoft Certified Azure AI Fundamentals"
              >
                AI-900: Microsoft Certified Azure AI Fundamentals
              </a>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Certificado;
