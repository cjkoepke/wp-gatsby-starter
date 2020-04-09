import React from "react"
import Avatar from "../Avatar"
import Date from "../Date"
import "./styles.css"

export default ({ title, date, author }) => {
  return (
    <div className={`post-meta`}>
      <div className={`post-meta__info`}>
        <Avatar author={author} />
        <Date dateString={date} />
      </div>
      <h1
        className={`post-meta__title`}
        dangerouslySetInnerHTML={{ __html: title }}
      ></h1>
    </div>
  )
}
