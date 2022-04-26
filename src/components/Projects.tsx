import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql, useStaticQuery } from "gatsby"
import project_list from "./projectList"
import SearchProject from "./SearchProject/SearchProject"

interface Projects {
  limit?: number
  search?: boolean
}

type P2S = {
  title: string
  description: string
  image: any
  url: string
}

const Projects: React.FC<Projects> = ({ limit, search }) => {
  const { t } = useTranslation()

  const proyectos =
    limit && limit > project_list.length
      ? project_list
      : project_list.slice(0, limit)
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
  const compareFunction = (
    img: any,
    value: any,
    index?: number,
    array?: any[]
  ) => {
    return value.node.base === img
  }

  let projectsToSearch: P2S[] = []

  proyectos.forEach(project => {
    const i = allFile.edges.findIndex((value: P2S) =>
      compareFunction(project.imageName, value)
    )
    const p = allFile.edges[i]
    if (i !== -1) {
      projectsToSearch.push({
        title: t(project.title),
        description: t(project.description),
        image: p.node.childImageSharp.gatsbyImageData,
        url: project.url,
      })
    }
  })

  return (
    <div className="z-20 flex flex-col">
      <SearchProject
        projects={projectsToSearch}
        keys={["title", "description"]}
        search={search ? true : false}
      />
    </div>
  )
}

export default Projects
