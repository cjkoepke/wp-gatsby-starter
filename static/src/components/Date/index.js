import React from "react"
import { parseISO, format } from "date-fns"

export default ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>
}
