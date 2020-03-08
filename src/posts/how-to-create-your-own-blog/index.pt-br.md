---
title: Como criar seu próprio blog
date: "2020-02-09"
spoiler: Eai, já pensou em criar seu próprio blog e compartilhar um pouco de seu conhecimento?
---

Gatsby é uma framework incrível e muito simples de utilizar que pode te ajudar muito na criação de sites. Uma das vantagem dessa tecnologia é o fato de você poder escrever artigos utilizando `markdown` e com apenas alguns plugins transformá-los em HTML, e com um bom CSS poder deixar isso incrível.

## Tecnologias utilizadas

Para desenvolver o exemplo de blog a seguir, foi utilizado as seguintes tecnologias e suas versões:

- [NodeJS](https://nodejs.org/en/) v12.16.0
- [npm](https://nodejs.org/en/) v6.13.4
- [yarn](https://classic.yarnpkg.com/en/docs/install/) v1.22.0
- [GatsbyJS](https://www.gatsbyjs.org/docs/quick-start/) v2.19.16
- [Gatsby CLI](https://www.gatsbyjs.org/docs/quick-start/) v2.8.29

Vale ressaltar que caso esteja utilizando versões diferentes das tecnologias pode ser que alguns passos para a criação do blog seja diferente, mas nada que uma boa pesquise não resolva seu problema, portanto, utilize a versão que te deixe mais confortável.

## Iniciando o projeto

Para iniciar o projeto, primeiro precisamos instalar a CLI do GatsbyJS.

```bash
npm i -g gatsby-cli
```

Após isto podemos então iniciar nosso projeto.

```bash
gatsby new nome-do-seu-projeto
```

Esse comando criará um projeto inicial de exemplo, pode demorar alguns minutos, como a nossa ideia é a criação de um blog, muito será modificado do projeto inicial.

## Projeto iniciado

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

## Configurações iniciais

Como iremos aproveitar alguns componentes criados pelo inicializador de projetos do Gatsby, faremos algumas alterações nos arquivos gerados.

Começaremos as alterações no arquivo `gatsby-config.js` que se encontra na raiz do projeto.

A primeira alteração que vamos fazer é no objeto `siteMetadata` que é utilizado para armazenar valores que se pretende utilizar pelo o site, nesse caso, pode colocar os valores de sua preferência porém vou deixar os valores colocados por mim logo abaixo.

```js
module.exports = {
  siteMetadata: {
    title: `Meu blog exemplo`,
    description: `Apenas um exemplo de blog`,
    author: `Higor Menezes`
  },
  ...
}
```

Ainda no mesmo arquivo, podemos remover os plugins `gatsby-source-filesystem`, `gatsby-transformer-sharp` e `gatsby-plugin-sharp` que são plugins vinculados a exibição de imagens, e não usaremos isso nesse exemplo, também podemos remover o plugin `gatsby-plugin-manifest` pois não criaremos um PWA nesse momento, também podemos remover os mesmos plugins das dependências no arquivo `package.json` na raiz do projeto, e o nosso arquivo `gatsby-config.js` ficou:

```js
module.exports = {
  siteMetadata: {
    title: `Meu blog exemplo`,
    description: `Apenas um exemplo de blog`,
    author: `Higor Menezes`,
  },
  plugins: [`gatsby-plugin-react-helmet`],
};
```

No caso deixamos apenas deixamos apenas o plugin `gatsby-plugin-react-helmet` pois reutilizaremos o componente `seo.js` que nos auxilia com os motores de busca.

## Eliminando arquivos desnecessários

Bom, se você tentar rodar o projeto agora, alguns erros ocorrerão, isso por quê foram removidos alguns plugins que era utilizado pelo código, então agora vamos deletar arquivos desnecessários e editar outros para que nosso projeto volte a funcionar.

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
import React from "react";
import SEO from "../components/seo";

const IndexPage = () => (
  <>
    <SEO title="Home" lang="pt-br" />
    <h1>Meu blog uhull o/</h1>
  </>
);

export default IndexPage;
```

Agora sim no temos nosso incrível blog funcionando, bom, talvez não tão incrível ainda.

## Criando o layout do blog

O layout do nosso blog será um arquivo simples, que conterá um header e o conteúdo principal. Esse arquivo também terá a funcionalidade de carregar alguns arquivos `css` e também de realizar uma query `GraphQL` para recuperar os meta-dados que preenchemos no arquivo `gatsby-config.js`, nosso arquivo `src/components/layout.js` ficará assim:

```jsx
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./style.css";

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <div className="layout">
      <header>
        <h1>{site.siteMetadata.title}</h1>
        <h2>{site.siteMetadata.description}</h2>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
```

Após isso, podemos então atualizar nosso arquivo `src/pages/index.js` para utilizar esse layout.

```jsx{3,6,8,9}
import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" lang="pt-br" />
    <p>Meu blog uhull o/</p>
  </Layout>
);

export default IndexPage;
```

## Definindo a pasta dos artigos

Para inicio, precisamos definir uma pasta na qual ficará todo o conteúdo dos artigos escritos para o blog, no nosso caso, todos os arquivos markdown. Eu particularmente gosto de adicionar um pasta chamada `posts` na raiz do projeto, e para cada artigo eu crio uma pasta com um arquivo `index.md`, dentro da pasta `posts` , segue o exemplo:

```text
...
+-- src
|  ...
|  +-- posts
|    +-- nome-do-primeiro-artigo
|      +-- index.md
|    +-- nome-do-segundo-artigo
|      +-- index.md
|  ...
...
```

E no caso, o nome dado a a pasta é o nome utilizado na URL como rota do artigo, por exemplo: `meublog.com/meus-artigos/nome-do-primeiro-artigo`. Por tanto, vamos reproduzir esse exemplo acima na nossa estrutura de pastas.

Agora temos que escrever algum conteúdo nos nossos arquivos `index.md`, caso não tenha nada em mente apoio o uso de algum gerador como por exemplo o [lorem ipsun](https://loremipsum.io/generator/).

```tex{1-5}
---
title: Meu primeiro artigo
date: "2020-02-09"
spoiler: Este é apenas meu primeiro artigo
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate dignissim
suspendisse. Cras tincidunt lobortis feugiat vivamus. Varius morbi enim nunc faucibus a
pellentesque. Nullam eget felis eget nunc lobortis. Diam vulputate ut pharetra sit amet aliquam.
At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Volutpat ac tincidunt vitae
semper quis. Quam nulla porttitor massa id. Integer eget aliquet nibh praesent tristique magna
sit. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Aliquet enim
tortor at auctor urna nunc id cursus. Tristique nulla aliquet enim tortor at auctor urna nunc.
Accumsan sit amet nulla facilisi morbi. Mauris sit amet massa vitae tortor condimentum lacinia
quis vel.
```

Os dados que estão entre o símbolos `---` são de grande importância, já que será os dados que serão recuperados pela página via `graphQL`, você pode dar qualquer nome as variáveis e declarar quantas quiser, no caso, foi declarada `title`, `date` e `spoiler`, pois é as que serão importantes para nosso blog. Fique a vontade para escrever o outro artigo, é interessantes escrevermos pelo menos 2 para que possamos representar melhor um blog.

## Criando a pagina de lista de artigos

Para criar a página que listará todos os artigos escritos utilizaremos uma abordagem um pouco diferente do que só criar um arquivo na pasta `src/pages`, utilizaremos o arquivo `gatsby-node.js` para criá-la através de uma template. Vamos começar então criando um template genérico para listar os artigos. Criaremos então o arquivo `src/templates/PostList.js`.

```jsx
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const PostList = () => (
  <Layout>
    <SEO title="Artigos" lang="pt-br" />
    <div>Meus posts o/</div>
  </Layout>
);

export default PostList;
```

Após isso, vamos ao arquivo `gatsby-node.js` para utilizar a API createPages disponibilizada para criarmos nossa página de artigos. Caso queira ler um pouco mais sobre o arquivo `gatsby-node.js` e suas APIs [clique aqui](https://www.gatsbyjs.org/docs/node-apis/).

```js
const path = require("path");

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const PostList = path.resolve("./src/templates/PostList.js");

  createPage({
    path: "/posts/",
    component: PostList,
  });
};
```

Em resumo, esse código faz com que nosso template se torne uma página e seja acessível através do path `/posts/`.

Então agora voltaremos ao arquivo `src/pages/index.js` para que possamos criar um link para acessar a página que lista os artigos.

```jsx{2,24}
import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" lang="pt-br" />
    <div className="home-page">
      <h1>Bem vindo</h1>
      <p>
        Duis ultricies lacus sed turpis tincidunt. Ac orci phasellus egestas
        tellus. Porttitor massa id neque aliquam vestibulum. Amet nisl purus in
        mollis nunc. Aliquet porttitor lacus luctus accumsan. Nunc aliquet
        bibendum enim facilisis gravida neque convallis a cras. Morbi leo urna
        molestie at elementum eu facilisis sed odio. Quisque id diam vel quam
        elementum pulvinar etiam. At auctor urna nunc id cursus. Aliquam sem
        fringilla ut morbi. In ante metus dictum at tempor. Vitae congue mauris
        rhoncus aenean vel elit scelerisque mauris pellentesque. Dolor sit amet
        consectetur adipiscing. Morbi blandit cursus risus at ultrices mi.
        Aenean sed adipiscing diam donec adipiscing. Enim ut tellus elementum
        sagittis vitae et leo duis ut.
      </p>
      <Link to="/posts/">Lista de artigos</Link>
    </div>
  </Layout>
);

export default IndexPage;
```

Também aproveitei para adicionar mais algumas coisinhas na página pois estava muito vazia.

Agora nós precisamos recuperar todos os artigos que estão disponíveis na pasta `src/posts`, e para isso utilizaremos dois plugin para que os arquivos fiquem disponível via query `graphQL`. O primeiro é `gatsby-source-filesystem` que permitirá que os arquivos de uma determinada pasta fique acessível via query e o `gatsby-transformer-remark` que transforma os arquivos `markdown` em `MarkdownRemark` podendo assim ser convertido para `HTML`, Portanto devemos adicionar esses dois plugins no nosso arquivo `gatsby-config.js`.

```js{9-16}
module.exports = {
  siteMetadata: {
    title: `Meu blog exemplo`,
    description: `Apenas um exemplo de blog`,
    author: `Higor Menezes`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
```

Agora podemos voltar ao arquivo `src/templates/PostList.js` e adicionar um query `graphQL` para poder listar os artigos escritos.

```jsx{2,6-7,12-28,34-48}
import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const PostList = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO title="Artigos" lang="pt-br" />
      <div className="post-list">
        {edges.map(({ node }) => {
          const { title, spoiler, formatedDate } = node.frontmatter;

          return (
            <Link>
              <article>
                <header>
                  <h2>{title}</h2>
                  <h3>{spoiler}</h3>
                </header>
                <small>{formatedDate}</small>
              </article>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export const getAllPosts = graphql`
  query getAllPosts {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            formatedDate: date(locale: "pt-br", formatString: "DD MMMM, YYYY")
            title
            spoiler
          }
        }
      }
    }
  }
`;

export default PostList;
```

Porém ainda está faltando algo, foi dito que iriamos utilizar o nome da pasta de onde se encontra o arquivo `markdown` para criar a URL para o artigo, e nesse momento estamos precisando do nome da pasta para podermos clicar em um artigo e ser direcionado ao conteúdo dele. Por isso, iremos voltar ao arquivo `gatasby-node.js` para utilizarmos uma outra API, `onCreateNode`, para podermos adicionar campos personalizados nos `onde` que são retornados da consulta `graphQL`.

```js
...
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const fileAbsolutePath = node.fileAbsolutePath || ""
    const directoryName = path.basename(path.dirname(fileAbsolutePath))

    createNodeField({
      node,
      name: "path",
      value: `/posts/${directoryName}`,
    })
  }
}
```

Agora podemos, no arquivo `src/templates/PostList.js` alterar a query `graphQL` para buscar pelo campo `path`e adicioná-lo no componente `Link` para redirecionar para a página do artigo, que ainda não foi criada mas será em breve.

```jsx{5,8,21-23}
...
<div className="post-list">
  {edges.map(({ node }) => {
    const { title, spoiler, formatedDate } = node.frontmatter
    const { path } = node.fields

    return (
      <Link key={path} to={path}>
        ...
      </Link>
    )
  })}
</div>
...

export const getAllPosts = graphql`
  query getAllPosts {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            path
          }
          ...
        }
      }
    }
  }
`

export default PostList
```

## Criando uma página para cada artigo

Agora de forma similar a criação da página de listagem de artigos, vamos criar a página que irá mostrar o conteúdo do artigo. Vamos iniciar criando um template genérico `src/templates/Post.js`.

```jsx
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Post = () => (
  <Layout>
    <SEO title="Meu post" lang="pt-br" />
    <div>Meu post o/</div>
  </Layout>
);

export default Post;
```

Agora vamos até o arquivo `gatsby-node.js` para criarmos as páginas que usarão esse template.

```js
exports.createPages = ({ graphql, actions }) => {
  ...
  return graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fields {
                path
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      const path = node.fields.path

      createPage({
        path,
        component: Post,
      })
    })
  })
}
...
```

Com isso, nossa as páginas para cada artigo foi criada, e precisamos agora realizar uma query `graphQL` no template de artigo, `src/templates/Post.js`, para que possamos recuperar o conteúdo do `markdown` em formato `HTML` e exibir na página.

```jsx{2,6-8,13-21, 27-35}
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Post = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const { title, formatedDate } = frontmatter;

  return (
    <Layout>
      <SEO title="Meu post" lang="pt-br" />
      <div className="post">
        <article>
          <header>
            <h2>{title}</h2>
            <small>{formatedDate}</small>
          </header>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </div>
    </Layout>
  );
};

export const getPostByPath = graphql`
  query getPostByPath($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        formatedDate: date(locale: "pt-br", formatString: "DD MMMM, YYYY")
      }
    }
  }
`;

export default Post;
```

E pronto, agora basta popular a sua pasta `src/posts` com todos seus artigos escritos em `markdown` que ao subir o projeto todos eles se tornaram uma página `HTML` respeitando os templates feito.

## Informações adicionáis

O `gatsby` disponibiliza uma série de plugins para que possa customizar ainda mais as páginas e o `HTML` gerado através do arquivo `markdown`, porém esse artigo já esta muito extenso para abordarmos isso por agora e acredito ser melhor abordar esse conteúdo em um outro artigo.
