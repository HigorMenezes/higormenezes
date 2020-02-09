import React from "react"
import { graphql, Link } from "gatsby"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"

const PostList = ({ data, pageContext }) => {
  const langKey = (pageContext && pageContext.langKey) || "pt-br"
  const posts =
    (data && data.allMarkdownRemark && data.allMarkdownRemark.edges) || []

  return (
    <MainLayout>
      <SEO title="Postagens" lang={langKey} />
      {posts.map(({ node }) => {
        const title = (node && node.frontmatter && node.frontmatter.title) || ""
        const slug = (node && node.fields && node.fields.slug) || ""

        return (
          <article key={slug}>
            <header>
              <h3>
                <Link to={node.fields.slug}>{title}</Link>
              </h3>
              <small>
                {node.frontmatter.date}
                {` • ${node.timeToRead}`}
              </small>
            </header>
            <p>
              {(node && node.frontmatter && node.frontmatter.spoiler) || ""}
            </p>
          </article>
        )
      })}
    </MainLayout>
  )
}

export default PostList

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
            date(locale: $langKey, formatString: "DD MMMM, YYYY")
            title
            spoiler
          }
        }
      }
    }
  }
`
