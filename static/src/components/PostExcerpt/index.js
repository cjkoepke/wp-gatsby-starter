import React from "react"
import Date from "../Date"
import Button from "../Button"
import { Link } from "gatsby"
import Parse from "react-html-parser"
import "./styles.css"

export default ({ title, author, date, excerpt, slug }) => {
  return (
    <article className={`preview`}>
      <h2 className={`preview__title`}>
        <Link to={`/posts/${slug}`}>{Parse(title)}</Link>
      </h2>
      <Date dateString={date} />
      <div className="preview__excerpt">{Parse(excerpt)}</div>
      <Button url={`/posts/${slug}`} label={`Read More`} />
    </article>
  )
}
