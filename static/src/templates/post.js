import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { useGeneralSettings } from "../data/hooks"
import Parse from "react-html-parser"
import Layout from "../components/Layout"
import PostBlocks from "../components/PostBlocks"
import PostHeader from "../components/PostHeader"

export default ({
  location,
  data: {
    wpgraphql: { post },
  },
}) => {
  const generalSettings = useGeneralSettings()

  return (
    <Layout location={location}>
      <Helmet titleTemplate={`%s | ${generalSettings.title}`}>
        <title>{Parse(post.title)}</title>
        {post?.featuredImage && (
          <meta property="og:image" content={post?.featuredImage?.src} />
        )}
      </Helmet>
      <article className="post">
        <PostHeader {...post} />
        <PostBlocks {...post} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query Post($id: ID!) {
    wpgraphql {
      post(id: $id) {
        blocks {
          ...AllBlocks
        }
        date
        excerpt
        title
        slug
        postId
        author {
          avatar {
            url
            localFile {
              childImageSharp {
                fixed(width: 40) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
          description
          nickname
          firstName
          lastName
          username
        }
        featuredImage {
          altText
          sourceUrl
          localFile {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
