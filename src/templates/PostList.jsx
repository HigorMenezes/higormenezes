import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";
import PostListItem from "../components/PostListItem";

const PostList = ({ data, pageContext }) => {
  const { langKey } = pageContext;
  const posts = data.allMarkdownRemark.edges;

  return (
    <MainLayout>
      <SEO
        title="Póstis"
        description="Apenas que... Busquem conhecimento"
        lang={langKey}
      />
      {posts.map(({ node }) => {
        const { timeToRead } = node;
        const { slug } = node.fields;
        const { title, formatedDate, date, spoiler } = node.frontmatter;

        return (
          <PostListItem
            key={slug}
            slug={slug}
            title={title}
            spoiler={spoiler}
            formatedDate={formatedDate}
            date={date}
            timeToRead={timeToRead}
          />
        );
      })}
    </MainLayout>
  );
};

export const getAllPosts = graphql`
  query getAllPosts($langKey: String!) {
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            langKey
          }
          timeToRead
          frontmatter {
            formatedDate: date(locale: $langKey, formatString: "DD MMMM, YYYY")
            date
            title
            spoiler
          }
        }
      }
    }
  }
`;

PostList.defaultProps = {
  pageContext: {
    langKey: "pt-br",
  },
};

PostList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
              langKey: PropTypes.string.isRequired,
            }).isRequired,
            timeToRead: PropTypes.number.isRequired,
            frontmatter: PropTypes.shape({
              formatedDate: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              spoiler: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    langKey: PropTypes.string,
  }),
};

export default PostList;
