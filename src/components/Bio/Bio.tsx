/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Trans } from "gatsby-plugin-react-i18next"
//import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
      locales: allLocale {
        edges {
          node {
            ns
            data
            language
          }
        }
      }
    }
  `)

  const profileImg = "../../images/profile.jpg"

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="flex flex-col items-center justify-center py-4">
      <StaticImage
        className="w-12 rounded-full"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src={profileImg}
        width={50}
        height={50}
        quality={95}
        alt="Foto de perfil"
      />
      {author?.name && (
        <p className="text-center text-primario dark:text-secundario">
          <strong>{author.name}</strong>
          {` `}
        </p>
      )}
      {author?.summary && (
        <p className="text-center text-primario dark:text-secundario">
          {<Trans>summary</Trans> || author?.summary || null}
          {` `}
        </p>
      )}
      <span>
        <a
          href={`https://github.com/${social?.twitter || ``}`}
          className="text-gray-600 dark:text-gray-400 hover:text-primario dark:hover:text-secundario"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        /{" "}
        <a
          href={`https://twitter.com/${social?.twitter || ``}`}
          className="text-gray-600 dark:text-gray-400 hover:text-primario dark:hover:text-secundario"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>{" "}
        /{" "}
        <a
          href={`https://t.me/m4ss1ck`}
          className="text-gray-600 dark:text-gray-400 hover:text-primario dark:hover:text-secundario"
          target="_blank"
          rel="noreferrer"
        >
          Telegram
        </a>
      </span>
    </div>
  )
}

export default Bio
