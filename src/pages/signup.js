import React, { Component } from 'react';

import Layout from '../components/layout';
import SignUpForm from '../components/SignUp';
import { navigate } from 'gatsby';
import * as routes from '../constants/routes';
import AuthUserContext from '../components/Session/AuthUserContext';
export class SignUpPage extends Component {
  render() {
    return (
      <AuthUserContext.Consumer>
      {authUser =>
        authUser ? navigate(routes.LANDING) : <div className="container signinpage"> <h1>Sign Up</h1> <SignUpForm /> </div> 
      }
      </AuthUserContext.Consumer>
    )
  }
}

export default () => (
  <Layout>
    <SignUpPage />
  </Layout>
);