import React from "react"
import { Link } from "gatsby"
import DarkToggle from "../lib/darkToggle"
import Canvas from "../lib/canvas"
//import { StaticImage } from "gatsby-plugin-image"
//import coding from "../svg/coding.svg"

const LandingPage = ({ title }) => {
  //const emoji = "\u{1F4AD}"
  const letrasTitulo = [...title]

  return (
    <>
      <div
        className="pt-6 pb-2 flex flex-col items-center justify-center max-h-screen"
        //style={{ height: "50vh" }}
      >
        <Canvas />
        <aside className="flex flex-row md:flex-col justify-evenly absolute w-full md:w-fit left-0 top-0 md:top-[30vh] z-20  md:border-t-4 border-b-4 md:border-r-4 border-secundario md:-rotate-45 hover:rotate-0 border-l-4 rounded-lg md:-translate-x-2 md:hover:translate-x-1 lg:transition md:hover:scale-125 shadow-md dark:shadow-2xl shadow-primario dark:shadow-secundario bg-slate-200 dark:bg-black">
          <DarkToggle />
          <h2 className="text-center text-sm lg:text-lg py-8 px-4 font-montserrat">
            <Link to="/about" className="text-secundario">
              ¿Quién soy?
            </Link>
          </h2>
        </aside>
        <h1
          aria-label={title}
          className="absolute text-center text-5xl lg:text-7xl font-rammetto uppercase flex flex-wrap items-center justify-center h-[calc(100%-8rem)] z-10"
        >
          {letrasTitulo.map((letra, index) => {
            return (
              <span
                key={index}
                className="transition hover:animate-bounce hover:text-secundario min-w-[1rem] cursor-default "
              >
                {letra}
              </span>
            )
          })}
        </h1>

        <h2 className="absolute bottom-12 text-lg lg:text-2xl font-montserrat uppercase text-secundario animate-bounce">
          Artículos
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
