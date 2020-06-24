const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type == 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/post.js')

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)

  // Create pages for each markdown file.
  result.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.fields.slug}`,
      component: blogTemplate,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })
}