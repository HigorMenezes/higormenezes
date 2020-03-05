import React from "react";

import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";

const IndexPage = () => (
  <MainLayout>
    <SEO title="Oi, meu chapa" lang="pt-BR" />
    <article>
      <h1>
        Oi, meu chapa&nbsp;
        <span role="img" aria-label="texugo">
          🦡
        </span>
      </h1>
      <p>
        Este site tem o intuito de compartilhar um pouco do meu conhecimento no
        mundo das tecnologias da informação, compartilhando um pouco das minhas
        experiências pessoais e profissionais que envolve esse tema.
      </p>
      <p>
        O site possui duas paletas de cores, escura e clara, caso a que esteja
        utilizando nesse momento esteja incomodando seus olhos&nbsp;
        <span role="img" aria-label="olhos">
          👀
        </span>
        , clique na lâmpada&nbsp;
        <span role="img" aria-label="lâmpada">
          💡
        </span>
        &nbsp;a direita do cabeçalho&nbsp;
        <span role="img" aria-label="seta na diagonal direita superior">
          ↗
        </span>
        &nbsp;.
      </p>
      <p>
        Todo o desenvolvimento desse site é de código aberto&nbsp;
        <span role="img" aria-label="festa">
          🎉
        </span>
        &nbsp;e está disponível no meu&nbsp;
        <a
          href="https://github.com/HigorMenezes/higormenezes"
          target="_blank"
          rel="noopener noreferrer"
        >
          gitHub
        </a>
        . Caso queira fazer o seu site pessoal, eu apoio cem porcento essa
        decisão e não vejo problema algum em utilizar o meu como base&nbsp;
        <span role="img" aria-label="joinha">
          👍
        </span>
        .
      </p>
      <p>
        Caso discorde de qualquer conteúdo presente nesse site, estou
        completamente disposto para termos uma conversa amigável discutindo esse
        tópico, compartilhar conhecimento nunca é demais.
      </p>
      <p>
        Para entrar em contato comigo, minhas redes sociais estão no rodapé,
        logo aqui embaixo&nbsp;
        <span role="img" aria-label="seta para baixo">
          ⬇
        </span>
        .
      </p>
    </article>
  </MainLayout>
);

export default IndexPage;
