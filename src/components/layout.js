import * as React from "react"
//import { Link } from "gatsby"
import Footer from "./footer"
import Header from "./header"
//import DarkToggle from "../lib/darkToggle"
import LandingPage from "./landingPage"

const Layout = ({ location, title, children }) => {
  const rootPathEs = `${__PATH_PREFIX__}/es/`
  const rootPathEn = `${__PATH_PREFIX__}/en/`
  const isRootPath =
    location.pathname === rootPathEs || location.pathname === rootPathEn
  let header

  if (isRootPath) {
    header = <LandingPage title={title} />
  } else {
    header = <Header />
  }

  return (
    <div
      className="global-wrapper w-full text-primario dark:text-gray-500 dark:bg-black"
      data-is-root-path={isRootPath}
    >
      <header
        className={
          isRootPath ? "w-full h-[100vh]" : "w-full sticky lg:top-0 z-30"
        }
      >
        {header}
      </header>
      <main className="text-justify flex flex-col items-center px-2 container max-w-pantalla min-h-[90vh] z-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
