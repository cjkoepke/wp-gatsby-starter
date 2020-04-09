import React from "react"
import { MaybeLink } from "../../helpers/hoc"
import { useGeneralSettings } from "../../data/hooks"
import { graphql, useStaticQuery } from "gatsby"
import { getRelativeUrl } from "../../helpers/functions"
import "./styles.css"

/**
 * The Menu component.
 */
export default ({ location }) => {
  const {
    wpgraphql: { primaryMenu },
  } = useStaticQuery(graphql`
    query {
      wpgraphql {
        primaryMenu: menuItems(where: { location: PRIMARY }) {
          nodes {
            url
            label
          }
        }
      }
    }
  `)

  const { url: siteURL } = useGeneralSettings()

  return (
    primaryMenu && (
      <ul className={`navigation`}>
        {primaryMenu.nodes.map(item => {
          const { label, url } = item
          const currentPath = getRelativeUrl(url, siteURL)

          return (
            <li key={url}>
              <MaybeLink
                className={currentPath === location.pathname ? "active" : ""}
                url={url}
                label={label}
              />
            </li>
          )
        })}
      </ul>
    )
  )
}
