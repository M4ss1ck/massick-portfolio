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
            className="w-12 text-transparent bg-transparent border rounded-full shadow-none appearance-none cursor-pointer form-checkbox peer border-primario dark:border-secundario checked:border-primario dark:checked:border-secundario h-7 focus:ring-0 focus:ring-offset-transparent focus:ring-offset-0 ring-primario dark:ring-secundario"
            style={{
              backgroundImage: "none",
              color: "transparent",
            }}
          />
          <span className="absolute block w-5 h-5 transition-all duration-500 rounded-full pointer-events-none peer-checked:left-6 peer-checked:bg-primario dark:peer-checked:bg-secundario top-1 left-1 bg-primario dark:bg-secundario"></span>
        </div>
      )}
    </ThemeToggler>
  )
}

export default darkToggle
