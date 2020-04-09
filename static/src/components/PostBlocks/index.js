import React from "react"
import Image from "gatsby-image"
import BlockParagraph from "../Paragraph"
import BlockHeading from "../Heading"
import BlockImage from "../Image"
import BlockCode from "../Code"
import BlockList from "../List"
import BlockBlockquote from "../Blockquote"
import BlockButton from "../Button"
import "./styles.css"

export default ({ blocks, featuredImage }) => {
  const topImage = featuredImage?.localFile?.childImageSharp?.fluid
  const blockMap = {
    "core/paragraph": BlockParagraph,
    "core/heading": BlockHeading,
    "core/image": BlockImage,
    "core/code": BlockCode,
    "core/list": BlockList,
    "core/quote": BlockBlockquote,
    "core/button": BlockButton,
  }

  return (
    <>
      {topImage && (
        <div className="post__featured-img">
          <Image fluid={topImage} />
        </div>
      )}
      <div className={`post__blocks`}>
        {blocks &&
          blocks.map((data, index) => {
            const Component = blockMap[data.name] || false

            if (!Component) {
              return null
            }

            return (
              <Component key={`${data.name}-${index}`} {...data.attributes} />
            )
          })}
      </div>
    </>
  )
}
