import React from "react"

export default () => {
  const date = new Date()
  return (
    <footer className={`footer`}>
      <p>&copy; {date.getFullYear()} - ALl Rights Reserved</p>
    </footer>
  )
}
