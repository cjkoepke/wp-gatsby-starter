const path = require("path")
const { createRemoteFileNode } = require("gatsby-source-filesystem")
const { slash } = require("gatsby-core-utils")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const postResult = await graphql(
    `
      query {
        wpgraphql {
          posts {
            nodes {
              id
              slug
              title
            }
          }
        }
      }
    `
  )
  if (postResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  if (postResult.data.wpgraphql.posts.nodes) {
    postResult.data.wpgraphql.posts.nodes.forEach(post => {
      createPage({
        path: `/posts/${post.slug}`,
        component: slash(path.resolve(`./src/templates/post.js`)),
        context: {
          id: post.id,
        },
      })
    })
  }

  const pageResult = await graphql(
    `
      query {
        wpgraphql {
          pages {
            nodes {
              id
              slug
              title
            }
          }
        }
      }
    `
  )
  if (pageResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  if (pageResult.data.wpgraphql.pages.nodes) {
    pageResult.data.wpgraphql.pages.nodes.forEach(page => {
      createPage({
        path: page.slug,
        component: slash(path.resolve(`./src/templates/page.js`)),
        context: {
          id: page.id,
        },
      })
    })
  }
}

/**
 * Import featured images.
 */
exports.createResolvers = async ({
  actions: { createNode },
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const field = {
    localFile: {
      type: `File`,
      resolve: async source => {
        let sourceUrl = source.url || source.mediaItemUrl || source.sourceUrl

        return await createRemoteFileNode({
          url: encodeURI(sourceUrl),
          store,
          cache,
          createNode,
          createNodeId,
          reporter,
        })
      },
    },
  }

  await createResolvers({
    WPGraphQL_Avatar: field,
    WPGraphQL_CoreImageBlockAttributes: field,
    WPGraphQL_MediaItem: field,
    WPGraphQL_CoreImageBlock: field,
    WPGraphQL_User: field,
  })
}
