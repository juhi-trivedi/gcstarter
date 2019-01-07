import React, { Component, Fragment } from 'react'

import Layout from '../components/layout'
import SignUpForm from '../components/SignUp'
import { navigate } from 'gatsby'
import * as routes from '../constants/routes'
import { connect } from 'react-redux'
import cookie from 'react-cookies'

class SignUpPage extends Component {
  constructor() {
    super()
    this.state = {
      route: '',
    }
  }
  componentDidMount() {
    const saveData = cookie.load('authUser')
    if (saveData) {
      this.setState({ route:'' })
    } else {
      this.setState({ route: navigate('/') })
    }
  }
  render() {
    const { users } = this.props;
    const saveData = cookie.load('authUser')
    return (
      <Fragment>
        {saveData? (
          navigate(routes.LANDING)
        ) : (
          <Layout>
            <div className="container signinpage">
              {' '}
              <h1>Sign Up</h1> <SignUpForm />{' '}
            </div>
          </Layout>
        )}
      </Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    users: state,
  }
}
const Page = connect(mapStateToProps)(SignUpPage)
export default () => <Page />
