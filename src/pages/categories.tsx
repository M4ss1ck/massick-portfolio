import React from "react"
import {
  Trans,
  useTranslation,
  useI18next,
  Link,
} from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import type { PageProps } from "gatsby"
import Bio from "../components/Bio/Bio"
import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/Seo"

const Categories = ({ data, location }: PageProps<any>) => {
  const { t } = useTranslation()
  const { language } = useI18next()
  const allCategories = new Set(
    data.allMarkdownRemark.nodes
      .filter((node: any) => !!node.frontmatter.categories)
      .map((node: any) => node.frontmatter.categories)
      .map((categories: string) => categories.split(","))
      .flat()
      .map((category: string) => category.trim().toLowerCase())
  )
  return (
    <Layout location={location}>
      <Seo lang={language} title={t("Categories")} />
      <h1 className="mt-4 text-lg uppercase lg:text-2xl font-rammetto text-primario dark:text-secundario">
        <Trans>Categories</Trans>
      </h1>
      <ul className="flex flex-row flex-wrap items-center justify-center my-4 max-w-prose">
        {Array.from(allCategories)
          .sort()
          .map((cat: any, index) => {
            return (
              <li
                key={index}
                className="px-2 m-2 rounded-lg outline outline-1 text-primario dark:text-secundario hover:text-black dark:hover:text-white"
              >
                <Link to={`/categories/${cat.replace(/\s/g, "_")}`}>{cat}</Link>
              </li>
            )
          })}
      </ul>
      <Bio />
    </Layout>
  )
}

export default Categories

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
      filter: { frontmatter: { draft: { eq: false } } }
      sort: { fields: [frontmatter___locale, frontmatter___date], order: ASC }
      limit: 1000
    ) {
      nodes {
        frontmatter {
          categories
          locale
        }
      }
    }
  }
`
