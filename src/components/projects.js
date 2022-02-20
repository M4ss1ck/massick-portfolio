import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import proyectos from "./projectList"

const Projects = () => {
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
  console.log(allFile.edges)

  const compareFunction = (img, value, index, array) => {
    return value.node.base === img
  }
  return (
    <div className="flex flex-col min-h-full z-20">
      <ol style={{ listStyle: `none` }} className="max-w-prose">
        {proyectos.map((project, index) => {
          const i = allFile.edges.findIndex(value =>
            compareFunction(project.imageName, value, index)
          )
          const p = allFile.edges[i]
          return i !== -1 ? (
            <li key={p.node.id + project.title} className="">
              <article
                className="grid grid-cols-3 grid-rows-3 gap-x-4 my-2"
                itemScope
                itemType="http://schema.org/Article"
              >
                <div className="my-4 row-span-3">
                  <GatsbyImage image={p.node.childImageSharp.gatsbyImageData} />
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
          ) : null
        })}
      </ol>
      {/* <hr className="mt-auto" /> */}
    </div>
  )
}

export default Projects
