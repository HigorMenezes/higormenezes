import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";
import Post from "../components/Post";

const PostItem = ({ data, pageContext }) => {
  const { langKey } = pageContext;
  const post = data.markdownRemark;
  const { html, timeToRead } = post;
  const { title, date, formatedDate } = post.frontmatter;

  return (
    <MainLayout>
      <SEO title={title} lang={langKey} />
      <Post
        title={title}
        formatedDate={formatedDate}
        date={date}
        timeToRead={timeToRead}
        html={html}
      />
    </MainLayout>
  );
};

export const getPostBySlug = graphql`
  query getPostBySlug($slug: String!, $langKey: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date
        formatedDate: date(locale: $langKey, formatString: "DD MMMM, YYYY")
        spoiler
      }
      fields {
        slug
        langKey
      }
    }
  }
`;

PostItem.defaultProps = {
  pageContext: {
    langKey: "pt-br",
    slug: "/",
  },
};

PostItem.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      id: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      timeToRead: PropTypes.number.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        formatedDate: PropTypes.string.isRequired,
        spoiler: PropTypes.string.isRequired,
      }).isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        langKey: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    langKey: PropTypes.string,
    slug: PropTypes.string,
  }),
};

export default PostItem;
