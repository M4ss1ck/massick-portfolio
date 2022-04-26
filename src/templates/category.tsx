import React from "react"
import { graphql } from "gatsby"
import { Trans, Link, useTranslation } from "gatsby-plugin-react-i18next"
import Bio from "../components/Bio"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Comment from "../components/Comment"

interface Props {
  data: any
  location: Location
  pageContext: {
    category: string
  }
}

const CategoryTemplate = ({
  data,
  location,
  pageContext: { category },
}: Props) => {
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
          <aside className="px-4 lg:sticky top-20">
            <Bio />
          </aside>

          {/* Main article */}
          <div className="prose col-span-full lg:col-span-3 lg:row-span-4 divide-primario dark:divide-secundario prose-headings:text-primario dark:prose-dark">
            <Link
              to="/categories"
              className="flex flex-row items-center no-underline text-primario dark:text-secundario"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-flex w-6 h-6"
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
            {posts.nodes.map((post: any) => {
              return (
                <section
                  key={post.frontmatter.title}
                  className="pt-4 text-center"
                >
                  {post.frontmatter.featuredImage && (
                    <div className="flex items-center justify-center">
                      <GatsbyImage
                        //layout="fullWidth"
                        image={
                          post.frontmatter.featuredImage.childImageSharp
                            .gatsbyImageData
                        }
                        //placeholder="tracedSVG"
                        alt={post.frontmatter.description || ""}
                        className="outline outline-2 rounded-xl outline-primario dark:outline-secundario"
                      />
                    </div>
                  )}
                  <a href={post.fields.slug} className="no-underline">
                    <h1
                      itemProp="headline"
                      className="mt-4 text-xl font-extrabold text-center text-primario dark:text-secundario"
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
