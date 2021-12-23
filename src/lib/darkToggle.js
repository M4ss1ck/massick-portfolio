import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const darkToggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className="relative">
          <input
            type="checkbox"
            id="toggle"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
            className="peer appearance-none cursor-pointer border border-secundario rounded-full checked:border-secundario w-12 h-7"
          />
          <span className="peer-checked:left-6 peer-checked:bg-secundario transition-all duration-500 pointer-events-none w-5 h-5 block absolute top-1 left-1 rounded-full bg-secundario"></span>
          {/* <label htmlFor="toggle"></label> */}
        </div>
      )}
    </ThemeToggler>
  )
}

export default darkToggle
