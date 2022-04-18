import React from "react"
import Fuse from "fuse.js"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { GatsbyImage } from "gatsby-plugin-image"

const SearchProject = ({ projects, keys, search }) => {
  const { t } = useTranslation()
  const [query, updateQuery] = React.useState("")
  const onSearch = e => {
    updateQuery(e.target.value)
  }
  const fuse = new Fuse(projects, {
    isCaseSensitive: false,
    //includeMatches: true,
    keys: keys,
  })

  const results = fuse.search(query)

  return (
    <>
      {!!search && (
        <input
          id="searchProject"
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
        <ol style={{ listStyle: `none` }} className="z-10 py-4 max-w-prose">
          {projects.map(p => {
            const title = p.title
            const slug = p.url
            return (
              <li key={title} className="m-4">
                <article
                  className="grid grid-cols-2 grid-rows-3 gap-4 my-2 xs:grid-cols-3 xs:grid-rows-2"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  {p.image && (
                    <div className="relative row-span-2 my-4">
                      <GatsbyImage
                        image={p.image}
                        alt=""
                        className="relative top-0 w-full h-full blur-sm hue-rotate-30"
                        objectFit="cover"
                      />
                      <GatsbyImage
                        image={p.image}
                        layout="fullWidth"
                        alt={p.description || ""}
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
                      <a
                        href={slug}
                        itemProp="url"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span itemProp="headline">{title}</span>
                      </a>
                    </h2>
                  </header>
                  <section className="col-span-2 row-span-1">
                    <p>{p.description}</p>
                  </section>
                </article>
              </li>
            )
          })}
        </ol>
      ) : (
        <ol className="z-10 py-4 list-none max-w-prose">
          {results.map(e => {
            const item = e.item
            const title = item.title
            const slug = item.url
            return (
              <li key={title} className="m-4">
                <article
                  className="grid grid-cols-2 grid-rows-3 gap-4 my-2 xs:grid-cols-3 xs:grid-rows-2"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  {item.image && (
                    <div className="relative row-span-2 my-4">
                      <GatsbyImage
                        image={item.image}
                        alt=""
                        className="relative top-0 w-full h-full blur-sm hue-rotate-30"
                        objectFit="cover"
                      />
                      <GatsbyImage
                        image={item.image}
                        layout="fullWidth"
                        alt={item.description || ""}
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
                      <a
                        href={slug}
                        itemProp="url"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span itemProp="headline">{title}</span>
                      </a>
                    </h2>
                  </header>
                  <section className="col-span-2 row-span-1">
                    <p>{item.description}</p>
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

export default SearchProject
