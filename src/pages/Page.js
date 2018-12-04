import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'


const PageLinks = ({ node }) => {
  return (
    <li>
      <Link to={node.slug}>{node.title}</Link>
    </li>
  )
}

const PageList = ({ data }) => {  
  return (  
    <Layout>
    <ul className="menulist">
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      {data.allContentfulPages.edges.map((edge) => <PageLinks node={edge.node} key={Math.random()} />)}
      <li>
        <Link to="/Contact/">
          Contact
        </Link>
      </li>
    </ul>
    </Layout>
  )
}

export default PageList

export const query = graphql`
  query pagelistQuery {
    allContentfulPages {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`