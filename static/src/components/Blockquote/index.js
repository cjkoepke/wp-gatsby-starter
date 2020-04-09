import React from "react"
import "./styles.css"

export default ({ align, citation, value }) => {
  return (
    <blockquote className={`blockquote ${align ? `blockquote--${align}` : ""}`}>
      <div dangerouslySetInnerHTML={{ __html: value }} />
      {citation && <cite></cite>}
    </blockquote>
  )
}
