import React from "react"
import { graphql } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Comment from "../components/comment"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle} barra>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div
          className="grid grid-flow-col lg:grid-flow-row grid-cols-1 lg:grid-cols-4 lg:gap-6 pb-16 lg:pb-20 grid-rows-[auto_1fr] px-4 lg:px-2"
          //style={{ gridTemplateRows: "auto 1fr" }}
        >
          <aside className="lg:sticky top-20  px-4">
            <Bio />
            <nav className="blog-post-nav">
              <ul className="flex flex-row lg:flex-col flex-wrap justify-between list-none p-2 last:pb-4">
                <li>
                  {previous && (
                    <>
                      <p className="pt-4 uppercase font-light">
                        <Trans>Anterior</Trans>
                      </p>
                      <a
                        href={previous.fields.slug}
                        rel="prev"
                        className="hover:text-secundario"
                      >
                        ← {previous.frontmatter.title}
                      </a>
                    </>
                  )}
                </li>
                <li>
                  {next && (
                    <>
                      <p className="pt-4 uppercase font-light">
                        <Trans>Siguiente</Trans>
                      </p>
                      <a
                        href={next.fields.slug}
                        rel="next"
                        className="hover:text-secundario"
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
          <div className="col-span-full lg:col-span-3 lg:row-span-2">
            <header className="text-center py-4">
              <h1
                itemProp="headline"
                className="text-4xl font-semibold text-secundario"
              >
                {post.frontmatter.title}
              </h1>
              <p className="pt-4">{post.frontmatter.date}</p>
              <p>{post.timeToRead} min</p>
            </header>
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
              className="prose lg:prose-xl dark:prose-dark"
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
