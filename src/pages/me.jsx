import React from "react";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";

const MePage = () => (
  <MainLayout>
    <SEO
      title="It's me, Higor"
      description="Que tal me conhecer um pouco melhor"
      lang="pt-BR"
    />
    <h1>
      It&rsquo;s me, myself and I&nbsp;
      <span role="img" aria-label="musica">
        🎶
      </span>
    </h1>
    <p>
      Eai galera, me chamo Higor Aparecido Menezes tenho 23 anos de idade, e sou
      apaixonado pela linguagem Javascript. Atualmente estou morando em
      Florianópolis-SC e trabalho na empresa Softplan Planejamento e Sistemas.
    </p>
    <p>
      Eu possuo vários objetivos de vida, como qualquer outra pessoa, dentre
      esses objetivos se destacam: morar em outro país, me tornar referência em
      minha área de atuação, crescer profissionalmente (quem sabe me tornar um
      arquiteto de software) e o mais importante, compartilhar meu conhecimento,
      acredito que essa seja a maior motivação para a criação desse meu site
      pessoal.
    </p>
    <p>
      Acredito que eu seja uma pessoa meio metódica, gosto muito de entender o
      por que das coisas, e as vezes até recriálas do zero para tentar sentir
      toda a dificuldade. Em minha opnião, reenventar a roda é uma forma
      fantástica de aprender.
    </p>
    <p>
      E bem, uma frase que levo para a minha vida é:&nbsp;
      <i>&ldquo;Ninguém poderá dizer que eu não tentei&rdquo;</i>; Não sei se
      essa frase tem um autor específico, mas com certeza ela me motiva a sempre
      continuar em frente e assim poder estar cada vez mais próximo dos meus
      objetivos.
    </p>
  </MainLayout>
);

export default MePage;
