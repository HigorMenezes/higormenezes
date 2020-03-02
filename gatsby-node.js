const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const PostList = path.resolve(`./src/templates/PostList.jsx`);
  const PostItem = path.resolve(`./src/templates/PostItem.jsx`);

  createPage({
    path: "/posts/",
    component: PostList,
    context: {
      langKey: "pt-br",
    },
  });

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                langKey
                directoryName
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({ node }) => {
      const slug = (node && node.fields && node.fields.slug) || "";
      const langKey = (node && node.fields && node.fields.langKey) || "pt-br";

      createPage({
        path: slug,
        component: PostItem,
        context: {
          slug,
          langKey,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (
    node &&
    node.internal &&
    node.internal.type &&
    node.internal.type === `MarkdownRemark`
  ) {
    const fileAbsolutePath = node.fileAbsolutePath || "";

    const directoryName = path.basename(path.dirname(fileAbsolutePath));
    const fileName = path.basename(fileAbsolutePath);

    createNodeField({
      node,
      name: "directoryName",
      value: directoryName,
    });

    createNodeField({
      node,
      name: "langKey",
      value: fileName.split(".")[1],
    });

    createNodeField({
      node,
      name: "slug",
      value: `/posts/${directoryName}`,
    });
  }
};
