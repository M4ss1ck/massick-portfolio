import React from "react"

import GitHubSVG from "../svg/github.svg"
//import WhatsAppSVG from "../svg/whatsapp.svg";
import TelegramSVG from "../svg/telegram.svg"
import SoundcloudSVG from "../svg/soundcloud.svg"

const socialLinks = [
  {
    Component: TelegramSVG,
    href: "https://t.me/juestin_taim",
    title: "Telegram",
  },
  {
    Component: SoundcloudSVG,
    href: "http://soundcloud.com/m4ss1ck",
    title: "SoundCloud",
  },

  {
    Component: GitHubSVG,
    href: "https://github.com/M4ss1ck",
    title: "GitHub",
  },
]

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-black dark:via-gray-800 dark:to-black dark:text-white">
      <div className="flex flex-col md:flex-row items-center md:justify-between py-6 max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl space-y-6 md:space-y-0">
        <p className="text-gray-300">
          Construido con <a href="https://www.gatsbyjs.com">Gatsby</a>
        </p>
        <ul className="inline-flex space-x-6">
          {socialLinks.map(({ Component, href, title }, index) => (
            <li key={index}>
              <a
                href={href}
                target="_blank"
                className="block text-gray-300 hover:text-white p-1 text-sm"
                rel="noopener noreferrer"
                title={title}
              >
                <Component className="h-6 w-6" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
