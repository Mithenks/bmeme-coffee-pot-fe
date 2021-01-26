import React from "react"
import { AuthService, useAuth } from "gatsby-theme-auth0"

export default () => {
  const { isLoggedIn, profile } = useAuth()
  return (
    <div>
      {(profile && <p>Hello {profile.name}</p>) || (
        <p>To start using our services, you need to log in.</p>
      )}
      {isLoggedIn ? (
        <button onClick={AuthService.logout}>Logout</button>
      ) : (
        <button onClick={AuthService.login}>Login</button>
      )}
    </div>
  )
}
