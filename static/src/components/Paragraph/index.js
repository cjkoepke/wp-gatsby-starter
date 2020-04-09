import React from "react"
import Parse from "react-html-parser"
import { MaybeLink } from "../../helpers/hoc"
import "./styles.css"

export default function Paragraph({ content, dropCap, fontSize, align }) {
  const classNames = []
  if (dropCap) {
    classNames.push(`p--dropCap`)
  }

  if (fontSize) {
    classNames.push(`p--${fontSize}`)
  }

  if (align) {
    classNames.push(`p--${align}`)
  }

  const options = {
    transform: node => {
      if ("tag" === node.type && "a" === node.name) {
        return (
          <MaybeLink
            key={node?.attribs?.href}
            url={node?.attribs?.href}
            label={node?.children?.[0]?.data}
          />
        )
      }
    },
  }
  return (
    <p className={classNames.length ? classNames.join(" ") : null}>
      {Parse(content, options)}
    </p>
  )
}
