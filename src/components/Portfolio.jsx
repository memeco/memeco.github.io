// components/Portfolio.jsx

import React from "react";

function Portfolio() {
  return (
    <section id="portfolio" className="py-5">
      <div className="container">
        <h2>Meu portfólio</h2>
        <p>Meus projetos e repositórios do GitHub:</p>

        <ul className="projetos">
          <li>
            <a href="https://github.com/memeco?tab=repositories">
              <h3>Repositórios do meu GitHub (2012 ➔ presente)</h3>
              <p>Repositórios do meu GitHub.</p>
            </a>
          </li>

          <li>
            <a href="https://HackAgenda.com.br/">
              <h3>HackAgenda.com.br (2013 ➔ presente)</h3>
              <p>
                Agenda de eventos hackers e de tecnologia Brasil afora feito em
                WordPress.
              </p>
            </a>
          </li>
          <li>
            <a href="https://memeco.github.io/">
              <h3>memeco.github.io (2023 ➔ presente)</h3>
              <p>Este portfólio feito em React e Boostrap no GitHub Pages.</p>
            </a>
          </li>
          <li>
            <a href="https://trello.com/b/2m2eJTJd/quadro-portfolio">
              <h3>Trello do portfólio (2023 ➔ presente)</h3>
              <p>Trello desse projeto de portfólio.</p>
              <img
                src="https://i.imgur.com/ZfwRSNa.png"
                alt="Trello do portfólio"
                title="Trello do portfólio"
                id="portfolioimg"
              />
            </a>
          </li>
          <li>
            <a href="https://vercel.com/memecodeploy">
              <h3>vercel.com/memecodeploy (2024-presente)</h3>
              <p>Meus deploys na Vercel.</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
