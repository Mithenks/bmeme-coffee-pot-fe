import React from "react"
import { useAuth, AuthService } from "gatsby-theme-auth0"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => {
  const { isLoggedIn, profile } = useAuth()
  const authData = AuthService.getAccessToken()
  console.log(AuthService)
  console.log(isLoggedIn)
  console.log(profile)

  if (isLoggedIn) {
    const productsQuery = graphql`
      {
        crystallize_catalogue {
          catalogue {
            id
            children {
              id
              name
            }
          }
        }
      }
    `
    const data = useStaticQuery(productsQuery)
    console.log(data)

    return (
      <Layout>
        <SEO title="Products" />
        <p>You are logged in</p>
        <p>
          Products size():{" "}
          {data.crystallize_catalogue.catalogue.children.length}
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title="Products" />
      {isLoggedIn ? <p>You are logged in</p> : <p>You are not logged in</p>}
    </Layout>
  )
}
