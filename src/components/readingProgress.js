import React, { useEffect, useState, useCallback } from "react"

const ReadingProgress = ({ target }) => {
  const [readingProgress, setReadingProgress] = useState(0)
  const scrollListener = useCallback(() => {
    if (!target.current) {
      return
    }

    const element = target.current
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0

    if (windowScrollTop === 0) {
      return setReadingProgress(0)
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100)
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100)
  }, [target])

  useEffect(() => {
    window.addEventListener("scroll", scrollListener)
    return () => window.removeEventListener("scroll", scrollListener)
  }, [scrollListener])

  return (
    <div
      className={`fixed h-2 top-0 bg-secundario z-40 mr-auto dark:bg-secundario`}
      style={{ width: `${readingProgress}%` }}
    />
  )
}

export default ReadingProgress

// https://nehalist.io/creating-a-reading-progress-bar-in-react/
