import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="404" description="Error Page" />
      <main className="error-page">
        <div className="error-container">
          <h3>Sorry, What you're looking for doesn't exist!</h3>
          <Link to="/" className="btn">
            Back to Home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
