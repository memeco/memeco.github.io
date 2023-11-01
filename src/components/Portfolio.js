// components/Portfolio.js

import React from "react";

function Portfolio() {
  return (
    <section id="portfolio" className="py-5">
      <div className="container">
        <h2>Portfólio</h2>

        <ul className="projetos">
          <li>
            <a href="https://HackAgenda.com.br/">
              <h3>HackAgenda</h3>
              <p>Agenda de eventos hackers e de tecnologia Brasil afora.</p>
            </a>
          </li>

          <li>
            <a href="https://trello.com/b/2m2eJTJd/quadro-portfolio">
              <h3>Trello do portfólio</h3>
              <p>Trello desse projeto de portfólio.</p>
              <img
                src="https://i.imgur.com/ughsDf9.png"
                alt="Portfolio"
                id="portfolioimg"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
