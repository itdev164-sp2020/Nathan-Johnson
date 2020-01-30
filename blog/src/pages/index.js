import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from '../images/gatsby.jpg'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"
    
    />
    <h1>NATE'S BLOG</h1>
    <p>Welcome my rad new site</p>
   
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={Image} alt='gatsby' />
    </div>
    <Link to="/page-2/">-></Link>
    <Link to="/about/">about</Link>
    <Link to="/contact/">contact</Link>

    </Layout>
)

export default IndexPage
