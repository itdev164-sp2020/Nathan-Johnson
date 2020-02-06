import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data }) => {
  const { Name, company } = data.site.siteMetadata.contact;
  return (
    <Layout>
    <SEO title="Home"/>
    <h1>About Space</h1>
    <p>{`${company} was started by ${Name}`}</p>
    <p>{`${company} is awesome`}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
     
    </div>
    <Link to="/">Back Home</Link>
  </Layout>
  )
  }

export default About

export const query = graphql`
query {
  site {
    siteMetadata {
      contact {
        Name
        company
      }
    }
  }
}
`
