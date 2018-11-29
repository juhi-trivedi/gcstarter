import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'

const InnerPage = ({ node }) => {
  return (
    <div className="abouttext">
      <Link to={node.slug}>{node.title}</Link>
    </div>
  )
}

const PageList = ({ data }) => (
  <Layout>
    <div className="about-page">
      {data.allContentfulPages.edges.map((edge) => <InnerPage node={edge.node} key={Math.random()} />)}
    </div>
  </Layout>
)

export default PageList

export const listQuery = graphql`
  query listQuery {
    allContentfulPages {
      edges {
        node {
          title
          slug
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`