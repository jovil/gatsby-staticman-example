import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Comments from '../components/comments'

export const query = graphql`
  query (
    $slug: String!
  ) {
    markdownRemark (
      fields: { slug: { eq: $slug } }
    ) {
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
      html
    }
  }
  `

const Blog = (props) => {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <small>{props.data.markdownRemark.frontmatter.date}</small>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}>
      </div>
      <Comments slug={props.data.markdownRemark.fields.slug} />
    </Layout>
  )
}

export default Blog