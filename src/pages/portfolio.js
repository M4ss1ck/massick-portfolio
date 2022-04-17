import React from "react"
import { Trans, useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import Bio from "../components/Bio/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Projects from "../components/projects"

const Portfolio = ({ data, location }) => {
  const { t } = useTranslation()
  const { language } = useI18next()

  return (
    <Layout location={location} title={t("Projects")}>
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
