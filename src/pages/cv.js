import * as React from "react"
import { graphql } from "gatsby"

const CV = ({ data }) => {
  return (
    <>
      <article className="mx-auto container grid grid-cols-1 sm:grid-cols-4 font-montserrat">
        <section className="bg-blue-800 text-white text-center md:text-left">
          <h1 className="font-extrabold text-2xl md:text-4xl p-2">
            Andy Raúl Palmero López
          </h1>
          <p className="px-4">Web developer</p>
          <h1 className="bg-blue-900 font-bold mt-4 px-2 text-lg">Contact</h1>
          <h2 className="px-4 font-bold mt-2">Address</h2>
          <p className="px-4">Ciego de Ávila, Cuba, 65100</p>
          <h2 className="px-4 font-bold">E-mail</h2>
          <p className="px-4">4ndyraul@gmail.com</p>
          <h2 className="px-4 font-bold">Website</h2>
          <a className="px-4" href="http://massick.netlify.app/">
            massick.netlify.app
          </a>
          <h2 className="px-4 font-bold">Twitter</h2>
          <a className="px-4" href="https://twitter.com/M4ss1ck">
            twitter.com/M4ss1ck
          </a>
          <h2 className="px-4 font-bold">Github</h2>
          <a className="px-4" href="https://github.com/M4ss1ck">
            github.com/M4ss1ck
          </a>
          <h1 className="bg-blue-900 font-bold text-lg px-2 mt-4">Skills</h1>
          <ul className="p-4 mt-2">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Git</li>
            <li>React</li>
            <li>GatsbyJS</li>
            <li>NextJS</li>
          </ul>
          <h1 className="bg-blue-900 font-bold px-2 text-lg">Languages</h1>
          <ul className="p-4">
            <li>Spanish</li>
            <li>English</li>
          </ul>
        </section>

        <section className="col-span-3 px-8">
          <p className="py-8 text-justify">
            Enthusiastic web developer eager to contribute to team success
            through hard work, attention to detail and excellent organizational
            skills. Clear understanding of programming and heavy Mathematics
            background. Motivated to learn, grow and excel in this industry.
          </p>
          <hr />
          <h1 className="py-4 text-blue-800 font-bold text-lg">Work History</h1>
          <hr />
          <div className="flex flex-col md:grid md:grid-cols-6 py-2">
            <p className="md:w-24">2017-9 - Present</p>
            <div className="col-span-5">
              <h2 className="font-bold text-lg">Science Specialist</h2>
              <small className="font-thin">
                Coastal Ecosystems Research Center (CIEC), Morón, Cuba
              </small>
              <ul className="list-disc list-inside text-justify">
                <li>
                  Conducted document review, organization, and quality control
                  of data acquisition to draw relevant conclusions and direct
                  research activities.
                </li>
                <li>
                  Conferred with scientists, engineers or others to plan or
                  review projects or to provide technical assistance.
                </li>
                <li>
                  Worked as member of integrated project team in highly
                  collaborative work environment focused on Beach dynamics.
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <h1 className="py-4 text-blue-800 font-bold text-lg">Education</h1>
          <hr />
          <div className="flex flex-col md:grid md:grid-cols-6">
            <p className="md:w-24">2012-9 - 2017-7</p>
            <div className="col-span-5">
              <h2 className="font-bold text-lg">
                Bachelor of Science: Mathematics
              </h2>
              <small className="font-thin">
                Universidad "Marta Abreu" de Las Villas
              </small>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}

export default CV

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
