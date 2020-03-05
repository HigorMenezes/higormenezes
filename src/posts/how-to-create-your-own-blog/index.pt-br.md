---
title: Como criar seu próprio blog
date: "2020-02-09"
spoiler: Eai, já pensou em criar seu próprio blog e compartilhar um pouco de seu conhecimento?
---

Gatsby é uma framework incrível, e muito simples de utilizar que pode te ajudar muito na criação do seu próprio blog. Uma das vantagem dessa tecnologia é o fato de você poder escrever seus blogs utilizando markdown e com apenas alguns plugs transformá-los em HTML, e com um bom CSS poder deixar isso incrível.

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

A estrutura do projeto gerado pelo é a seguinte:

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

Como iremos aproveitar alguns componentes criados pelo inicializador de projetos do Gatsby, faremos algumas alterações nos arquivos gerados

###Eliminando arquivos desnecessários

A estrutura do projeto gerado pelo `cli` é a seguinte, podendo se diferenciar de acordo com a versão utilizada.

```text
...
+-- src
|  +-- components
|    ...
|  +-- images
|    ...
|  +-- pages
|    +-- 404.js
|    +-- index.js
|    +-- page-2.js
...
```

Podemos então eliminar toda a pasta `components` e `images` pois não utilizaremos ela no momento, também podemos deletar os arquivos `404.js` e `page-2.js` que estão dentro da pasta `pages`.
