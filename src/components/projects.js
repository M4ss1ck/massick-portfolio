import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"

import ProImg from "./ProjectsImg"

const proyectos = [
  {
    url: "https://github.com/M4ss1ck/massick-portfolio",
    title: "Mi portafolio (esta página)",
    description:
      "Página web creada con GatsbyJS usando Markdown para las publicaciones y TailwindCSS para los estilos. Soporte para modo oscuro y múltiples idiomas.",
    imageName: "portfolio",
  },
  {
    url: "https://github.com/M4ss1ck/tg-telegraf-bot",
    title: "WastingBot (remix)",
    description: "Telegram bot using nodejs and Telegraf.js",
    imageName: "wastingbotremix",
  },
  {
    url: "https://github.com/M4ss1ck/ciec-frontend-gatsby",
    title: "CIEC website",
    description:
      "Página web del Centro de Investigaciones de Ecosistemas Costeros (CIEC).",
    imageName: "ciec",
  },
  {
    url: "https://github.com/M4ss1ck/wastingBot",
    title: "WastingBot",
    description: "Telegram bot using nodejs and telebot",
    imageName: "wastingbot",
  },
  {
    url: "https://github.com/M4ss1ck/nextjs-blog-template",
    title: "Next.js Blog Template",
    description: "Blog template using Next.js and TailwindCSS",
    imageName: "nextBlog",
  },
]

const Projects = () => {
  return (
    <div className="flex flex-col min-h-full z-20">
      <ol style={{ listStyle: `none` }} className="max-w-prose">
        {proyectos.map((project, index) => {
          return (
            <li key={project.title} className="">
              <article
                className="grid grid-cols-3 grid-rows-3 gap-x-4 my-2"
                itemScope
                itemType="http://schema.org/Article"
              >
                <div className="my-4 row-span-3">
                  {project.imageName && <ProImg name={project.imageName} />}
                </div>

                <header className="col-span-2 mt-0 h-12">
                  <h2 className="text-lg md:text-xl md:font-bold text-secundario mt-2">
                    <a
                      href={project.url}
                      itemProp="url"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span itemProp="headline">
                        <Trans>{project.title}</Trans>
                      </span>
                    </a>
                  </h2>
                </header>
                <section className="col-span-2 row-span-2">
                  <p>
                    <Trans>{project.description}</Trans>
                  </p>
                </section>
              </article>
            </li>
          )
        })}
      </ol>
      {/* <hr className="mt-auto" /> */}
    </div>
  )
}

export default Projects
