import React, { Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

class BlogPost extends Component {
  render() {
    const {
      title,
      body
    } = this.props.data.contentfulBlog
    return (
      <Layout>
        <Helmet title={`${title}`} />
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}} />
      </Layout>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!){
    contentfulBlog(slug: {eq: $slug}) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`