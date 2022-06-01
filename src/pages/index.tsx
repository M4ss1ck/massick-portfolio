import * as React from "react"
import { graphql } from "gatsby"
import type { PageProps } from "gatsby"
import {
  Trans,
  useTranslation,
  useI18next,
  Link,
} from "gatsby-plugin-react-i18next"
import Bio from "../components/Bio/Bio"
import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/Seo"
import Projects from "../components/Projects/Projects"
import Search from "../components/Posts/SearchPosts"
import Language from "../components/LanguageSwitcher/Language"
import Canvas from "../lib/Canvas"
import DarkToggle from "../lib/DarkToggle"
import Hacker from "../svg/hacker.svg"
import Massick2x3 from "../svg/massick-2x3.svg"
import Massick1x1 from "../svg/massick-1x1.svg"

const BlogIndex = ({ data, location }: PageProps<any>) => {
  const siteTitle = data.site.siteMetadata?.title || `home`
  const description = data.site.siteMetadata?.description || `home`
  const posts = data.allMarkdownRemark.nodes
  const { t } = useTranslation()
  const title = t("titulo_portada")
  const letrasTitulo = [...title]
  const { language } = useI18next()

  React.useEffect(() => {
    const letters = document.querySelectorAll(".animateletter")
    let duration = 500
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i]
      duration += 400
      letter.animate(
        [
          { transform: `translateY(-100vh) scale(0,0)` },
          { transform: `translateY(0) scale(1,1)` },
        ],
        { duration: duration, iterations: 1, easing: "ease-in-out" }
      )
    }
  })

  if (posts.length === 0) {
    return (
      <Layout location={location}>
        <Seo
          lang={language}
          title={t("no_posts")}
          description={t(description)}
        />
        <Bio />
        <p>
          <Trans>nada</Trans>
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location}>
      <Seo lang={language} title={t(siteTitle)} />
      <section className="flex flex-col items-center justify-center w-full h-screen pt-6 pb-2">
        <Canvas />
        <Link
          to="/"
          aria-label={t("home")}
          className="absolute z-20 hidden rounded-md shadow-md md:block top-8 right-12 dark:shadow-2xl hover:shadow-primario dark:hover:shadow-secundario dark:z-20 "
        >
          <Massick2x3 className="w-32 h-48 fill-current text-primario dark:text-secundario" />
        </Link>
        <aside className="flex flex-row py-1 px-4 md:flex-col justify-between items-center absolute w-full md:w-fit left-0 top-0 md:top-[60vh] z-20  md:border-4 border-b-4 border-primario dark:border-secundario md:-rotate-45 hover:rotate-0  rounded-lg md:-translate-x-2 md:hover:translate-x-12 lg:transition md:hover:scale-150 shadow-md dark:shadow-2xl hover:shadow-primario dark:hover:shadow-secundario bg-slate-200 dark:bg-black">
          <Link to="/" className="md:hidden" aria-label={t("home")}>
            <Massick1x1 className="w-12 h-12 rounded-md text-primario dark:text-secundario" />
          </Link>
          <DarkToggle />
          <Language />
          <h2 className="hidden px-4 py-8 text-sm text-center xxs:block lg:text-lg font-montserrat">
            <Link to="/about" className="text-primario dark:text-secundario">
              <Trans>who_am_I</Trans>
            </Link>
          </h2>
        </aside>
        <h1
          aria-label={title}
          className="absolute z-10 flex flex-wrap items-center justify-center text-2xl text-center uppercase md:text-5xl lg:text-7xl font-rammetto"
        >
          {letrasTitulo.map((letra, index) => {
            return (
              <span
                key={index}
                className={
                  letra === " "
                    ? "min-w-[1rem] mr-auto w-full"
                    : "animateletter transition duration-300 hover:skew-y-12 hover:even:-skew-y-12 hover:-translate-y-16 hover:even:-translate-y-14 hover:scale-150 text-primario dark:text-secundario min-w-[1rem] cursor-default"
                }
              >
                {letra}
              </span>
            )
          })}
        </h1>

        <Hacker className="absolute bottom-0 w-full opacity-90 dark:opacity-20" />
        <h2 className="absolute z-20 text-lg uppercase bottom-12 lg:text-2xl font-montserrat text-primario dark:text-secundario animate-bounce dark:z-20">
          <Trans>Projects</Trans>
        </h2>

        {/* scroll-down button */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-6 h-6 my-4 bottom-2 animate-bounce text-primario dark:text-secundario"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </section>
      <Projects limit={5} />
      <span className="px-4 mb-8 rounded-lg font-montserrat text-primario dark:text-secundario outline-1 outline outline-transparent hover:outline-primario dark:hover:outline-secundario">
        <Link to="/portfolio">
          <Trans>Ver proyectos</Trans>
          <Arrow />
        </Link>
      </span>
      <h2 className="z-20 mt-2 text-lg uppercase lg:text-2xl font-montserrat text-primario dark:text-secundario animate-bounce dark:z-20">
        <Trans>articles</Trans>
      </h2>

      {/* scroll-down button */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 my-4 animate-bounce text-primario dark:text-secundario"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
        />
      </svg>
      <Search
        posts={posts}
        keys={[
          "frontmatter.title",
          "frontmatter.description",
          "frontmatter.categories",
        ]}
      />
      <span className="flex justify-center px-4 mb-8 text-center rounded-lg font-montserrat text-primario dark:text-secundario outline-1 outline outline-transparent hover:outline-primario dark:hover:outline-secundario">
        <Link to="/blog">
          <Trans>Ver artículos</Trans>
          <Arrow />
        </Link>
      </span>

      <Bio />
    </Layout>
  )
}

const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="inline-flex w-6 h-6 mx-2 animate-pulse"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  )
}
export default BlogIndex

export const pageQuery = graphql`
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
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { locale: { eq: $language }, draft: { eq: false } }
      }
      limit: 5
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD.MM.YY")
          title
          description
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
