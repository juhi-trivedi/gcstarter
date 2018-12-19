import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby'
import Layout from '../components/layout';
import '../components/layout.css';
import '../components/header.css';

import * as routes from '../constants/routes';
import AuthUserContext from '../components/Session/AuthUserContext';


const BlogPost = ({ node }) => {
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

const BlogData = () => (
  <StaticQuery
    query={graphql`
      query pagesQuery {
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
    `}
    render={data => (
      <>
        <ul className="blog-post">
          {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node} key={Math.random()} />)}
        </ul>
      </>
    )}
  />
)


const IndexPage = () => (
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <LoggedIn /> : <LoggedOut />
      }
    </AuthUserContext.Consumer>
  );

const LoggedIn = ({ data }) => (
  <div className="mainparent"> 
    <div className="container">
      <BlogData />
    </div>
  </div>
);


const LoggedOut = () => {
  return (
  <div className="mainparent"> 
    <Layout>
      <div className="landingpage">
        <div className="container">
          <h1> Welcome To<br/>Gatsby + Contentful + Firebase Demo </h1>
          <Link to={routes.SIGN_IN} className="signinlink">Sign In</Link>
        </div>
      </div>
    </Layout>
    </div>
  )
};

export default IndexPage