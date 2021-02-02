import React from "react"
import { useAuth, AuthService } from "gatsby-theme-auth0"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UserProfile from "../components/UserProfile"
import OrderList from "../components/OrderList"
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql,
} from "@apollo/client"

const apolloClient = new ApolloClient({
  uri: "https://hasura-bmeme.herokuapp.com/v1/graphql",
  cache: new InMemoryCache(),
})

const ORDERS_QUERY = gql`
  {
    orders_data {
      user_id
      order_id
      crystallize_orders {
        id
        customer {
          identifier
          addresses {
            email
          }
          firstName
          lastName
        }
      }
    }
  }
`

export default () => {
  const { profile } = useAuth()

  const { loading, error, data } = useQuery(ORDERS_QUERY, {
    context: {
      headers: { Authorization: "Bearer " + AuthService.getIdToken() },
    },
  })

  return (
    <>
      <Layout>
        <SEO title="Orders 2" />
        <UserProfile profile={profile} />
        <ApolloProvider client={apolloClient}>
          {loading && <p>Loading...</p>}
          {error && <p>Error: ${error.message}</p>}
          {data && (
            <>
              <OrderList orders={data.orders_data} />
            </>
          )}
        </ApolloProvider>
      </Layout>
    </>
  )
}
