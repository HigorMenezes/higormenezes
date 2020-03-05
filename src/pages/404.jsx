import React from "react";

import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";

const NotFoundPage = () => (
  <MainLayout>
    <SEO title="Not found" description="Vish, deu ruim" lang="pt-BR" />
    <article>
      <h1>
        Vish, deu ruim&nbsp;
        <span role="img" aria-label="desconfortável">
          😖
        </span>
      </h1>
      <p>
        Infelizmente o conteúdo que está buscando se encontra indisponível ou
        fora da área de cobertura&nbsp;
        <span role="img" aria-label="chorar">
          😭
        </span>
        , por favor, tente mais tarde.
      </p>
    </article>
  </MainLayout>
);

export default NotFoundPage;
