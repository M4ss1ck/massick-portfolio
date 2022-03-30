import React from "react"
import {
  Trans,
  useTranslation,
  useI18next,
  Link,
} from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Categories = ({ data, location }) => {
  const { t } = useTranslation()
  const { language } = useI18next()
  const allCategories = new Set(
    data.allMarkdownRemark.nodes
      .filter(node => !!node.frontmatter.categories)
      .map(node => node.frontmatter.categories)
      .map(categories => categories.split(","))
      .flat()
      .map(category => category.trim().toLowerCase())
  )
  console.log(allCategories)
  return (
    <Layout location={location} title={t("Categories")}>
      <Seo lang={language} title={t("Categories")} />
      <h1 className="text-lg lg:text-2xl font-rammetto uppercase text-primario dark:text-secundario mt-4">
        <Trans>Categories</Trans>
      </h1>
      <ul className="flex flex-row flex-wrap my-4 max-w-prose items-center justify-center">
        {Array.from(allCategories)
          .sort()
          .map((cat, index) => {
            return (
              <li
                key={index}
                className="px-2 m-2 outline outline-1 rounded-lg text-primario dark:text-secundario hover:text-black dark:hover:text-white"
              >
                <Link to={`/categories/${cat}`}>{cat}</Link>
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
