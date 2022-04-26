import * as React from "react"
import { graphql } from "gatsby"
import type { PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout/Layout"
import {
  Link,
  Trans,
  useTranslation,
  useI18next,
} from "gatsby-plugin-react-i18next"
import Seo from "../components/SEO/Seo"

const About = ({ data, location }: PageProps) => {
  const { t } = useTranslation()
  const { language } = useI18next()
  //const siteTitle = "Acerca de"
  return (
    <Layout location={location} title={t("about")}>
      <Seo lang={language} title={t("about")} />
      <h1 className="mt-4 text-lg uppercase lg:text-2xl font-rammetto text-primario dark:text-secundario">
        <Trans>who_am_I</Trans>
      </h1>
      <section className="flex flex-col items-center justify-center h-auto px-10 py-6 md:flex-row md:px-20 md:py-4">
        <StaticImage
          className="w-40 pt-8 rounded-lg"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile.jpg"
          width={160}
          height={160}
          quality={95}
          alt="Foto de perfil"
        />
        <p className="px-4 pt-8 text-xl font-semibold font-montserrat md:w-2/3 md:pt-4 max-w-prose">
          <Trans>about_bio</Trans>
        </p>
      </section>
      <section className="flex flex-col items-center justify-center py-6 text-xl font-semibold px-14 md:px-28 md:py-4 font-montserrat md:pt-4 max-w-prose">
        <p>
          <Trans>extended_bio</Trans>
        </p>
        <p>
          <Trans>cv_link_text</Trans>{" "}
          <Link
            to="/cv"
            className="px-2 rounded-lg text-primario dark:text-secundario hover:bg-primario dark:hover:bg-secundario hover:text-white dark:hover:text-white"
          >
            <Trans>here</Trans>
          </Link>
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
