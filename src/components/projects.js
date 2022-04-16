import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import project_list from "./projectList"

const Projects = ({ limit }) => {
  const proyectos =
    limit > project_list.length ? project_list : project_list.slice(0, limit)
  const { allFile } = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
        edges {
          node {
            id
            base
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)
  const compareFunction = (img, value, index, array) => {
    return value.node.base === img
  }
  return (
    <div className="z-20 flex flex-col min-h-full">
      <ol style={{ listStyle: `none` }} className="max-w-prose">
        {proyectos.map((project, index) => {
          const i = allFile.edges.findIndex(value =>
            compareFunction(project.imageName, value, index)
          )
          const p = allFile.edges[i]
          return i !== -1 ? (
            <li key={p.node.id + project.title} className="">
              <article
                className="grid grid-cols-3 grid-rows-2 my-4 gap-x-4"
                itemScope
                itemType="http://schema.org/Article"
              >
                <div className="relative row-span-2 my-4">
                  <GatsbyImage
                    image={p.node.childImageSharp.gatsbyImageData}
                    alt=""
                    className="relative top-0 w-full h-full blur-sm hue-rotate-30"
                    objectFit="fill"
                  />

                  <GatsbyImage
                    image={p.node.childImageSharp.gatsbyImageData}
                    alt={project.title}
                    layout="fullWidth"
                    // className="absolute left-0 w-full -translate-y-1/2 top-1/2"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "0",
                      transform: "translate(0,-50%)",
                      width: "100%",
                      maxHeight: "90%",
                    }}
                    imgStyle={{ objectPosition: "50% 0%" }}
                  />
                </div>

                <header className="h-12 col-span-2">
                  <h2 className="mt-6 text-lg font-bold md:text-xl text-primario dark:text-secundario">
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
                <section className="col-span-2">
                  <p>
                    <Trans>{project.description}</Trans>
                  </p>
                </section>
              </article>
            </li>
          ) : null
        })}
      </ol>
      {/* <hr className="mt-auto" /> */}
    </div>
  )
}

export default Projects
