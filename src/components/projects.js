import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import proyectos from "./projectList"
import ProImg from "./ProjectsImg"

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
