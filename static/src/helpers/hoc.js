import React from "react"
import { Link } from "gatsby"
import { useGeneralSettings } from "../data/hooks"
import { isLocalAbsoluteUrl, isRelativeUrl, getRelativeUrl } from "./functions"

/**
 * Localize urls against the blog domain,
 * and return the appropriate component.
 *
 * @param {string} url Original URL value.
 * @param {string} label The menu item text.
 */
export const MaybeLink = ({ url, label, ...rest }) => {
  const { url: siteUrl } = useGeneralSettings()
  if (isLocalAbsoluteUrl(url, siteUrl) || isRelativeUrl(url)) {
    return (
      <Link to={getRelativeUrl(url, siteUrl)} {...rest}>
        {label}
      </Link>
    )
  }

  return (
    <a href={url} {...rest}>
      {label}
    </a>
  )
}
