import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import * as routes from '../constants/routes';

import AuthUserContext from '../components/Session/AuthUserContext';
import withAuthentication from '../components/Session/withAuthentication';


const IndexPageBase = () => (  
  <div className="mainparent"> 
    <div className="landingpage">
      <div className="container"> 
        <h1> Welcome To<br/>Gatsby + Contentful + Firebase Demo </h1>
        <AuthUserContext.Consumer>
          {authUser => authUser ? <Link to={routes.HOME} className="signinlink">Check Out Our Blogs</Link> : <Link to={routes.SIGN_IN} className="signinlink">Sign In</Link> }
        </AuthUserContext.Consumer>
      </div>
    </div>
  </div>   
);

const IndexPage = withAuthentication(IndexPageBase);

export default () => (
  <Layout>
    <IndexPage />
  </Layout>
);