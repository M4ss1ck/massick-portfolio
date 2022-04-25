module.exports = {
  siteMetadata: {
    title: `Massick's Blog`,
    author: {
      name: `Massick`,
      summary: `Matemático y desarrollador web`,
    },
    description: `Mi portafolio`,
    siteUrl: `https://massick.is-a.dev/`,
    social: {
      twitter: `M4ss1ck`,
    },
  },
  plugins: [
    `gatsby-plugin-pnpm`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/images/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`es`, `en`],
        defaultLanguage: `es`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://massick.is-a.dev/`, // declared above too
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/:lang?/blog/:uid",
            getLanguageFromPath: true,
            excludeLanguages: ["es", "en"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              //offsetY: `100`,
              icon: `<svg fill="currentColor" aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: `autolink`,
              maintainCase: true,
              removeAccents: true,
              isIconAfterHeader: true,
              elements: [`h1`, `h2`],
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },

    // {
    //   resolve: "gatsby-plugin-sitemap",
    //   options: {
    //     excludes: ["/**/404", "/**/404.html"],
    //     query: `
    //         {
    //           site {
    //             siteMetadata {
    //               siteUrl
    //             }
    //           }
    //           allSitePage(filter: {context: {i18n: {routed: {eq: false}}}}) {
    //             edges {
    //               node {
    //                 context {
    //                   i18n {
    //                     defaultLanguage
    //                     languages
    //                     originalPath
    //                   }
    //                 }
    //                 path
    //               }
    //             }
    //           }
    //         }
    //       `,
    //     serialize: ({ site, allSitePage }) => {
    //       return allSitePage.edges.map(edge => {
    //         const { languages, originalPath, defaultLanguage } =
    //           edge.node.context.i18n
    //         const { siteUrl } = site.siteMetadata
    //         const url = siteUrl + originalPath
    //         const links = [
    //           { lang: defaultLanguage, url },
    //           { lang: "x-default", url },
    //         ]
    //         languages.forEach(lang => {
    //           if (lang === defaultLanguage) return
    //           links.push({ lang, url: `${siteUrl}/${lang}${originalPath}` })
    //         })
    //         return {
    //           url,
    //           changefreq: "daily",
    //           priority: originalPath === "/" ? 1.0 : 0.7,
    //           links,
    //         }
    //       })
    //     },
    //   },
    // },
    {
      resolve: "gatsby-plugin-svgr-loader",
      options: {
        rule: {
          include: /svg/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog de Massick`,
        short_name: `Massick`,
        description: `Portafolio y blog creado usando Gatsby, TailwindCSS y Markdown con soporte para varios idiomas entre otras características.`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#049e2a`,
        display: `standalone`,
        icon: `src/svg/massick-1x1.svg`, // This path is relative to the root of the site.
        cache_busting_mode: "none", // https://www.gatsbyjs.com/plugins/gatsby-plugin-offline/#using-with-gatsby-plugin-manifest
        lang: `es`,
        localize: [
          {
            start_url: `/en/`,
            lang: `en`,
            name: `Massick's Blog`,
            short_name: `Massick`,
            description: `Portfolio and blog created using GatsbyJS, TailwindCSS and Markdown with i18n support among other things.`,
          },
        ],
        //theme_color_in_head: false, // This will avoid adding theme-color meta tag.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // {
    //   resolve: "gatsby-plugin-offline",
    //   options: {
    //     workboxConfig: {
    //       globPatterns: ["**/svg*"],
    //     },
    //   },
    // },
    `gatsby-plugin-offline`,
  ],
}
