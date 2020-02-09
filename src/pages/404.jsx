import React from "react"

import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <MainLayout>
    <SEO title="404: Not found" lang="pt-BR" />
    <h1>
      Vish, deu ruim{" "}
      <span role="img" aria-label="desconfortável">
        😖
      </span>
    </h1>
    <p>
      Infelizmente o conteúdo que está buscando se encontra indisponível ou fora
      da área de cobertura{" "}
      <span role="img" aria-label="chorar">
        😭
      </span>
      , por favor, tente mais tarde.
    </p>
  </MainLayout>
)

export default NotFoundPage
