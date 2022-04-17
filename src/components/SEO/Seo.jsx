/*
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Seo = ({ description, lang, meta, title, featuredImage }) => {
  const { site, defaultFeaturedImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            social {
              twitter
            }
          }
        }
        defaultFeaturedImage: file(
          absolutePath: { glob: "**/src/images/og/featured-image.png" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 1200)
          }
        }
      }
    `
  )
  const { t } = useTranslation()
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const ogImage =
    featuredImage || defaultFeaturedImage?.childImageSharp?.gatsbyImageData
  const url = site.siteMetadata.siteUrl?.replace(/\/$/, "")
  return (
    <Helmet
      // bodyAttributes={{
      //   class: "scrollbar-thin scrollbar-thumb-slate-800",
      // }}
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={
        defaultTitle
          ? t(defaultTitle) === title
            ? `${t(defaultTitle)}`
            : `%s | ${t(defaultTitle)}`
          : null
      }
      //titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: t(metaDescription),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: t(metaDescription),
        },
        {
          name: "og:image",
          content: url + ogImage.images.fallback.src,
        },
        {
          name: "og:image:width",
          content: `${ogImage.width}`,
        },
        {
          name: "og:image:height",
          content: `${ogImage.height}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:image",
          content: url + ogImage.images.fallback.src,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: t(title),
        },
        {
          name: `twitter:description`,
          content: t(metaDescription),
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
