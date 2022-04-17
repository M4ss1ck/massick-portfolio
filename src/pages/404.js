import * as React from "react"
import { graphql } from "gatsby"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../components/Layout/layout"
import Seo from "../components/SEO/seo"
import Canvas from "../lib/canvas"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const { t } = useTranslation()
  return (
    <Layout location={location} title={t(siteTitle)}>
      <Seo title="Error 404" description={t("404: Not Found")} />
      <article className="flex flex-col h-full items-center justify-evenly min-h-[50vh]">
        <Canvas />
        <h1 className="text-4xl font-semibold text-primario dark:text-secundario">
          <Trans>404: Not Found</Trans>
        </h1>
        <p>
          <Trans>You just hit a wrong route.</Trans>
        </p>
        <p>
          <Link to="/" className="py-8 uppercase hover:text-secundario">
            <Trans>Go to</Trans> <Trans>home</Trans>
          </Link>
        </p>
      </article>
    </Layout>
  )
}

export default NotFoundPage

export const query = graphql`
  query ($language: String!) {
    site {
      siteMetadata {
        title
      }
    }
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
