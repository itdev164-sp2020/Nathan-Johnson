import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from '../images/gatsby.jpg'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"
    
    />
    <h1>Theoretical Space Blog</h1>
    <p>Welcome to my blog of space theories</p>
   
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={Image} alt='gatsby' />
    </div>
    <Link to="/page-2/"> Page-2 </Link>
    <Link to="/about/"> about </Link>
    <Link to="/contact/"> contact </Link>

    </Layout>
)

export default IndexPage
