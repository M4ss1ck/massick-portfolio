import * as React from "react"
import { graphql } from "gatsby"
import { Trans, useTranslation, useI18next } from "gatsby-plugin-react-i18next"

import Bio from "../../components/bio"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

import { GatsbyImage } from "gatsby-plugin-image"

import Fuse from "fuse.js"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  const { t } = useTranslation()
  const { language } = useI18next()

  const [query, updateQuery] = React.useState("")

  const onSearch = e => {
    updateQuery(e.target.value)
  }

  if (posts.length === 0) {
    return (
      <Layout location={location} title={t("articles")}>
        <Seo lang={language} title={t("no_posts")} description={t("nada")} />
        <Bio />
        <p>
          <Trans>nada</Trans>
        </p>
      </Layout>
    )
  }

  const fuse = new Fuse(posts, {
    isCaseSensitive: false,
    includeMatches: true,
    keys: ["frontmatter.title", "frontmatter.description"],
  })

  const results = fuse.search(query)

  //console.log(results)

  return (
    <Layout location={location} title={t("articles")}>
      <Seo lang={language} title={t("articles")} />
      <h1 className="mt-4 text-lg uppercase lg:text-2xl font-rammetto text-primario dark:text-secundario">
        <Trans>articles</Trans>
      </h1>
      <input
        id="search"
        type="text"
        placeholder={t("Search")}
        className="w-full px-2 text-lg bg-transparent border rounded-lg outline-none max-w-prose text-primario dark:text-secundario border-primario dark:border-secundario focus:outline-none"
        onChange={onSearch}
      />
      <ol className="z-10 py-4 list-none max-w-prose">
        {results.map(e => {
          const item = e.item
          const title = item.frontmatter.title || item.fields.slug
          const slug = item.fields.slug
          return (
            <li key={slug}>
              <article
                className="grid grid-cols-3 grid-rows-2 gap-4 my-2"
                itemScope
                itemType="http://schema.org/Article"
              >
                {item.frontmatter.featuredImage && (
                  <div className="relative row-span-2 my-4">
                    <GatsbyImage
                      image={
                        item.frontmatter.featuredImage.childImageSharp
                          .gatsbyImageData
                      }
                      alt=""
                      className="relative top-0 w-full h-full blur-sm hue-rotate-30"
                      objectFit="cover"
                    />
                    <GatsbyImage
                      image={
                        item.frontmatter.featuredImage.childImageSharp
                          .gatsbyImageData
                      }
                      layout="fullWidth"
                      alt={item.frontmatter.description || ""}
                      // className="absolute left-0 w-full -translate-y-1/2 top-1/2"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "0",
                        transform: "translate(0,-50%)",
                        width: "100%",
                        maxHeight: "90%",
                      }}
                      imgStyle={{ objectPosition: "50% 0%" }}
                    />
                  </div>
                )}
                <header className="col-span-2 row-span-1 my-auto">
                  <h2 className="mt-2 text-lg font-bold text-primario dark:text-secundario">
                    <a href={slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </a>
                  </h2>
                  <small className="text-sm">{item.frontmatter.date}</small>
                </header>
                <section className="col-span-2 row-span-1">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.frontmatter.description || item.excerpt,
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
      {results.length === 0 && query !== "" ? (
        <h1>
          <Trans>No matches found</Trans>
        </h1>
      ) : null}
      {query === "" ? (
        <ol style={{ listStyle: `none` }} className="z-10 py-4 max-w-prose">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const slug = post.fields.slug
            return (
              <li key={slug}>
                <article
                  className="grid grid-cols-3 grid-rows-2 gap-4 my-2"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  {post.frontmatter.featuredImage && (
                    <div className="relative row-span-2 my-4">
                      <GatsbyImage
                        image={
                          post.frontmatter.featuredImage.childImageSharp
                            .gatsbyImageData
                        }
                        alt=""
                        className="relative top-0 w-full h-full blur-sm hue-rotate-30"
                        objectFit="cover"
                      />
                      <GatsbyImage
                        image={
                          post.frontmatter.featuredImage.childImageSharp
                            .gatsbyImageData
                        }
                        layout="fullWidth"
                        alt={post.frontmatter.description || ""}
                        // className="absolute left-0 w-full -translate-y-1/2 top-1/2"
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "0",
                          transform: "translate(0,-50%)",
                          width: "100%",
                          maxHeight: "90%",
                        }}
                        imgStyle={{ objectPosition: "50% 0%" }}
                      />
                    </div>
                  )}
                  <header className="col-span-2 row-span-1 my-auto">
                    <h2 className="mt-2 text-lg font-bold text-primario dark:text-secundario">
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
        </ol>
      ) : null}
      <hr className="mt-auto" />
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
