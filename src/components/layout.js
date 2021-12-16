import * as React from "react"
import { Link } from "gatsby"
import Footer from "./footer"
import Header from "./header"
import DarkToggle from "../lib/darkToggle"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <>
        <h1 className="text-center text-2xl lg:text-5xl font-extrabold font-montserrat uppercase pt-6 pb-2">
          <Link to="/">{title}</Link>
        </h1>

        <h2 className="text-center text-lg lg:text-2xl pb-4">
          <Link to="/about">¿Quién soy? &#x1F914;</Link>
        </h2>
        <DarkToggle />
      </>
    )
  } else {
    header = <Header />
  }

  return (
    <div
      className="global-wrapper w-full text-primario dark:text-gray-500 dark:bg-black"
      data-is-root-path={isRootPath}
    >
      <header className={isRootPath ? "w-full" : "w-full sticky lg:top-0 z-50"}>
        {header}
      </header>
      <main className="text-justify flex flex-col items-center px-2 container max-w-pantalla min-h-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
