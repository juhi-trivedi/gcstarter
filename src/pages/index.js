import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import HeadText from './headText'
import '../components/layout.css'
import { graphql } from 'gatsby'

const BlogPost = ({node}) => {
  return (
    <li>
      <img src={node.heroImage.fixed.src} alt={node.title} />
      <div className="blogtext">
        <Link to={node.slug}>{node.title}</Link>
        <p>{node.body.childMarkdownRemark.excerpt}</p>
      </div>
    </li>
  )
}

const IndexPage = ({data}) => (
  <Layout>
  <HeadText />
    <ul className="blog-post">
      {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node} key={Math.random()} />)}
    </ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog (
      filter: {
        node_locale: { eq: "en-US" }
      }
      sort: { fields: [publishDate], order: DESC }
    ) {
        edges {
          node {
            title
            slug
            body {
              childMarkdownRemark {
                excerpt
              }
            }
            heroImage {
              fixed(height: 300) {
                src
              }
            }
          }
        }
    }
  }
`