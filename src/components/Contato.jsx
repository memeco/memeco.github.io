import React, { useEffect } from "react";

function Contato() {
  useEffect(() => {
    const emailElement = document.getElementById("email");
    if (emailElement) {
      emailElement.textContent = "emerson.pedro@alumni.usp.br";
    }
  }, []);

  return (
    <section id="contato" className="py-5">
      <div className="container">
        <h2>Contato</h2>
        <p>
          Envie um e-mail para <span id="email"></span>
        </p>
      </div>
    </section>
  );
}

export default Contato;
