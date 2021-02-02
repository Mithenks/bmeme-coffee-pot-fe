import React from "react"
import { useAuth, AuthService } from "gatsby-theme-auth0"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import UserProfile from "../components/UserProfile"
import ProductList from "../components/ProductList"

export default () => {
  const { isLoggedIn, profile } = useAuth()

  const productsQuery = graphql`
    query MyQuery($language: String = "en") {
      crystallize_catalogue {
        catalogue(language: $language) {
          name
          id
          children {
            id
            name
            type
            components {
              name
              content {
                ... on CRYSTALLIZE_CATALOGUE_RichTextContent {
                  __typename
                  html
                  plainText
                  json
                }
              }
            }
            language
          }
        }
      }
    }
  `
  const data = useStaticQuery(productsQuery)

  return (
    <Layout>
      <SEO title="Products" />
      {isLoggedIn && <UserProfile profile={profile} />}
      <ProductList products={data.crystallize_catalogue.catalogue} />
    </Layout>
  )
}
