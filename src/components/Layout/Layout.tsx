import React from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import ReadingProgress from "./ReadingProgress"

interface Layout {
  children: React.ReactNode
  location: any
  barra?: any
}

const Layout: React.FC<Layout> = ({ location, children, barra }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const rootPathEs = `${__PATH_PREFIX__}/es/`
  const rootPathEn = `${__PATH_PREFIX__}/en/`
  const isRootPath =
    location.pathname === rootPath ||
    location.pathname === rootPathEs ||
    location.pathname === rootPathEn

  const target = React.createRef<HTMLDivElement>()

  return (
    <div
      className="w-full overflow-none global-wrapper text-primario dark:text-gray-400 dark:bg-black"
      data-is-root-path={isRootPath}
    >
      {!isRootPath ? <Header /> : null}
      {barra ? <ReadingProgress target={target} /> : null}
      <main
        ref={target}
        className="text-justify flex flex-col items-center px-2 container max-w-pantalla min-h-[90vh] z-20"
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
