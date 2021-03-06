import React, { Component } from "react"
import { Trans } from "gatsby-plugin-react-i18next"
//import ThemeContext from '../context/ThemeContext';

export default class Comments extends Component {
  //static contextType = ThemeContext;
  commentBox: React.RefObject<HTMLDivElement>
  constructor(props: any) {
    super(props)
    this.commentBox = React.createRef()
  }
  componentDidMount() {
    //const theme = this.context;
    const utteranceTheme =
      localStorage.theme === "dark" ? "github-dark" : "github-light"
    let scriptEl = document.createElement("script")
    scriptEl.setAttribute("src", "https://utteranc.es/client.js")
    scriptEl.setAttribute("crossorigin", "anonymous")
    scriptEl.setAttribute("async", "true")
    scriptEl.setAttribute("repo", "M4ss1ck/portfolio-comments")
    scriptEl.setAttribute("issue-term", "og:title")
    scriptEl.setAttribute("theme", utteranceTheme)
    if (this.commentBox.current) {
      this.commentBox.current.appendChild(scriptEl)
    }
  }
  // TODO: Add a way to change the theme of the comments

  render() {
    return (
      <div className="prose comment-box-wrapper pt-7 dark:prose-dark">
        <h1 className="mb-0 text-lg text-primario dark:text-secundario font-merriweather">
          <Trans>Comments</Trans>
        </h1>
        <hr className="my-0" />
        <div ref={this.commentBox} className="comment-box" />
        {/* Above element is where the comments are injected */}
      </div>
    )
  }
}
