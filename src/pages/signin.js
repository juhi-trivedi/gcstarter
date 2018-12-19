import React from 'react';

import SignInForm from '../components/SignIn';
import { SignUpLink } from '../components/SignUp';
import { PasswordForgetLink } from '../components/PasswordForget';
import Layout from '../components/layout';

const SignInPage = () => (
  <Layout>
    <div className="container signinpage">
      <h1>Log In</h1>
      <SignInForm />
      <PasswordForgetLink />
      <SignUpLink />
    </div>
  </Layout>
);

export default SignInPage