import React, { useEffect, useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { globalHistory, useLocation } from "@reach/router"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import cx from "classnames"

import Transition from "./transition"

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const location = useLocation()
  // const { pages, logo3, logo2, logo1 } = useStaticQuery(graphql`
  //   {
  //     pages: allGraphCmsPage {
  //       nodes {
  //         id
  //         slug
  //         title
  //       }
  //     }
  //     logo3: file(relativePath: { eq: "logo3.jpg" }) {
  //       childImageSharp {
  //         gatsbyImageData
  //       }
  //     }
  //     logo2: file(relativePath: { eq: "logo2.jpg" }) {
  //       childImageSharp {
  //         gatsbyImageData
  //       }
  //     }
  //     logo1: file(relativePath: { eq: "logo1.jpg" }) {
  //       childImageSharp {
  //         gatsbyImageData
  //       }
  //     }
  //   }
  // `);

  useEffect(
    () =>
      globalHistory.listen(({ action }) => {
        if (action === "PUSH") setMobileNavOpen(false)
      }),
    [setMobileNavOpen]
  )

  const toggleMobileNavOpen = () => setMobileNavOpen(open => !open)

  // const image3 = getImage(logo3);
  // const image2 = getImage(logo2);
  // const image1 = getImage(logo1);

  return (
    <header className="w-full py-0 px-4 sticky top-0 z-30 bg-gradient-to-r from-white via-transparent to-white dark:from-black dark:via-gray-800 dark:to-black dark:text-white">
      <nav className="relative flex items-center flex-wrap justify-between sm:h-14 md:h-12 lg:justify-center">
        <div className="flex items-center flex-grow flex-shrink-0 sm:h-14 md:h-12">
          <div className="flex items-center justify-between w-full">
            <div
              className="h-full justify-center align-middle"
              //style={{ height: "10vh" }}
            >
              <Link to="/" aria-label="Wasting Time Blog">
                <div className="h-10 logoh hidden sm:inline-flex items-center">
                  {/* <GatsbyImage
                    image={image3}
                    alt="logo"
                    className="h-10 w-28"
                  /> */}
                </div>
                <div className="max-h-full inline-flex sm:hidden items-center">
                  {/* <GatsbyImage
                    image={image1}
                    alt="logo"
                    className="h-10 w-10"
                  /> */}
                </div>
                {/* <span className="text-lg">Wasting Time Blog</span> */}
              </Link>
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={() => toggleMobileNavOpen()}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                id="main-menu"
                aria-label="Main menu"
                aria-haspopup="true"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:ml-10 md:pr-4 space-x-8">
          <Link
            to={`/blog`}
            className={cx(
              "inline-flex items-center px-1 pt-1 pb-2 border-b-4 text-lg font-medium leading-5 focus:outline-none transition duration-150 ease-in-out",
              {
                "border-purple-500 text-gray-900 dark:text-purple-500 focus:border-purple-600":
                  location.pathname.startsWith(`/blog`),
                "border-transparent text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-300 focus:text-gray-600 focus:border-grey-600":
                  !location.pathname.startsWith(`/blog`),
              }
            )}
          >
            Publicaciones
          </Link>
          {/* {pages.nodes.map((page) => {
            const isActive = location.pathname.startsWith(`/${page.slug}`);
            return (
              <Link
                key={page.id}
                to={`/${page.slug}`}
                className={cx(
                  "inline-flex items-center px-1 pt-1 pb-2 border-b-4 text-lg font-medium leading-5 focus:outline-none transition duration-150 ease-in-out",
                  {
                    "border-purple-500 text-gray-900 dark:text-purple-500 focus:border-purple-600":
                      isActive,
                    "border-transparent text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-300 focus:text-gray-600 focus:border-grey-600":
                      !isActive,
                  }
                )}
              >
                {page.title}
              </Link>
            );
          })} */}
        </div>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <div className="dark-button mx-4">
              <input
                type="checkbox"
                id="toggle"
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
              />
              <label for="toggle" htmlFor="toggle"></label>
            </div>
          )}
        </ThemeToggler>
      </nav>
      <Transition
        show={mobileNavOpen}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-0 inset-x-0 py-2 -mx-2 transition transform origin-top-right md:hidden z-50 md:z-10">
          <div className="rounded-lg shadow-md">
            <div
              className="rounded-lg bg-white dark:bg-black shadow-xs overflow-hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div className="px-2 pt-8 flex items-center justify-between">
                <div className="w-custom">
                  <Link to="/">
                    {/* <GatsbyImage
                      image={image2}
                      alt="logo"
                      className="h-10 w-28"
                    /> */}
                  </Link>
                </div>
                <div className="-mr-2">
                  <button
                    onClick={() => toggleMobileNavOpen()}
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    aria-label="Close menu"
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-1 px-2 pt-2 pb-3 space-y-1">
                <Link
                  to={`/blog`}
                  className={cx(
                    "block pl-3 pr-4 py-2 border-l-4 font-medium focus:outline-none transition duration-150 ease-in-out",
                    {
                      "border-purple-500 text-gray-900 dark:text-purple-500 focus:border-purple-600":
                        location.pathname.startsWith(`/blog`),
                      "border-transparent text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-300 focus:text-gray-600 focus:border-grey-600":
                        !location.pathname.startsWith(`/blog`),
                    }
                  )}
                  role="menuitem"
                >
                  Publicaciones
                </Link>
                {/* {pages.nodes.map((page) => {
                  const isActive = location.pathname.startsWith(
                    `/${page.slug}`
                  );

                  return (
                    <Link
                      key={page.id}
                      to={`/${page.slug}`}
                      className={cx(
                        "block pl-3 pr-4 py-2 border-l-4 font-medium focus:outline-none transition duration-150 ease-in-out",
                        {
                          "border-purple-500 text-purple-500 bg-purple-50 dark:text-purple-500 focus:text-purple-600 focus:bg-purple-100 focus:border-purple-600":
                            isActive,
                          "border-transparent text-gray-500 hover:text-gray-600 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-600 focus:bg-gray-50 dark:hover:text-gray-300 focus:border-gray-300":
                            !isActive,
                        }
                      )}
                      role="menuitem"
                    >
                      {page.title}
                    </Link>
                  );
                })} */}
                {/* <BotonModoOscuro
                  enabled={theme === "dark"}
                  setEnabled={() => setTheme(theme === "dark" ? "light" : "dark")}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </header>
  )
}

export default Header
