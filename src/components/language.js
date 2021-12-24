import React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"

// const languageName = {
//   en: "Eng",
//   es: "Esp",
// }

const Language = () => {
  const { languages, language, originalPath } = useI18next()
  return (
    <>
      {/* <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <button
              key={language}
              onClick={() => changeLocale(language)}
              className={
                currentLocale === language
                  ? "text-center text-sm lg:text-lg py-4 font-montserrat cursor-pointer border-secundario text-gray-900 dark:text-secundario focus:border-secundario inline-flex items-center px-1 pt-2 pb-2 border-b-4 font-medium leading-5 focus:outline-none transition duration-250 ease-in-out mx-2"
                  : "text-center text-sm lg:text-lg py-4 font-montserrat cursor-pointer border-transparent text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-300 focus:text-gray-600 focus:border-grey-600 inline-flex items-center px-1 pt-2 pb-2 border-b-4 font-medium leading-5 focus:outline-none transition duration-250 ease-in-out mx-2"
              }
            >
              {languageName[language]}
            </button>
          ))
        }
      </IntlContextConsumer> */}
      <ul className="languages">
        {languages.map(lng => (
          <li
            key={lng}
            className={
              language === lng
                ? "text-center text-sm lg:text-lg py-4 font-montserrat cursor-pointer border-secundario text-gray-900 dark:text-secundario focus:border-secundario inline-flex items-center px-1 pt-2 pb-2 border-b-4 font-medium leading-5 focus:outline-none transition duration-250 ease-in-out mx-2"
                : "text-center text-sm lg:text-lg py-4 font-montserrat cursor-pointer border-transparent text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-300 focus:text-gray-600 focus:border-grey-600 inline-flex items-center px-1 pt-2 pb-2 border-b-4 font-medium leading-5 focus:outline-none transition duration-250 ease-in-out mx-2"
            }
          >
            <Link to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Language
