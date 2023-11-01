import React from "react";
import "./App.css";
import "./style.css";
import Sobre from "./components/Sobre";
import RedesSociais from "./components/RedesSociais";
import Portfolio from "./components/Portfolio";
import Contato from "./components/Contato";

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Meu Portfólio</h1>
        </div>
      </header>

      <nav className="container navbar navbar-expand-lg navbar-custom">
        <div className="container mx-auto text-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#sobre">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#redes">
                  Redes Sociais
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfólio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contato">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Sobre />
      <RedesSociais />
      <Portfolio />
      <Contato />

      <footer id="footer">
        <div className="container">Portfólio &copy; 2023</div>
      </footer>
    </div>
  );
}

export default App;
