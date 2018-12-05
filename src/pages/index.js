import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import HeadText from '../components/headText';
import '../components/layout.css';
import '../components/header.css';


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
  <div className="mainparent"> 
    <Layout>
      <div className="container">
      <HeadText />
      <ul className="blog-post">
        {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node} key={Math.random()} />)}
      </ul>
      </div>
    </Layout>
    </div>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog(filter: {node_locale: {eq: "en-US"}}, sort: {fields: [publishDate], order: DESC}) {
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