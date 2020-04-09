import { useStaticQuery, graphql } from "gatsby"
export const useGeneralSettings = () => {
  const { wpgraphql } = useStaticQuery(
    graphql`
      query {
        wpgraphql {
          ...GeneralSettings
        }
      }
    `
  )
  return wpgraphql.generalSettings
}
