import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import GitHubSVG from "../../svg/github.svg"
import TelegramSVG from "../../svg/telegram.svg"
import SoundcloudSVG from "../../svg/soundcloud.svg"
import TwitterSVG from "../../svg/twitter.svg"
import ShowwcaseSVG from "../../svg/showwcase.svg"
import LinkedInSVG from "../../svg/linkedin.svg"
import Divider from "../../svg/divider.svg"

const socialLinks = [
  {
    Component: TelegramSVG,
    href: "https://t.me/m4ss1ck",
    title: "Telegram",
  },
  {
    Component: GitHubSVG,
    href: "https://github.com/M4ss1ck",
    title: "GitHub",
  },
  {
    Component: TwitterSVG,
    href: "https://twitter.com/m4ss1ck",
    title: "Twitter",
  },
  {
    Component: LinkedInSVG,
    href: "https://www.linkedin.com/in/m4ss1ck",
    title: "LinkedIn",
  },
  {
    Component: ShowwcaseSVG,
    href: "https://www.showwcase.com/m4ss1ck",
    title: "Showwcase",
  },
  {
    Component: SoundcloudSVG,
    href: "http://soundcloud.com/m4ss1ck",
    title: "SoundCloud",
  },
]

function Footer() {
  return (
    <>
      <Divider className="text-primario dark:text-secundario" />
      <footer className="relative scrollbar-thin bg-primario dark:bg-gradient-to-r dark:from-black dark:via-gray-900 dark:to-black dark:text-white">
        <div className="flex flex-col items-center max-w-3xl px-4 py-6 mx-auto space-y-6 md:flex-row md:justify-between sm:px-6 lg:max-w-5xl md:space-y-0">
          <p className="text-white dark:text-secundario">
            <Trans>Construido con</Trans>{" "}
            <a
              href="https://www.gatsbyjs.com"
              className="hover:text-gray-600 dark:hover:text-white"
            >
              Gatsby
            </a>
          </p>

          <ul className="flex flex-row flex-wrap space-x-2">
            {socialLinks.map(({ Component, href, title }, index) => (
              <li key={index}>
                <a
                  href={href}
                  target="_blank"
                  className="block p-1 text-sm text-white transition duration-150 dark:text-secundario hover:text-gray-600 dark:hover:text-white "
                  rel="noopener noreferrer"
                  title={title}
                >
                  <Component className="w-6 h-6" />
                </a>
              </li>
            ))}
            <li>
              <a
                href="/rss.xml"
                target="_blank"
                className="block p-1 text-sm text-white transition duration-150 dark:text-secundario hover:text-gray-600 dark:hover:text-white "
                rel="noopener noreferrer"
                title="RSS feed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer
