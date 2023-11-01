// components/Sobre.js

import React from "react";

function Sobre() {
  return (
    <section id="sobre" className="py-5">
      <div className="container">
        <h2>Sobre mim</h2>
        <img
          id="foto"
          src="https://avatars.githubusercontent.com/u/3230685?v=4"
          alt="Emerson Marques Pedro"
        />
        <br />
        <br />
        <p>
          Meu nome é Emerson Marques Pedro, tenho 37 anos e sou sociólogo e
          cientista político pela USP (2010) e desenvolvedor Front-End formado
          na SoulCode Academy (2023).
        </p>
        <p>Sou apaixonado por desenvolvimento e música.</p>
        <p>Meu objetivo é aprender e seguir crescendo.</p>
        <p>Aqui você pode encontrar alguns detalhes sobre meus projetos.</p>
      </div>
    </section>
  );
}

export default Sobre;
