import React from "react"
import { graphql } from "gatsby"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"

const PostItem = ({ data, pageContext }) => {
  const langKey = (pageContext && pageContext.langKey) || "pt-br"
  const post = (data && data.markdownRemark) || {}
  const title = post && post.frontmatter && post.frontmatter.title
  const html = (post && post.html) || ""

  return (
    <MainLayout>
      <SEO title={title} lang={langKey} />

      <article>
        <header>
          <h1>{title}</h1>
          <p>
            {post.frontmatter.date}
            {` • ${post.timeToRead}`}
          </p>
        </header>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </MainLayout>
  )
}

export const getPostBySlug = graphql`
  query getPostBySlug($slug: String!, $langKey: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(locale: $langKey, formatString: "DD MMMM, YYYY")
        spoiler
      }
      fields {
        slug
        langKey
      }
    }
  }
`

export default PostItem
