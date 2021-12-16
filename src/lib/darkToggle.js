import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const darkToggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className="dark-button mx-4">
          <input
            type="checkbox"
            id="toggle"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />
          <label for="toggle" htmlFor="toggle"></label>
        </div>
      )}
    </ThemeToggler>
  )
}

export default darkToggle
