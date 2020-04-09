import React from "react"
import { MaybeLink } from "../../helpers/hoc"
import "./styles.css"

export default ({ label, url }) => (
  <MaybeLink url={url} label={label} className={`button`} />
)
