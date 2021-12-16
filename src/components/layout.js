import * as React from "react"
import { Link } from "gatsby"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="text-center text-5xl font-extrabold font-montserrat uppercase pt-6 pb-0">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = <Header />
  }

  return (
    <div
      className="global-wrapper w-full text-primario dark:text-gray-500 dark:bg-black"
      data-is-root-path={isRootPath}
    >
      <header className="w-full sticky top-0 z-50">{header}</header>
      <main className="text-justify flex flex-col items-center flex-wrap px-2 justify-center container mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
