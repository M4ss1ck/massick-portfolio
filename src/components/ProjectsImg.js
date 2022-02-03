// https://stackoverflow.com/questions/56118471/string-interpolation-in-graphql-query

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const ProImg = props => {
  const data = useStaticQuery(graphql`
    {
      portfolio: file(relativePath: { eq: "projects/portfolio.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      wastingbot: file(relativePath: { eq: "projects/wastingbot.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      nextBlog: file(relativePath: { eq: "projects/next-blog.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      ciec: file(relativePath: { eq: "projects/ciec.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)
  switch (props.name) {
    case "portfolio":
      return (
        <GatsbyImage
          //className="w-12"
          image={data.portfolio.childImageSharp.gatsbyImageData}
          layout="fullWidth"
          placeholder="tracedSVG"
        />
      )
    case "wastingbot":
      return (
        <GatsbyImage
          //className="w-12"
          image={data.wastingbot.childImageSharp.gatsbyImageData}
          layout="fullWidth"
          placeholder="tracedSVG"
        />
      )
    case "nextBlog":
      return (
        <GatsbyImage
          //className="w-12"
          image={data.nextBlog.childImageSharp.gatsbyImageData}
          layout="fullWidth"
          placeholder="tracedSVG"
        />
      )
    case "ciec":
      return (
        <GatsbyImage
          //className="w-12"
          image={data.ciec.childImageSharp.gatsbyImageData}
          layout="fullWidth"
          placeholder="tracedSVG"
        />
      )
    default:
      return (
        <GatsbyImage
          //className="w-12"
          image={data.portfolio.childImageSharp.gatsbyImageData}
          layout="fullWidth"
          placeholder="tracedSVG"
        />
      )
  }
}

export default ProImg
