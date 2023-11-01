// components/RedesSociais.js

import React from "react";

function RedesSociais() {
  return (
    <section id="redes" className="py-5">
      <div className="container">
        <h2>Redes Sociais</h2>
        <p>
          Facebook:{" "}
          <a href="https://www.fb.com/emersonmp">
            https://www.fb.com/emersonmp
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/emersonmp/">
            https://www.linkedin.com/in/emersonmp/
          </a>
        </p>
        <p>
          Github:{" "}
          <a href="https://github.com/memeco">https://github.com/memeco</a> e{" "}
          <a href="https://memeco.github.io">https://memeco.github.io</a>
        </p>
      </div>
    </section>
  );
}

export default RedesSociais;
