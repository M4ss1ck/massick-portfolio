import React from "react"
import Fuse from "fuse.js"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { GatsbyImage } from "gatsby-plugin-image"

interface SearchPosts {
  posts: any
  keys: any
  search: string
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
            const title = post.frontmatter.title || post.fields.slug
            const slug = post.fields.slug
            return (
              <li key={slug} className="m-4">
                <article
                  className="grid grid-cols-2 grid-rows-3 gap-4 my-2 xs:grid-cols-3 xs:grid-rows-2"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  {post.frontmatter.featuredImage && (
                    <div className="relative row-span-2 my-4">
                      <GatsbyImage
                        image={
                          post.frontmatter.featuredImage.childImageSharp
                            .gatsbyImageData
                        }
                        alt=""
                        className="relative top-0 w-full h-full blur-sm hue-rotate-30"
                        objectFit="cover"
                      />
                      <GatsbyImage
                        image={
                          post.frontmatter.featuredImage.childImageSharp
                            .gatsbyImageData
                        }
                        //layout="fullWidth"
                        alt={post.frontmatter.description || ""}
                        // className="absolute left-0 w-full -translate-y-1/2 top-1/2"
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "0",
                          transform: "translate(0,-50%)",
                          width: "100%",
                          maxHeight: "90%",
                        }}
                        imgStyle={{ objectPosition: "50% 0%" }}
                      />
                    </div>
                  )}
                  <header className="row-span-2 my-auto xs:col-span-2 xs:row-span-1">
                    <h2 className="mt-2 text-lg font-bold text-primario dark:text-secundario">
                      <a href={slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </a>
                    </h2>
                    <small className="text-sm">{post.frontmatter.date}</small>
                  </header>
                  <section className="col-span-2 row-span-1">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                      className="mb-2"
                    />
                  </section>
                </article>
              </li>
            )
          })}
        </ol>
      ) : (
        <ol className="z-10 py-4 list-none max-w-prose">
          {results.map((e: any) => {
            const item = e.item
            const title = item.frontmatter.title || item.fields.slug
            const slug = item.fields.slug
            return (
              <li key={slug} className="m-4">
                <article
                  className="grid grid-cols-2 grid-rows-3 gap-4 my-2 xs:grid-cols-3 xs:grid-rows-2"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  {item.frontmatter.featuredImage && (
                    <div className="relative row-span-2 my-4">
                      <GatsbyImage
                        image={
                          item.frontmatter.featuredImage.childImageSharp
                            .gatsbyImageData
                        }
                        alt=""
                        className="relative top-0 w-full h-full blur-sm hue-rotate-30"
                        objectFit="cover"
                      />
                      <GatsbyImage
                        image={
                          item.frontmatter.featuredImage.childImageSharp
                            .gatsbyImageData
                        }
                        //layout="fullWidth"
                        alt={item.frontmatter.description || ""}
                        // className="absolute left-0 w-full -translate-y-1/2 top-1/2"
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "0",
                          transform: "translate(0,-50%)",
                          width: "100%",
                          maxHeight: "90%",
                        }}
                        imgStyle={{ objectPosition: "50% 0%" }}
                      />
                    </div>
                  )}
                  <header className="row-span-2 my-auto xs:col-span-2 xs:row-span-1">
                    <h2 className="mt-2 text-lg font-bold text-primario dark:text-secundario">
                      <a href={slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </a>
                    </h2>
                    <small className="text-sm">{item.frontmatter.date}</small>
                  </header>
                  <section className="col-span-2 row-span-1">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item.frontmatter.description || item.excerpt,
                      }}
                      itemProp="description"
                      className="mb-2"
                    />
                  </section>
                </article>
              </li>
            )
          })}
        </ol>
      )}
    </>
  )
}

export default Search
