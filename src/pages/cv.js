import * as React from "react"
import { graphql } from "gatsby"
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import Seo from "../components/SEO/seo"
import Pdf from "react-to-pdf"
import { useElementSize, useWindowSize } from "usehooks-ts"

const CV = ({ data }) => {
  const ref = React.createRef()

  // using https://usehooks-ts.com/react-hook/use-element-size
  const [articleRef, { height }] = useElementSize()
  // https://usehooks-ts.com/react-hook/use-window-size
  const { width } = useWindowSize()

  const { t } = useTranslation()
  const { language } = useI18next()
  return (
    <>
      <Seo lang={language} title={t("CV title")} />
      <div className="container flex flex-row items-center justify-center max-w-screen-lg mx-auto my-4 ">
        <button className="p-4 mr-auto font-bold text-blue-700 border-2 border-blue-700 rounded-lg hover:text-white hover:bg-blue-700">
          <Link to="/">{t("home")}</Link>
        </button>
        <Pdf
          targetRef={ref}
          filename="massick-cv.pdf"
          options={{
            orientation: width > height ? "landscape" : "portrait",
            unit: "in",
            format: [width / 96, height / 96],
          }}
          //scale={0.8}
        >
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="p-4 font-bold text-blue-700 border-2 border-blue-700 rounded-lg hover:text-white hover:bg-blue-700"
            >
              Generate Pdf
            </button>
          )}
        </Pdf>
      </div>

      <div ref={ref}>
        <article
          className="container grid max-w-screen-lg grid-cols-1 mx-auto sm:grid-cols-4 font-montserrat"
          ref={articleRef}
        >
          <section className="text-center text-white bg-blue-800 md:text-left">
            <h1 className="p-2 text-2xl font-extrabold md:text-4xl">
              Andy Raúl Palmero López
            </h1>
            <p className="px-4">Web developer</p>
            <h1 className="px-2 mt-4 text-lg font-bold bg-blue-900">Contact</h1>
            <h2 className="px-4 mt-2 font-bold">Address</h2>
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
            <h1 className="px-2 mt-4 text-lg font-bold bg-blue-900">Skills</h1>
            <ul className="p-4 mt-2">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Git</li>
              <li>React</li>
              <li>GatsbyJS</li>
              <li>NextJS</li>
            </ul>
            <h1 className="px-2 text-lg font-bold bg-blue-900">Languages</h1>
            <ul className="p-4">
              <li>Spanish</li>
              <li>English</li>
            </ul>
          </section>
          <section className="col-span-3 px-8">
            <p className="py-8 text-justify">
              Enthusiastic web developer eager to contribute to team success
              through hard work, attention to detail and excellent
              organizational skills. Clear understanding of programming and
              heavy Mathematics background. Motivated to learn, grow and excel
              in this industry.
            </p>
            <hr />
            <h1 className="py-4 text-lg font-bold text-blue-800">Projects</h1>
            <hr />
            <div className="flex flex-col py-2 md:grid md:grid-cols-6">
              <p className="md:w-24">Present</p>
              <div className="col-span-5">
                <h2 className="text-lg font-bold">My portfolio</h2>
                <small>
                  <a
                    href="https://github.com/M4ss1ck/massick-portfolio"
                    className="font-thin text-blue-700"
                  >
                    https://github.com/M4ss1ck/massick-portfolio
                  </a>
                </small>
                <p>
                  Markdown powered Gatsby website with dark mode and multiple
                  languages support. Styled with Tailwind CSS. Optimized for
                  Netlify.
                </p>
                <p>
                  Available at{" "}
                  <a href="https://massick.is-a.dev" className="text-blue-700">
                    massick.is-a.dev
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col py-2 md:grid md:grid-cols-6">
              <p className="md:w-24">2022-02</p>
              <div className="col-span-5">
                <h2 className="text-lg font-bold">CV maker</h2>
                <small>
                  <a
                    href="https://github.com/M4ss1ck/gatsby-cv-maker"
                    className="font-thin text-blue-700"
                  >
                    https://github.com/M4ss1ck/gatsby-cv-maker
                  </a>
                </small>
                <p>
                  Typescript + GatsbyJS + TailwindCSS web app for creating
                  professional CVs.
                </p>
                <p>
                  Demo at{" "}
                  <a
                    href="https://cool-cv-maker.netlify.app/"
                    className="text-blue-700"
                  >
                    cool-cv-maker.netlify.app
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col py-2 md:grid md:grid-cols-6">
              <p className="md:w-24">2022-01</p>
              <div className="col-span-5">
                <h2 className="text-lg font-bold">CIEC website</h2>
                <small>
                  <a
                    href="https://github.com/M4ss1ck/ciec-frontend-gatsby"
                    className="font-thin text-blue-700"
                  >
                    https://github.com/M4ss1ck/ciec-frontend-gatsby
                  </a>
                </small>
                <p>
                  Coastal Ecosystems Research Center (CIEC) website. Strapi
                  backend, dark mode. Styled with Tailwind CSS.
                </p>
              </div>
            </div>
            <div className="flex flex-col py-2 md:grid md:grid-cols-6">
              <p className="md:w-24">2021-11</p>
              <div className="col-span-5">
                <h2 className="text-lg font-bold">Next.js Blog Template</h2>
                <small>
                  <a
                    href="https://github.com/M4ss1ck/nextjs-blog-template"
                    className="font-thin text-blue-700"
                  >
                    https://github.com/M4ss1ck/nextjs-blog-template
                  </a>
                </small>
                <p>Blog template using Next.js and Tailwind CSS</p>
              </div>
            </div>

            <h1 className="py-4 text-lg font-bold text-blue-800">
              Work History
            </h1>
            <hr />
            <div className="flex flex-col py-2 md:grid md:grid-cols-6">
              <p className="md:w-24">2017-9 - Present</p>
              <div className="col-span-5">
                <h2 className="text-lg font-bold">Science Specialist</h2>
                <small className="font-thin">
                  Coastal Ecosystems Research Center (CIEC), Morón, Cuba
                </small>
                <ul className="text-justify list-disc list-inside">
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
            <h1 className="py-4 text-lg font-bold text-blue-800">Education</h1>
            <hr />
            <div className="flex flex-col md:grid md:grid-cols-6">
              <p className="md:w-24">2012-9 - 2017-7</p>
              <div className="col-span-5">
                <h2 className="text-lg font-bold">
                  Bachelor of Science: Mathematics
                </h2>
                <small className="font-thin">
                  Universidad "Marta Abreu" de Las Villas
                </small>
              </div>
            </div>
          </section>
        </article>
      </div>
      <div className="flex items-center justify-end">
        <p className="mr-4">
          Dimensions: {width} x {height} px
        </p>
      </div>
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
