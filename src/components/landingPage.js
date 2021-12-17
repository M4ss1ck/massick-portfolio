import React from "react"
import { Link } from "gatsby"
import DarkToggle from "../lib/darkToggle"
//import { StaticImage } from "gatsby-plugin-image"
//import coding from "../svg/coding.svg"

const landingPage = ({ title }) => {
  const emoji = "\u{1F4AD}"
  return (
    <>
      <div
        className="text-center text-5xl lg:text-7xl font-extrabold font-montserrat uppercase pt-6 pb-2 items-center justify-center my-bg2"
        style={{ height: "50vh" }}
      >
        <h1 className="flex items-center justify-center h-full">
          <Link to="/">{title}</Link>
        </h1>
      </div>

      <div className="flex flex-row justify-evenly">
        <h2 className="text-center text-sm lg:text-lg pb-4">
          <Link to="/about">¿Quién soy? &#x1F914;{emoji}</Link>
        </h2>
        <DarkToggle />
      </div>
    </>
  )
}

export default landingPage
