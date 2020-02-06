import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({ data }) => {
  const { Name, company, location } = data.site.siteMetadata.contact;
  return (
    <Layout>
    <SEO title="Home"/>
    <h1>Contact Page</h1>
    <p>Please inquire:</p>
    <div>{company}</div>
    <p>{`${company} was started by ${Name}`}</p>
    <p>{location}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
     
    </div>
    <Link to="/">Home</Link>
  </Layout>
  )
  }

export default Contact

export const query = graphql`
query {
  site {
    siteMetadata {
      contact {
        Name
        company
        location
      }
    }
  }
}
`

