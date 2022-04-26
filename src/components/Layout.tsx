import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import LandingPage from "./LandingPage"
import ReadingProgress from "./ReadingProgress"

interface Layout {
  children: React.ReactNode
  title: string
  location: any
  barra?: any
}

const Layout: React.FC<Layout> = ({ location, title, children, barra }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const rootPathEs = `${__PATH_PREFIX__}/es/`
  const rootPathEn = `${__PATH_PREFIX__}/en/`
  const isRootPath =
    location.pathname === rootPath ||
    location.pathname === rootPathEs ||
    location.pathname === rootPathEn
  let header
  const target = React.createRef<HTMLDivElement>()
  if (isRootPath) {
    header = <LandingPage title={title} />
  } else {
    header = <Header />
  }

  return (
    <div
      className="w-full global-wrapper text-primario dark:text-gray-400 dark:bg-black "
      data-is-root-path={isRootPath}
    >
      <header
        className={isRootPath ? "w-full h-[100vh]" : "w-full sticky top-0 z-30"}
      >
        {header}
      </header>
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
