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
      <StaticImage
        className="rounded-full w-42"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Foto de perfil"
      />
      <p>
        No blog posts found. Add markdown posts to "content/blog" (or the
        directory you specified for the "gatsby-source-filesystem" plugin in
        gatsby-config.js).
      </p>
    </Layout>
  )
}
export default About
