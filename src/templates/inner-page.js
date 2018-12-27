import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import withAuthorization from '../components/Session/withAuthorization'

const InnerPageContent = ({ data }) => (
  <div className="innerpage">
    <div className="bannerImg">
      <img
        src={data.contentfulPages.heroImage.file.url}
        alt={data.contentfulPages.heroImage.file.fileName}
      />
    </div>
    <div className="container">
      <Helmet>
        <title>{`${data.contentfulPages.title}`}</title>
      </Helmet>
      <div
        dangerouslySetInnerHTML={{
          __html: data.contentfulPages.body.childMarkdownRemark.html,
        }}
      />
    </div>
  </div>
)

class InnerContentPage extends Component {
  render() {
    return (
      <React.Fragment>
        <InnerPageContent data={this.props.data} />
      </React.Fragment>
    )
  }
}

const authCondition = authUser => !!authUser

const NewContentFulPage = withAuthorization(authCondition)(InnerContentPage)
class InnerPage extends Component {
  render() {
    return (
      <Layout>
        <NewContentFulPage data={this.props.data} />
      </Layout>
    )
  }
}

InnerPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default InnerPage

export const query = graphql`
  query pagesPostQuery($slug: String!) {
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
