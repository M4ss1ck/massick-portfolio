import * as React from "react"
import { Link, graphql } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = "Acerca de"
  //const posts = data.allMarkdownRemark.nodes
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Acerca De" />
      <div className="flex flex-col md:flex-row items-center justify-center px-10 md:px-20 py-6 md:py-4">
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
          Mi nombre es Andy. Soy Licenciado en Matemática, programador de
          corazón y adicto a la tecnología.
        </p>
      </div>
    </Layout>
  )
}
export default About
