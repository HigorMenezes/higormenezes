import React from "react"
import { graphql } from "gatsby"
import MainLayout from "../layouts/MainLayout"
import SEO from "../components/SEO"
import PostListItem from "../components/PostListItem"

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
        const formatedDate =
          (node && node.frontmatter && node.frontmatter.formatedDate) || ""
        const date = (node && node.frontmatter && node.frontmatter.date) || ""
        const timeToRead = (node && node.timeToRead) || 0
        const spoiler =
          (node && node.frontmatter && node.frontmatter.spoiler) || ""

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
            formatedDate: date(locale: $langKey, formatString: "DD MMMM, YYYY")
            date
            title
            spoiler
          }
        }
      }
    }
  }
`
