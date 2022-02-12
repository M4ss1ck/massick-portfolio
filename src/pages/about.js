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
      <h1 className="text-lg lg:text-2xl font-rammetto uppercase text-secundario mt-4">
        <Trans>who_am_I</Trans>
      </h1>
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
      <section className="text-xl font-montserrat font-semibold px-4 pt-8 md:pt-4 max-w-prose">
        <p>
          <Trans>extended_bio</Trans>
        </p>
        <p>
          <Trans>cv_link_text</Trans>{" "}
          <a
            href="/cv"
            className="text-secundario rounded-lg px-2 hover:bg-secundario hover:text-white"
            target="_blank"
          >
            <Trans>here</Trans>
          </a>
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
