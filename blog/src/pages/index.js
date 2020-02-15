import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"





const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home"/>
    
    <ul>
    {
      data.allContentfulBlogPost.edges.map(edge => (
        <div>
          <Link to={edge.node.slug} key={edge.node.id} style={{color: "black", textDecoration: "none"}}>
<h2> {edge.node.title}  </h2>
         
        <div></div>
          <img src={edge.node.heroImage.fluid.src} alt='Hero'/>
          </Link>
         <p>{edge.node.body.childMarkdownRemark.excerpt}
         </p> 
        </div>

      ))
        }
    </ul>

    </Layout>
)

export default IndexPage

export const query = graphql`
{
  allContentfulBlogPost {
    edges {
      node {
        slug
        title
        id
        heroImage {
          fluid(maxWidth: 600) {
            src
          }
        }
        body {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
  }
}
`