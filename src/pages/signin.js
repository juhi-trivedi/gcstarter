import React, { Component } from 'react';

import SignInForm from '../components/SignIn';
import { SignUpLink } from '../components/SignUp';
import { PasswordForgetLink } from '../components/PasswordForget';
import Layout from '../components/layout';
import AuthUserContext from '../components/Session/AuthUserContext';

import { navigate } from 'gatsby';
import * as routes from '../constants/routes';

export class SignInPage extends Component {
  render() {
    return (
      <AuthUserContext.Consumer>
      {authUser =>
        authUser ? navigate(routes.LANDING) : <div className="container signinpage"> <h1>Log In</h1> <SignInForm /> <PasswordForgetLink /> <SignUpLink /> </div> 
      }
      </AuthUserContext.Consumer>
    )
  }
}

export default () => (
  <Layout>
    <SignInPage />
  </Layout>
);