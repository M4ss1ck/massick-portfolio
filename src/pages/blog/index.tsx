import * as React from "react"
import { graphql } from "gatsby"
import type { PageProps } from "gatsby"
import { Trans, useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import Bio from "../../components/Bio/Bio"
import Layout from "../../components/Layout/Layout"
import Seo from "../../components/SEO/Seo"
import Search from "../../components/Posts/SearchPosts"

type DataP = {
  allMarkdownRemark: {
    nodes: any
  }
}

const BlogIndex = ({ data, location }: PageProps<DataP>) => {
  const posts = data.allMarkdownRemark.nodes
  const { t } = useTranslation()
  const { language } = useI18next()

  if (posts.length === 0) {
    return (
      <Layout location={location} title={t("articles")}>
        <Seo lang={language} title={t("no_posts")} description={t("nada")} />
        <Bio />
        <p>
          <Trans>nada</Trans>
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={t("articles")}>
      <Seo lang={language} title={t("articles")} />
      <h1 className="mt-4 text-lg uppercase lg:text-2xl font-rammetto text-primario dark:text-secundario">
        <Trans>articles</Trans>
      </h1>
      <Search
        posts={posts}
        keys={[
          "frontmatter.title",
          "frontmatter.description",
          "frontmatter.categories",
        ]}
        search
      />

      <hr className="mt-auto" />
      <Bio />
    </Layout>
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { locale: { eq: $language }, draft: { eq: false } }
      }
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
          categories
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
