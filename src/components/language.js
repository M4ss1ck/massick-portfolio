import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "English",
  es: "Español",
}

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <button
              key={language}
              onClick={() => changeLocale(language)}
              // style={{
              //   color: currentLocale === language ? `yellow` : `white`,
              //   margin: 10,
              //   textDecoration: `underline`,
              //   cursor: `pointer`,
              // }}
              className={
                currentLocale === language
                  ? "text-center text-lg lg:text-lg py-4 font-montserrat cursor-pointer border-secundario text-gray-900 dark:text-secundario focus:border-secundario inline-flex items-center px-1 pt-2 pb-2 border-b-4 font-medium leading-5 focus:outline-none transition duration-250 ease-in-out mx-2"
                  : "text-center text-lg lg:text-lg py-4 font-montserrat cursor-pointer border-transparent text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-300 focus:text-gray-600 focus:border-grey-600 inline-flex items-center px-1 pt-2 pb-2 border-b-4 font-medium leading-5 focus:outline-none transition duration-250 ease-in-out mx-2"
              }
            >
              {languageName[language]}
            </button>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language
