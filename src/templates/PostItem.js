import React from "react"
import { graphql } from "gatsby"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import Post from "../components/Post"

const PostItem = ({ data, pageContext }) => {
  const langKey = (pageContext && pageContext.langKey) || "pt-br"
  const post = (data && data.markdownRemark) || {}
  const title = (post && post.frontmatter && post.frontmatter.title) || ""
  const date = (post && post.frontmatter && post.frontmatter.date) || ""
  const formatedDate =
    (post && post.frontmatter && post.frontmatter.formatedDate) || ""
  const html = (post && post.html) || ""
  const timeToRead = (post && post.timeToRead) || 0

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
`

export default PostItem
