---
title: Como criar seu próprio blog
date: "2020-02-09"
spoiler: Eai, já pensou em criar seu próprio blog e compartilhar um pouco de seu conhecimento?
---

Gatsby é uma framework incrível, e muito simples de utilizar que pode te ajudar muito na criação do seu próprio blog. Uma das vantagem dessa tecnologia é o fato de você poder escrever seus blogs utilizando markdown e utilizando alguns plugs e transformá-los em HTML, e com um bom CSS poder deixar isso incrível.

###Tecnologias utilizadas

Para desenvolver o este blog, foi utilizado as seguintes tecnologias e suas versões:

- [NodeJS](https://nodejs.org/en/) v12.16.0
- [npm](https://nodejs.org/en/) v6.13.4
- [yarn](https://classic.yarnpkg.com/en/docs/install/) v1.22.0
- [GatsbyJS](https://www.gatsbyjs.org/docs/quick-start/) v2.19.16
- [Gatsby CLI](https://www.gatsbyjs.org/docs/quick-start/) v2.8.29

Vale ressaltar que caso esteja utilizando versões diferentes das tecnologias pode ser que alguns passos para a criação do blog seja diferente, mas nada que uma boa pesquise não resolva seu problema, portanto, utilize a versão que te deixe mais confortável.

### Iniciando o projeto

Para iniciar o projeto, primeiro precisamos instalar a CLI do GatsbyJS.

```bash
npm i -g gatsby-cli
```

Após isto podemos então iniciar nosso projeto.

```bash
gatsby new nome-do-seu-projeto
```

Esse comando criará um projeto inicial de exemplo, como a nossa ideia é a criação de um blog, grande parte do projeto inicial será descartado.

### Eliminando arquivos desnecessários

