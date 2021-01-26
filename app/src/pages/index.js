import React from "react"

import { useAuth } from "gatsby-theme-auth0"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Login from "../components/login"
import { Link } from "gatsby"

const IndexPage = () => {
  const { isLoggedIn } = useAuth()

  return (
    <Layout>
      <SEO title="Home" />
      <h1 style={{ color: `#ec1c3d` }}>Bella pisè</h1>
      <p>
        This is Bmeme Coffee Pot, an advanced application that will fit all your
        needs!
      </p>
      <Login>Log in</Login>
      <br />
      {isLoggedIn ? <Link to="/products">Go to products</Link> : ""}
      <div
        style={{ maxWidth: `300px`, marginTop: `5em`, marginBottom: `1.45rem` }}
      >
        <Image />
      </div>
    </Layout>
  )
}

export default IndexPage
