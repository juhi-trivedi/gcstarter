import React, { Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

class InnerPage extends Component {
    render() {
        const {
          title,
          body,
          heroImage
        } = this.props.data.contentfulPages
        return (
          <Layout>
        <div className="innerpage">
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
        </Layout>
        );
    }
}

InnerPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default InnerPage

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