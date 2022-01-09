import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"

const proyectos = [
  {
    url: "https://github.com/M4ss1ck/massick-portfolio",
    title: "Mi portafolio (esta página)",
    description:
      "Página web creada con GatsbyJS usando Markdown para las publicaciones y TailwindCSS para los estilos. Soporte para modo oscuro y múltiples idiomas.",
  },
  {
    url: "https://github.com/M4ss1ck/wastingBot",
    title: "WastingBot",
    description: "Telegram bot using nodejs and telebot",
  },
  {
    url: "https://github.com/M4ss1ck/nextjs-blog-template",
    title: "Next.js Blog Template",
    description: "Blog template using Next.js and TailwindCSS",
  },
]

const projects = () => {
  return (
    <div className="pt-6 pb-2 flex flex-col items-center justify-center max-h-screen min-h-[70vh] z-20">
      <ol style={{ listStyle: `none` }}>
        {proyectos.map(project => {
          return (
            <li key={project.title}>
              <article
                className="post-list-item my-2 max-w-prose"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2 className="text-lg font-bold text-secundario mt-2">
                    <a href={project.url} itemProp="url">
                      <span itemProp="headline">
                        <Trans>{project.title}</Trans>
                      </span>
                    </a>
                  </h2>
                </header>
                <section>
                  <p>
                    <Trans>{project.description}</Trans>
                  </p>
                </section>
              </article>
            </li>
          )
        })}
      </ol>
      <h2 className="mt-auto text-lg lg:text-2xl font-montserrat uppercase text-secundario  animate-bounce z-20 dark:z-20">
        <Trans>articles</Trans>
      </h2>

      {/* scroll-down button */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 my-4 animate-bounce text-secundario"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
        />
      </svg>
    </div>
  )
}

export default projects
