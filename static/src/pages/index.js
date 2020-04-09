import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PostExcerpt from "../components/PostExcerpt"

export default ({ data, location }) => {
  const posts = data?.wpgraphql?.posts?.nodes
  return (
    <Layout location={location}>
      {posts ? (
        posts.map(post => <PostExcerpt {...post} key={post.title} />)
      ) : (
        <p>Sorry, no posts were found.</p>
      )}
    </Layout>
  )
}

export const query = graphql`
  query {
    wpgraphql {
      posts {
        nodes {
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
            firstName
            lastName
          }
          featuredImage {
            altText
            sourceUrl
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
