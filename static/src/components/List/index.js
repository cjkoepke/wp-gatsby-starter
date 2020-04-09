import React from "react"
export default ({ values, ordered }) => {
  if (!values) {
    return null
  }

  return ordered ? (
    <ol dangerouslySetInnerHTML={{ __html: values }} />
  ) : (
    <ul dangerouslySetInnerHTML={{ __html: values }} />
  )
}
