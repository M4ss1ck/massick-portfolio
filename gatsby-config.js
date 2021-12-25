module.exports = {
  siteMetadata: {
    title: `Massick's Blog`,
    author: {
      name: `Massick`,
      summary: `Matemático y desarrollador web`,
    },
    description: `Mi portafolio`,
    siteUrl: `https://massick.netlify.app/`,
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
        siteUrl: `https://massick.netlify.app/`, // declared above too
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Massick Blog`,
        short_name: `Massick`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/massick-1x1.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
