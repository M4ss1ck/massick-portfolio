import * as React from "react"
import { graphql } from "gatsby"
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Inicio`
  const posts = data.allMarkdownRemark.nodes
  const intl = useIntl()
  if (posts.length === 0) {
    return (
      <Layout
        location={location}
        title={intl.formatMessage({ id: "titulo_portada" })}
      >
        <Seo
          lang={intl.locale}
          title={intl.formatMessage({ id: "no_posts" })}
        />
        <Bio />
        <p>
          <FormattedMessage id="nada" />
        </p>
      </Layout>
    )
  }

  return (
    <Layout
      location={location}
      title={intl.formatMessage({ id: "titulo_portada" })}
    >
      <Seo lang={intl.locale} title={siteTitle} />

      <ol style={{ listStyle: `none` }} className="">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2 className="text-lg font-bold text-secundario">
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
      <Bio />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD.MM.YY")
          title
          description
        }
      }
    }
  }
`
