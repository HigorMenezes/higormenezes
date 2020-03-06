---
title: Como criar seu próprio blog
date: "2020-02-09"
spoiler: Eai, já pensou em criar seu próprio blog e compartilhar um pouco de seu conhecimento?
---

Gatsby é uma framework incrível e muito simples de utilizar que pode te ajudar muito na criação de sites. Uma das vantagem dessa tecnologia é o fato de você poder escrever seus blogs utilizando markdown e com apenas alguns plugs transformá-los em HTML, e com um bom CSS poder deixar isso incrível.

###Tecnologias utilizadas

Para desenvolver o exemplo de blog a seguir, foi utilizado as seguintes tecnologias e suas versões:

- [NodeJS](https://nodejs.org/en/) v12.16.0
- [npm](https://nodejs.org/en/) v6.13.4
- [yarn](https://classic.yarnpkg.com/en/docs/install/) v1.22.0
- [GatsbyJS](https://www.gatsbyjs.org/docs/quick-start/) v2.19.16
- [Gatsby CLI](https://www.gatsbyjs.org/docs/quick-start/) v2.8.29

Vale ressaltar que caso esteja utilizando versões diferentes das tecnologias pode ser que alguns passos para a criação do blog seja diferente, mas nada que uma boa pesquise não resolva seu problema, portanto, utilize a versão que te deixe mais confortável.

###Iniciando o projeto

Para iniciar o projeto, primeiro precisamos instalar a CLI do GatsbyJS.

```bash
npm i -g gatsby-cli
```

Após isto podemos então iniciar nosso projeto.

```bash
gatsby new nome-do-seu-projeto
```

Esse comando criará um projeto inicial de exemplo, pode demorar alguns minutos, como a nossa ideia é a criação de um blog, muito será modificado do projeto inicial.

###Projeto iniciado

A estrutura do projeto gerado é a seguinte:

```text
.
+-- node_modules
|    ...
+-- src
|  +-- components
|    ...
|  +-- images
|    ...
|  +-- pages
|    ...
+-- .gitignore
+-- .prettierignore
+-- .prettierrc
+-- gatsby-browser.js
+-- gatsby-config.js
+-- gatsby-node.js
+-- gatsby-ssr.js
+-- LICENSE
+-- package.json
+-- README.md
+-- yarn.lock

```

Este é um bom momento para tirar um tempo lendo e entendo o código gerado para se familiarizar com o Gatsby. Caso queira rodar o projeto criado, execute o comando `gatsby develop` na raiz do projeto. É apenas um projeto simples com imagem e rotas, porém é um grande ponto de partida já que essas funcionalidades são indispensáveis na grande maioria das aplicações web.

###Configurações iniciais

Como iremos aproveitar alguns componentes criados pelo inicializador de projetos do Gatsby, faremos algumas alterações nos arquivos gerados.

Começaremos as alterações no arquivo `gatsby-config.js` que se encontra na raiz do projeto.

A primeira alteração que vamos fazer é no objeto `siteMetadata` que é utilizado para armazenar valores que se pretende utilizar pelo o site, nesse caso, pode colocar os valores de sua preferência porém vou deixar os valores colocados por mim logo abaixo.

```js
module.exports = {
  siteMetadata: {
    title: `Meu blog exemplo`,
    description: `Apenas um exemplo de blog`,
    author: `Higor Menezes`,
  },
  ...
}
```

Ainda no mesmo arquivo, podemos remover os plugins `gatsby-source-filesystem`,  `gatsby-transformer-sharp` e `gatsby-plugin-sharp` que são plugins vinculados a exibição de imagens, e não usaremos isso nesse exemplo, também podemos remover o plugin `gatsby-plugin-manifest` pois não criaremos um PWA nesse momento, também podemos remover os mesmos plugins das dependências no arquivo `package.json` na raiz do projeto, e o nosso arquivo `gatsby-config.js` ficou:

```js
module.exports = {
  siteMetadata: {
    title: `Meu blog exemplo`,
    description: `Apenas um exemplo de blog`,
    author: `Higor Menezes`,
  },
  plugins: [`gatsby-plugin-react-helmet`],
}

```

No caso deixamos apenas deixamos apenas o plugin `gatsby-plugin-react-helmet` pois reutilizaremos o componente `seo.js` que nos auxilia com os motores de busca.

###Eliminando arquivos desnecessários

Bom, se você tentar rodar o projeto agora, alguns erros ocorrerão, isso por quê foram removidos alguns plugins que era utilizado pelo código, então agora vamos deletar arquivos desnecessários relatora outros para que nosso projeto volte a funcionar.

Vamos começar deletando a pasta `images` dentro da pasta `src`; também deletaremos os arquivos `404.js` e `page-2.js` que se encontra na pasta `src/pages`; dentro da pasta `src/components` vamos apenas deixar o arquivo `seo.js`. Nossa estrutura de pasta passa a ser a seguinte:

```text
.
+-- node_modules
|    ...
+-- src
|  +-- components
|    +-- seo.js
|  +-- pages
|    +-- index.js
+-- .gitignore
+-- .prettierignore
+-- .prettierrc
+-- gatsby-browser.js
+-- gatsby-config.js
+-- gatsby-node.js
+-- gatsby-ssr.js
+-- LICENSE
+-- package.json
+-- README.md
+-- yarn.lock
```

E para finalizar vamos editar o arquito `src/pages/index.js`.

```jsx
import React from "react"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" lang="pt-br" />
    <h1>Meu blog uhull o/</h1>
  </>
)

export default IndexPage

```

Agora sim no temos nosso incrível blog funcionando, bom, talvez não tão incrível ainda.