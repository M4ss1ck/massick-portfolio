import React from "react"
import DarkToggle from "../../lib/DarkToggle"
import Canvas from "../../lib/Canvas"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next"
import Language from "../LanguageSwitcher/Language"
import Hacker from "../../svg/hacker.svg"
import Massick2x3 from "../../svg/massick-2x3.svg"
import Massick1x1 from "../../svg/massick-1x1.svg"

interface LP {
  title: string
}
const LandingPage: React.FC<LP> = ({ title }) => {
  const { t } = useTranslation()
  const letrasTitulo = [...title]
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen pt-6 pb-2">
        <Canvas />
        <Link
          to="/"
          aria-label={t("home")}
          className="absolute z-20 hidden rounded-md shadow-md md:block top-8 right-12 dark:shadow-2xl hover:shadow-primario dark:hover:shadow-secundario dark:z-20 "
        >
          <Massick2x3 className="w-32 h-48 fill-current text-primario dark:text-secundario" />
        </Link>
        {/*         
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-48 h-48 top-12 left-12 text-primario"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
        </svg> */}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-48 h-48 top-12 left-12 text-secundario"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        </svg> */}
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
            //console.log("printing ", letra, letra === " ")

            return (
              <span
                key={index}
                //className="transition hover:animate-bounce hover:text-secundario min-w-[1rem] cursor-default "
                className={
                  letra === " "
                    ? "min-w-[1rem] mr-auto w-full"
                    : "transition duration-300 hover:skew-y-12 hover:even:-skew-y-12 hover:-translate-y-16 hover:even:-translate-y-14 hover:scale-150 text-primario dark:text-secundario min-w-[1rem] cursor-default "
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
      </div>
    </>
  )
}

export default LandingPage
