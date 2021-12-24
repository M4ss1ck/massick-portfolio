import React from "react"
import DarkToggle from "../lib/darkToggle"
import Canvas from "../lib/canvas"
import { Link, Trans } from "gatsby-plugin-react-i18next"

import Language from "./language"
import Hacker from "../svg/hacker.svg"
import Massick2x3 from "../svg/massick-2x3.svg"
import Massick1x1 from "../svg/massick-1x1.svg"

const LandingPage = ({ title }) => {
  const letrasTitulo = [...title]
  return (
    <>
      <div className="pt-6 pb-2 flex flex-col items-center justify-center max-h-screen">
        <Canvas />
        <Link
          to="/"
          className="absolute hidden md:block top-8 right-12 shadow-md dark:shadow-2xl hover:shadow-primario dark:hover:shadow-secundario z-20 dark:z-20 rounded-md "
        >
          <Massick2x3 className="w-36 h-48 text-secundario fill-current" />
        </Link>
        <aside className="flex flex-row py-1 px-4 md:flex-col justify-between items-center absolute w-full md:w-fit left-0 top-0 md:top-[60vh] z-20  md:border-4 border-b-4 border-secundario md:-rotate-45 hover:rotate-0  rounded-lg md:-translate-x-2 md:hover:translate-x-12 lg:transition md:hover:scale-150 shadow-md dark:shadow-2xl hover:shadow-primario dark:hover:shadow-secundario bg-slate-200 dark:bg-black">
          <Link to="/" className="md:hidden">
            <Massick1x1 className="rounded-md w-12 h-12" />
          </Link>
          <DarkToggle />
          <Language />
          <h2 className="text-center text-sm lg:text-lg py-8 px-4 font-montserrat">
            <Link to="/about" className="text-secundario">
              <Trans>who_am_I</Trans>
            </Link>
          </h2>
        </aside>
        <h1
          aria-label={title}
          className="absolute text-center text-2xl md:text-5xl lg:text-7xl font-rammetto uppercase flex flex-wrap items-center justify-center h-[calc(100%-8rem)] z-10"
        >
          {letrasTitulo.map((letra, index) => {
            //console.log(letra)

            return (
              <span
                key={index}
                //className="transition hover:animate-bounce hover:text-secundario min-w-[1rem] cursor-default "
                className="transition duration-300 hover:skew-y-12 hover:even:-skew-y-12 hover:-translate-y-16 hover:even:-translate-y-14 hover:scale-125 text-secundario min-w-[1rem] cursor-default "
              >
                {letra}
              </span>
            )
          })}
        </h1>

        <Hacker className="bottom-0 w-full opacity-20 absolute" />
        <h2 className="absolute bottom-12 text-lg lg:text-2xl font-montserrat uppercase text-secundario  animate-bounce z-20 dark:z-20">
          <Trans>articles</Trans>
        </h2>

        {/* scroll-down button */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-2 h-6 w-6 my-4 animate-bounce text-secundario"
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
