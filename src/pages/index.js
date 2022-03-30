import * as React from "react"
import { graphql } from "gatsby"
import {
  Trans,
  useTranslation,
  useI18next,
  Link,
} from "gatsby-plugin-react-i18next"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Projects from "../components/projects"

import { GatsbyImage } from "gatsby-plugin-image"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `home`
  const description = data.site.siteMetadata?.description || `home`
  const posts = data.allMarkdownRemark.nodes

  const { t } = useTranslation()
  const { language } = useI18next()
  if (posts.length === 0) {
    return (
      <Layout location={location} title={t("titulo_portada")}>
        <Seo
          lang={language}
          title={t("no_posts")}
          description={t(description)}
        />
        <Bio />
        <p>
          <Trans>nada</Trans>
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={t("titulo_portada")}>
      <Seo lang={language} title={t(siteTitle)} />

      <Projects limit={5} />
      <span className="font-montserrat text-primario dark:text-secundario mb-8 px-4 rounded-lg outline-1 outline outline-transparent hover:outline-primario dark:hover:outline-secundario">
        <Link to="/portfolio">
          <Trans>Ver más</Trans>
        </Link>
      </span>
      <h2 className="mt-2 text-lg lg:text-2xl font-montserrat uppercase text-primario dark:text-secundario  animate-bounce z-20 dark:z-20">
        <Trans>articles</Trans>
      </h2>

      {/* scroll-down button */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 my-4 animate-bounce text-primario dark:text-secundario"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
        />
      </svg>
      <ol style={{ listStyle: `none` }} className="max-w-prose">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const slug = post.fields.slug
          return (
            <li key={slug} className="">
              <article
                className="grid grid-cols-3 grid-rows-2 gap-4 my-2"
                itemScope
                itemType="http://schema.org/Article"
              >
                {post.frontmatter.featuredImage && (
                  <div className="my-4 row-span-2">
                    <GatsbyImage
                      image={
                        post.frontmatter.featuredImage.childImageSharp
                          .gatsbyImageData
                      }
                      layout="fullWidth"
                      placeholder="tracedSVG"
                      alt={post.frontmatter.description || ""}
                    />
                  </div>
                )}
                <header className="col-span-2 row-span-1 my-auto">
                  <h2 className="text-lg font-bold text-primario dark:text-secundario mt-2">
                    <a href={slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </a>
                  </h2>
                  <small className="text-sm">{post.frontmatter.date}</small>
                </header>
                <section className="col-span-2 row-span-1">
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
        <span className="font-montserrat text-primario dark:text-secundario text-center flex justify-center mb-8 px-4 rounded-lg outline-1 outline outline-transparent hover:outline-primario dark:hover:outline-secundario">
          <Link to="/blog">
            <Trans>Ver más</Trans>
          </Link>
        </span>
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
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { locale: { eq: $language }, draft: { eq: false } }
      }
      limit: 5
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
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
