import React from "react"
import Fuse from "fuse.js"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { GatsbyImage } from "gatsby-plugin-image"
import Card from '../SearchProject/Card'

interface SearchPosts {
  posts: any
  keys: any
  search?: boolean
}

const Search: React.FC<SearchPosts> = ({ posts, keys, search }) => {
  const { t } = useTranslation()
  const [query, updateQuery] = React.useState("")
  const onSearch = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    updateQuery(e.target.value)
  }
  const fuse = new Fuse(posts, {
    isCaseSensitive: false,
    includeMatches: true,
    keys: keys,
  })

  const results = fuse.search(query)

  return (
    <>
      {!!search && (
        <input
          id="search"
          type="text"
          placeholder={t("Search")}
          className="w-full px-2 mt-2 text-lg text-center bg-transparent border border-transparent rounded-lg outline-none dark:rounded-lg dark:bg-transparent dark:outline-none form-input dark:form-input max-w-prose text-primario dark:text-secundario dark:border-transparent focus:border-primario dark:focus:border-secundario focus:outline-none focus:ring-0 focus:ring-offset-transparent focus:ring-offset-0 dark:focus:ring-0 dark:focus:ring-offset-transparent dark:focus:ring-offset-0"
          onChange={onSearch}
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = t("Search"))}
        />
      )}
      {results.length === 0 && query !== "" ? (
        <h1 className="flex mx-auto">
          <Trans>No matches found</Trans>
        </h1>
      ) : query !== "" ? (
        results.length === 1 ? (
          <h1 className="flex mx-auto">
            {results.length}&nbsp;
            <Trans>match found</Trans>
          </h1>
        ) : (
          <h1 className="flex mx-auto">
            {results.length}&nbsp;<Trans>matches found</Trans>
          </h1>
        )
      ) : null}

      {query === "" ? (
        <ol className="z-10 py-4 list-none max-w-prose">
          {posts.map((post: any) => {
            return (
              <li key={post.fields.slug} className="m-4">
                <Card
                  image={post.frontmatter.featuredImage?.childImageSharp.gatsbyImageData}
                  title={post.frontmatter.title || post.fields.slug}
                  description={post.frontmatter.description || ""}
                  url={post.fields.slug}
                  tags={[post.frontmatter.date]}
                />
              </li>
            )
          })}
        </ol>
      ) : (
        <ol className="z-10 py-4 list-none max-w-prose">
          {results.map((e: any) => {
            const item = e.item
            return (
              <li key={item.fields.slug} className="m-4">
                <Card
                  image={item.frontmatter.featuredImage?.childImageSharp.gatsbyImageData}
                  title={item.frontmatter.title || item.fields.slug}
                  description={item.frontmatter.description || ""}
                  url={item.fields.slug}
                  tags={[item.frontmatter.date]}
                />
              </li>
            )
          })}
        </ol>
      )}
    </>
  )
}

export default Search
