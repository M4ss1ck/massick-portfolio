import * as React from "react"
import { graphql } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Trans, useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import Seo from "../components/seo"

const About = ({ data, location }) => {
  const { t } = useTranslation()
  const { language } = useI18next()
  //const siteTitle = "Acerca de"
  return (
    <Layout location={location} title={t("about")}>
      <Seo lang={language} title={t("about")} />
      <section className="flex flex-col md:flex-row items-center justify-center px-10 md:px-20 py-6 md:py-4 h-auto md:h-56">
        <StaticImage
          className="rounded-full w-40 pt-8"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile.jpg"
          width={160}
          height={160}
          quality={95}
          alt="Foto de perfil"
        />
        <p className="text-xl font-montserrat font-semibold px-4 md:w-1/2 pt-8 md:pt-4">
          <Trans>about_bio</Trans>
        </p>
      </section>
    </Layout>
  )
}
export default About

export const query = graphql`
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
