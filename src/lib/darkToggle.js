import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const darkToggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className="relative m-auto">
          <input
            aria-label="dark mode toggle"
            type="checkbox"
            id="toggle"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
            className="w-12 border rounded-full appearance-none cursor-pointer peer border-primario dark:border-secundario checked:border-primario dark:checked:border-secundario h-7"
          />
          <span className="absolute block w-5 h-5 transition-all duration-500 rounded-full pointer-events-none  peer-checked:left-6 peer-checked:bg-primario dark:peer-checked:bg-secundario top-1 left-1 bg-primario dark:bg-secundario"></span>
          {/* <label htmlFor="toggle" ></label> */}
        </div>
      )}
    </ThemeToggler>
  )
}

export default darkToggle
