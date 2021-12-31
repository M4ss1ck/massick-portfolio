import React, { useEffect, useState } from "react"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { globalHistory, useLocation } from "@reach/router"
import DarkToggle from "../lib/darkToggle"
import cx from "classnames"

import Massick1x1 from "../svg/massick-1x1.svg"

import Transition from "./transition"
import Language from "./language"

const navLinks = [
  {
    url: "/blog",
    i18n_id: "articles",
  },
  {
    url: "/about",
    i18n_id: "about",
  },
]

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()
  useEffect(
    () =>
      globalHistory.listen(({ action }) => {
        if (action === "PUSH") setMobileNavOpen(false)
      }),
    [setMobileNavOpen]
  )

  const toggleMobileNavOpen = () => setMobileNavOpen(open => !open)

  return (
    <div className="w-full pb-0 pt-4 md:pt-2 px-4 z-30 bg-gradient-to-r from-white via-transparent to-white dark:from-black dark:via-gray-900 dark:to-black dark:text-white">
      <nav className="relative flex items-center flex-wrap justify-center md:h-20 lg:justify-center">
        <div className="flex items-center flex-grow flex-shrink-0 h-full">
          <div className="flex items-center justify-between w-full">
            <div className="h-full justify-center align-middle">
              <Link to="/" aria-label="Wasting Time Blog">
                <div
                  className="h-10 logoh hidden sm:inline-flex items-center"
                  title={t("home")}
                >
                  <Massick1x1 className="rounded-md w-12 h-12" />
                  {/* <span className="inline-flex items-center ml-2 px-3 pt-1 pb-2 border-b-4 text-lg font-medium leading-5 focus:outline-none transition duration-250 ease-in-out border-transparent text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-300 focus:text-gray-600 focus:border-grey-600">
                    {t("home")}
                  </span> */}
                </div>
                <div className="max-h-full inline-flex sm:hidden items-center">
                  <Massick1x1 className="h-10 w-10" />
                </div>
              </Link>
            </div>

            <div className="-mr-2 flex items-center md:hidden">
              <DarkToggle />
              <Language />
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
          {navLinks.map(link => {
            return (
              <Link
                key={link.i18n_id}
                to={`${link.url}`}
                className={cx(
                  "inline-flex items-center px-1 pt-1 pb-2 border-b-4 text-lg font-medium leading-5 focus:outline-none transition duration-250 ease-in-out font-montserrat",
                  {
                    "border-secundario text-gray-900 dark:text-secundario focus:border-secundario":
                      (location.pathname.startsWith(`${link.url}`) &&
                        location.pathname.endsWith(`${link.url}`)) ||
                      (location.pathname.startsWith(`/en${link.url}`) &&
                        location.pathname.endsWith(`/en${link.url}`)),
                    "border-transparent text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-300 focus:text-gray-600 focus:border-grey-600":
                      !location.pathname.startsWith(`${link.url}`) ||
                      !location.pathname.startsWith(`/en${link.url}`),
                  }
                )}
              >
                <Trans>{link.i18n_id}</Trans>
              </Link>
            )
          })}
          <DarkToggle />
          <Language />
        </div>
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
        <div className="absolute top-0 inset-x-0 py-2 -mx-2 transition transform origin-top-right md:hidden z-50 md:z-10 px-4">
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
                    <Massick1x1 className="h-10 w-10" />
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
                {navLinks.map(link => {
                  return (
                    <Link
                      to={`${link.url}`}
                      className={cx(
                        "block pl-3 pr-4 py-2 border-l-4 font-medium focus:outline-none transition duration-150 ease-in-out",
                        {
                          "border-secundario text-gray-900 dark:text-secundario focus:border-secundario":
                            (location.pathname.startsWith(`${link.url}`) &&
                              location.pathname.endsWith(`${link.url}`)) ||
                            (location.pathname.startsWith(`/en${link.url}`) &&
                              location.pathname.endsWith(`/en${link.url}`)),
                          "border-transparent text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-300 focus:text-gray-600 focus:border-grey-600":
                            !location.pathname.startsWith(`${link.url}`) ||
                            !location.pathname.startsWith(`/en${link.url}`),
                        }
                      )}
                      role="menuitem"
                    >
                      <Trans>{link.i18n_id}</Trans>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

// export const NavLink = (url, name) => {
//   const location = useLocation()
//   return (
//     <>
//       <Link
//         to={url}
//         className={cx(
//           "block pl-3 pr-4 py-2 border-l-4 font-medium focus:outline-none transition duration-150 ease-in-out",
//           {
//             "border-secundario text-gray-900 dark:text-secundario focus:border-secundario":
//               location.pathname.startsWith(`${url}`) ||
//               location.pathname.startsWith(`/en${url}`),
//             "border-transparent text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-300 focus:text-gray-600 focus:border-grey-600":
//               !location.pathname.startsWith(`${url}`) ||
//               !location.pathname.startsWith(`/en${url}`),
//           }
//         )}
//         role="menuitem"
//       >
//         <Trans>{name}</Trans>
//       </Link>
//     </>
//   )
// }

export default Header
