import React from "react"
import { Trans, useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import type { PageProps } from "gatsby"
import Bio from "../components/Bio/Bio"
import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/Seo"
import Projects from "../components/Projects/Projects"

const Portfolio = ({ data, location }: PageProps) => {
  const { t } = useTranslation()
  const { language } = useI18next()

  return (
    <Layout location={location}>
      <Seo lang={language} title={t("Projects")} />
      <h1 className="mt-4 text-lg uppercase lg:text-2xl font-rammetto text-primario dark:text-secundario">
        <Trans>Projects</Trans>
      </h1>
      <Projects search={true} />
      <Bio />
    </Layout>
  )
}

export default Portfolio

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
  }
`
