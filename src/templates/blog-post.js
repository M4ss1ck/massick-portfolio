import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
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
          className="divide-y lg:divide-y-0 divide-gray-200 lg:grid lg:grid-cols-4 lg:col-gap-6 pb-16 lg:pb-20"
          style={{ gridTemplateRows: "auto 1fr" }}
        >
          <div className="lg:sticky top-12">
            <Bio />
            <nav className="blog-post-nav">
              <ul
                // style={{
                //   display: `flex`,
                //   flexWrap: `wrap`,
                //   justifyContent: `space-between`,
                //   listStyle: `none`,
                //   padding: 0,
                // }}
                className="flex flex-row lg:flex-col flex-wrap justify-between list-none p-2 last:pb-4"
              >
                <li>
                  {previous && (
                    <>
                      <p className="pt-4 uppercase font-light">Anterior</p>
                      <Link to={previous.fields.slug} rel="prev">
                        ← {previous.frontmatter.title}
                      </Link>
                    </>
                  )}
                </li>
                <li>
                  {next && (
                    <>
                      <p className="pt-4 uppercase font-light">Siguiente</p>
                      <Link to={next.fields.slug} rel="next">
                        {next.frontmatter.title} →
                      </Link>
                    </>
                  )}
                </li>
              </ul>
            </nav>
          </div>
          <div className="divide-y divide-gray-200 lg:pb-0 lg:col-span-3 lg:row-span-2 mx-4">
            <header className="text-center pb-4">
              <h1 itemProp="headline" className="text-4xl font-semibold ">
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
  ) {
    site {
      siteMetadata {
        title
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
