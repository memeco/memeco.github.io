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
          alt="Emerson Marques Pedro (Memeco)"
          title="Emerson Marques Pedro (Memeco)"
        />
        <br />
        <br />
        <p>
          Meu nome é Emerson Marques Pedro, também conhecido como "
          <a href="https://memeco.com.br">Memeco</a>", tenho 37 anos e sou um
          Hacker Cívico, venci um hackathon do TCE-SP em 2015, recebendo o
          prêmio do então governador de São Paulo, Geraldo Alckmin,{" "}
          <a href="https://i.imgur.com/1M9VA7B.jpg">
            sociólogo e cientista político pela USP
          </a>
          &nbsp; (2006-2010), cientista de dados pela Awari (2021), analista de
          dados certificado{" "}
          <a href="https://www.coursera.org/account/accomplishments/professional-cert/BVEHSFR4UNES?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof">
            pelo Google no Coursera
          </a>{" "}
          (2023),{" "}
          <a href="https://imgur.com/a/YabEyUk">
            desenvolvedor/programador Front End com React e Bootstrap
          </a>
          &nbsp;(2023), e{" "}
          <a href="https://imgur.com/a/certificado-de-conclus-o-5gjK2AY">
            analista de nuvem (Azure), Python e IA
          </a>{" "}
          (2024) pela SoulCode Academy com Microsoft.
        </p>
        <p>
          Atualmente estou fazendo um curso de desenvolvedor Full Stack pela{" "}
          <a href="https://devstars.tech/">DevStars Tech</a> chamado PCDWeb.
        </p>

        <p>
          Também tenho um site, o{" "}
          <a href="https://HackAgenda.com.br">HackAgenda</a>, uma agenda de
          eventos de tecnologia/hackers pelo Brasil, ele foi fundado em setembro
          de 2013 e é um site em WordPress.
        </p>
        <p>
          Sou apaixonado por desenvolvimento/programação e música. Já fui à mais
          de 320 shows, segundo meu{" "}
          <a href="https://www.setlist.fm/user/memeco">Setlist.fm</a>.
        </p>
        <p>Meu objetivo é aprender e seguir crescendo.</p>
        <p>
          Tenho cidadania brasileira 🇧🇷 e portuguesa 🇵🇹, com identidade e
          passaporte dos 2 países.
        </p>
        <p>
          Sou PcD, pois tenho esclerose múltipla (CID G 35). Por isso sou
          cadeirante. ♿
        </p>
        <p>
          Aqui você pode encontrar alguns detalhes sobre meus projetos e
          habilidades.
        </p>
        <p>
          E aqui está meu{" "}
          <a
            href="https://bit.ly/EmersonMarquesPedroCV"
            rel="noopener noreferrer"
            target="_blank"
            alt="Curriculum Vitae"
            title="Curriculum Vitae"
          >
            Curriculum Vitae 2024
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default Sobre;
