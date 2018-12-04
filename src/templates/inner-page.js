import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Header from '../pages/header';
import Helmet from 'react-helmet';

class InnerPage extends Component {
    render() {
        const {
          title,
          body,
          heroImage
        } = this.props.data.contentfulPages
        return (
        <div className="innerpage">
          <Header />
          <div className="bannerImg">
            <img src={heroImage.file.url} alt={heroImage.file.fileName} />
          </div>
          <div className="container">
            <Helmet>
              <title>{`${title}`}</title>
            </Helmet>
            <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}} />
          </div>
        </div>
        );
    }
}

export const query = graphql`
  query pagesPostQuery($slug: String!){
    contentfulPages(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
      heroImage {
        file {
          url
          fileName
          contentType
        }
      }
    }
  }
`

export default InnerPage