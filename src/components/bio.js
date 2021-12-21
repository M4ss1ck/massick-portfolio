/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="flex flex-col py-4 items-center justify-center">
      <StaticImage
        className="rounded-full w-12"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Foto de perfil"
      />
      {author?.name && (
        <p className="text-center text-secundario">
          <strong>{author.name}</strong>
          {` `}
        </p>
      )}
      {author?.summary && (
        <p className="text-center">
          {author?.summary || null}
          {` `}
        </p>
      )}
      <span>
        <a
          href={`https://twitter.com/${social?.twitter || ``}`}
          className="text-gray-500 hover:text-secundario"
        >
          Twitter
        </a>{" "}
        /{" "}
        <a
          href={`https://t.me/m4ss1ck`}
          className="text-gray-500 hover:text-secundario"
        >
          Telegram
        </a>
      </span>
    </div>
  )
}

export default Bio
