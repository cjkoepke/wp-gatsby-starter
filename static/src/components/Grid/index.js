import React from 'react'
import "./styles.css"

export default function Grid({ children, className }) {
  return <div className={`grid ${className ? className : ""}`}>{children}</div>
}
