import React from "react"
import { graphql } from "gatsby"
import { Trans, Link } from "gatsby-plugin-react-i18next"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Comment from "../components/Comment"

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    locales: {
      edges: {
        node: {
          ns: string
          data: any
          language: string
        }
      }
    }
    markdownRemark: {
      id: string
      excerpt: string
      html: any
      frontmatter: {
        title: string
        date: string
        description: string
        locale: string
        categories: string
        featuredImage: {
          childImageSharp: {
            gatsbyImageData: any
          }
        }
      }
      timeToRead: string
    }
    previous: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    }
    next: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    }
  }
  location: Location
}

const BlogPostTemplate = ({ data, location }: Props) => {
  const post = data.markdownRemark
  const categories = post.frontmatter.categories.split(",")
  const siteTitle = data.site.siteMetadata?.title || `Blog`
  const { previous, next } = data
  return (
    <Layout location={location} title={siteTitle} barra>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        featuredImage={
          post.frontmatter.featuredImage.childImageSharp.gatsbyImageData
        }
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div
          className="grid grid-flow-col lg:grid-flow-row grid-cols-1 lg:grid-cols-3 lg:gap-6 pb-16 lg:pb-20 grid-rows-[auto_1fr] px-4 lg:px-2"
          //style={{ gridTemplateRows: "auto 1fr" }}
        >
          <aside className="px-4 lg:sticky top-20 col-span-full lg:col-span-1">
            <Bio />
            <nav className="blog-post-nav">
              <ul className="flex flex-row flex-wrap justify-between p-2 text-gray-600 list-none lg:flex-col last:pb-4 dark:text-gray-400">
                <li>
                  {previous && (
                    <>
                      <p className="pt-4 font-light uppercase text-primario dark:text-secundario">
                        <Trans>Anterior</Trans>
                      </p>
                      <a
                        href={previous.fields.slug}
                        rel="prev"
                        className="hover:text-primario dark:hover:text-secundario"
                      >
                        ← {previous.frontmatter.title}
                      </a>
                    </>
                  )}
                </li>
                <li>
                  {next && (
                    <>
                      <p className="pt-4 font-light uppercase text-primario dark:text-secundario">
                        <Trans>Siguiente</Trans>
                      </p>
                      <a
                        href={next.fields.slug}
                        rel="next"
                        className="hover:text-primario dark:hover:text-secundario"
                      >
                        {next.frontmatter.title} →
                      </a>
                    </>
                  )}
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main article */}
          <div className="prose col-span-full lg:col-span-2 lg:row-span-4 prose-headings:text-primario dark:prose-dark">
            <header className="py-4 text-center">
              <h1
                itemProp="headline"
                className="text-4xl font-extrabold text-primario dark:text-secundario"
              >
                {post.frontmatter.title}
              </h1>
              <ul className="flex flex-row flex-wrap items-center justify-center text-sm list-none">
                <Link
                  className="no-underline text-primario dark:text-secundario hover:text-black dark:hover:text-white"
                  to="/categories"
                  title="See all"
                >
                  <Trans>Categories</Trans>:{" "}
                </Link>
                {categories.map((category: string) => (
                  <li key={category}>
                    <Link
                      to={`/categories/${category.trim().toLowerCase()}`}
                      className="px-2 mx-2 no-underline rounded-lg outline outline-2 outline-primario dark:outline-secundario text-primario dark:text-secundario hover:text-black dark:hover:text-white hover:outline-black dark:hover:outline-white"
                    >
                      {category.trim()}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="pt-2">{post.frontmatter.date}</p>
              <p>{post.timeToRead} min</p>
            </header>
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
              className=""
            />
            <Comment />
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
    $language: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        description
        locale
        categories
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      timeToRead
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
