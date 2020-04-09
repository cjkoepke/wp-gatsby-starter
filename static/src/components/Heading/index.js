import React from "react"
import Parse from "react-html-parser"

export default ({ content, level }) => {
  return React.createElement(`h${level}`, {}, Parse(content))
}
