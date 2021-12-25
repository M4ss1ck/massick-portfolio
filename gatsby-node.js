const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// TODO: prepend /blog/ to all blog posts

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { frontmatter: { draft: { eq: false } } }
          sort: {
            fields: [frontmatter___date, frontmatter___locale]
            order: ASC
          }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              locale
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `Hubo un error cargando los posts de blog.`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const language = post.frontmatter.locale

      const previousPostId =
        index === 0
          ? null
          : posts[index - 1].frontmatter.locale === language
          ? posts[index - 1].id
          : null
      const nextPostId =
        index === posts.length - 1
          ? null
          : posts[index + 1].frontmatter.locale === language
          ? posts[index + 1].id
          : null

      const newSlug = post.fields.slug

      console.log(newSlug, "\n esto es en createPages")
      createPage({
        path: newSlug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
          language,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    //const newValue = value.replace(/\/(.+)\/(.+)\//, `\/$2\/$1\/`)
    const regex = new RegExp(`\/(.+)\/(.+)\/`)
    // redirecting /es to /
    const newValue = regex.test(value)
      ? value
          .replace(/\/(.+)\/(.+)\//, `\/$2\/blog\/$1\/`)
          .replace(/\/es\//, `/`)
      : value.replace(/\/(.+)\//, `\/blog\/$1\/`).replace(/\/es\//, `/`)
    console.log(newValue, "\n esto es en onCreateNode")
    createNodeField({
      name: `slug`,
      node,
      value: newValue,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions

  createFieldExtension({
    name: "defaultFalse",
    extend() {
      return {
        resolve(source, args, context, info) {
          if (source[info.fieldName] == null) {
            return false
          }
          return source[info.fieldName]
        },
      }
    },
  })
  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      draft: Boolean @defaultFalse
      locale: String
    }

    type Fields {
      slug: String
    }
  `)
}
