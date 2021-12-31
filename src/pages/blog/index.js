import * as React from "react"
import { graphql } from "gatsby"
import { Trans, useTranslation, useI18next } from "gatsby-plugin-react-i18next"

import Bio from "../../components/bio"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Inicio`
  const posts = data.allMarkdownRemark.nodes
  const { t } = useTranslation()
  const { language } = useI18next()
  if (posts.length === 0) {
    return (
      <Layout location={location} title={t("titulo_portada")}>
        <Seo lang={language} title={t("no_posts")} />
        <Bio />
        <p>
          <Trans>nada"</Trans>
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={t("titulo_portada")}>
      <Seo lang={language} title={siteTitle} />
      <ol style={{ listStyle: `none` }} className="py-4 z-10">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const slug = post.fields.slug
          return (
            <li key={slug}>
              <article
                className="post-list-item my-2"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2 className="text-lg font-bold text-secundario mt-2">
                    <a href={slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </a>
                  </h2>
                  <small className="text-sm">{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                    className="mb-2"
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
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { locale: { eq: $language }, draft: { eq: false } }
      }
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
