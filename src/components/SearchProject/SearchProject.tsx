import React from "react"
import Fuse from "fuse.js"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { IGatsbyImageData } from "gatsby-plugin-image"
import CardList from "./CardList"

export type Project = {
  title: string
  description: string
  image: IGatsbyImageData
  url: string
  tags?: string[]
}
interface Searchproject {
  projects: Project[]
  keys: any
  search: any
}

const SearchProject: React.FC<Searchproject> = ({ projects, keys, search }) => {
  const { t } = useTranslation()
  const [query, updateQuery] = React.useState("")
  const onSearch = (e: React.FocusEvent<HTMLInputElement, Element>) => {
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

      <CardList projects={query === "" ? projects : results.map(e => e.item)} />
    </>
  )
}

export default SearchProject
