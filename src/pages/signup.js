import React from 'react';

import Layout from '../components/layout';
import SignUpForm from '../components/SignUp';

const SignUpPage = () => (
  <div className="container signinpage">
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

export default () => (
  <Layout>
    <SignUpPage />
  </Layout>
);
