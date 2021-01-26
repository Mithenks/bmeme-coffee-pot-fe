import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Login from "../components/login"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ color: `#ec1c3d` }}>Bella pisè</h1>
    <p>
      This is Bmeme Coffee Pot, an advanced application that will fit all your
      needs!
    </p>
    <Login>Log in</Login>
    <div
      style={{ maxWidth: `300px`, marginTop: `5em`, marginBottom: `1.45rem` }}
    >
      <Image />
    </div>
  </Layout>
)

export default IndexPage
