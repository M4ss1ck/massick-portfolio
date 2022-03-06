import * as React from "react"
import { graphql } from "gatsby"
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import Seo from "../components/seo"
import Pdf from "react-to-pdf"
import { useElementSize, useWindowSize } from "usehooks-ts"

const CV_Math = ({ data }) => {
  const ref = React.createRef()

  // using https://usehooks-ts.com/react-hook/use-element-size
  const [articleRef, { height }] = useElementSize()
  // https://usehooks-ts.com/react-hook/use-window-size
  const { width } = useWindowSize()

  const { t } = useTranslation()
  const { language } = useI18next()
  return (
    <>
      <Seo
        lang={language}
        title={t("Math-focused CV")}
        description="My CV focused on Mathematics"
      />
      <div className="container max-w-screen-lg mx-auto flex flex-row items-center justify-center my-4">
        <button className="border-2 border-blue-700 text-blue-700 font-bold rounded-lg p-4 hover:text-white hover:bg-blue-700 mr-auto">
          <Link to="/">{t("home")}</Link>
        </button>
        <Pdf
          targetRef={ref}
          filename="massick-cv-math.pdf"
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
              className="border-2 border-blue-700 text-blue-700 font-bold rounded-lg p-4 hover:text-white hover:bg-blue-700"
            >
              Generate Pdf
            </button>
          )}
        </Pdf>
      </div>

      <div ref={ref}>
        <article
          className="mx-auto container grid grid-cols-1 sm:grid-cols-4 font-montserrat max-w-screen-lg"
          ref={articleRef}
        >
          <section className="bg-blue-800 text-white text-center md:text-left">
            <h1 className="font-extrabold text-2xl md:text-4xl p-2">
              Andy Raúl Palmero López
            </h1>
            <p className="px-4">BS: Mathematics</p>
            <h1 className="bg-blue-900 font-bold mt-4 px-2 text-lg">Contact</h1>
            <h2 className="px-4 font-bold mt-2">Address</h2>
            <p className="px-4">Ciego de Ávila, Cuba, 65100</p>
            <h2 className="px-4 font-bold">E-mail</h2>
            <p className="px-4">4ndyraul@gmail.com</p>
            <h1 className="bg-blue-900 font-bold text-lg px-2 mt-4">Skills</h1>
            <ul className="p-4 mt-2">
              <li>Wolfram Mathematica</li>
              <li>R</li>
              <li>Javascript</li>
            </ul>
            <h1 className="bg-blue-900 font-bold px-2 text-lg">Languages</h1>
            <ul className="p-4">
              <li>Spanish</li>
              <li>English</li>
            </ul>
          </section>
          <section className="col-span-3 px-8">
            <p className="py-8 text-justify">
              Mathematics graduate with passion for programming. Big fan of hard
              work, attention to detail and organizational skills. Motivated to
              learn, grow and excel in research activities.
            </p>
            <hr />
            {/* <h1 className="py-4 text-blue-800 font-bold text-lg">Projects</h1>
            <hr />
            <div className="flex flex-col md:grid md:grid-cols-6 py-2">
              <p className="md:w-24">Present</p>
              <div className="col-span-5">
                <h2 className="font-bold text-lg">My portfolio</h2>
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
                  Avaible at{" "}
                  <a href="https://massick.is-a.dev" className="text-blue-700">
                    massick.is-a.dev
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-6 py-2">
              <p className="md:w-24">2022-01</p>
              <div className="col-span-5">
                <h2 className="font-bold text-lg">CIEC website</h2>
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
            <div className="flex flex-col md:grid md:grid-cols-6 py-2">
              <p className="md:w-24">2021-11</p>
              <div className="col-span-5">
                <h2 className="font-bold text-lg">Next.js Blog Template</h2>
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
            </div> */}

            <h1 className="py-4 text-blue-800 font-bold text-lg">
              Work History
            </h1>
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
                <ul className="list-disc list-inside text-justify">
                  <li>
                    "Disminución de los tiempos de cálculo en la fase de
                    inicialización del método de elementos discretos (MED)"
                  </li>
                </ul>
                <p>
                  <span className="pl-2"></span>Thesis devoted to the Discrete
                  Element Method (DEM) initialization phase. It approaches the
                  problem of the particle in contact for clusters of disks and
                  spheres.
                </p>
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

export default CV_Math

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
