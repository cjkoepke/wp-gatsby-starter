import React from "react"
import Image from "gatsby-image"
import "./styles.css"

export default ({
  alt,
  sizeSlug,
  caption,
  align = "left",
  localFile: {
    publicURL,
    childImageSharp: { fluid },
  },
}) => {
  return (
    <figure className={`image image--align-${align}`}>
      {"small" === sizeSlug || "medium" === sizeSlug ? (
        <img className={`image__media`} src={publicURL} alt={alt} />
      ) : (
        <Image className={`image__media`} fluid={fluid} alt={alt} />
      )}
      {caption && <caption className={"image__caption"}>{caption}</caption>}
    </figure>
  )
}
