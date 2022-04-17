import React from "react"
import { graphql } from "gatsby"
import { Trans, Link, useTranslation } from "gatsby-plugin-react-i18next"
import Bio from "../components/bio"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Comment from "../components/comment"

const CategoryTemplate = ({ data, location, pageContext: { category } }) => {
  const posts = data.allMarkdownRemark
  const { t } = useTranslation()
  const siteTitle = `${t("Category")}: "${category}"`
  const description = `${t("Blogposts with category")} "${category}"`
  return (
    <Layout location={location} title={siteTitle} barra>
      <Seo title={siteTitle} description={description} />
      <article
        className="categories"
        // itemScope
        // itemType="http://schema.org/Article"
      >
        <div className="grid grid-flow-col lg:grid-flow-row grid-cols-1 lg:grid-cols-4 lg:gap-6 pb-16 lg:pb-20 grid-rows-[auto_1fr] px-4 lg:px-2 py-4">
          <aside className="lg:sticky top-20  px-4">
            <Bio />
          </aside>

          {/* Main article */}
          <div className="col-span-full lg:col-span-3 lg:row-span-4 divide-primario dark:divide-secundario prose prose-headings:text-primario dark:prose-dark">
            <Link
              to="/categories"
              className="no-underline text-primario dark:text-secundario flex flex-row items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-flex"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
                />
              </svg>
              <p className="px-2">
                <Trans>Todas las categorías</Trans>
              </p>
            </Link>
            {posts.nodes.map(post => {
              return (
                <section
                  key={post.frontmatter.title}
                  className="text-center pt-4"
                >
                  {post.frontmatter.featuredImage && (
                    <div className="flex items-center justify-center">
                      <GatsbyImage
                        image={
                          post.frontmatter.featuredImage.childImageSharp
                            .gatsbyImageData
                        }
                        layout="fullWidth"
                        placeholder="tracedSVG"
                        alt={post.frontmatter.description || ""}
                        className="outline outline-2 rounded-xl outline-primario dark:outline-secundario"
                      />
                    </div>
                  )}
                  <a href={post.fields.slug} className="no-underline">
                    <h1
                      itemProp="headline"
                      className="text-xl font-extrabold text-primario dark:text-secundario text-center mt-4"
                    >
                      {post.frontmatter.title}
                    </h1>
                  </a>
                  <p className="pt-2">{post.frontmatter.date}</p>
                  <p>{post.frontmatter.description}</p>
                </section>
              )
            })}
            <Comment />
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default CategoryTemplate

export const pageQuery = graphql`
  query Categories($categoryRegex: String, $language: String!) {
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
      sort: { fields: [frontmatter___locale, frontmatter___date], order: ASC }
      filter: {
        frontmatter: {
          categories: { regex: $categoryRegex }
          locale: { eq: $language }
        }
      }
    ) {
      nodes {
        frontmatter {
          categories
          locale
          title
          description
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          date
        }
        fields {
          slug
        }
      }
    }
  }
`
