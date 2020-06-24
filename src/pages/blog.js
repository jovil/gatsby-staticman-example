import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'

import s from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout >
      <ol className={s.posts}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li className={s.post}>
              <h2>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol >
    </Layout>
  )
}
export default BlogPage
