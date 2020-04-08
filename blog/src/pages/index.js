import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { List, ListItem } from "../components/List"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <List width={[1, 2 / 3, 4 / 5]} p={2}>
      {data.allContentfulBlogPost.edges.map(edge => (
        <ListItem p={3}>
          <Link
            to={edge.node.slug}
            key={edge.node.id}
            style={{ color: "black", textDecoration: "none" }}
          >
            <h2> {edge.node.title} </h2>

            <div>
              <img src={edge.node.heroImage.fluid.src} alt="Hero" />
            </div>
          </Link>
          <div>{edge.node.body.childMarkdownRemark.excerpt}</div>
        </ListItem>
      ))}
    </List>
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
            fluid(maxWidth: 1200) {
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
