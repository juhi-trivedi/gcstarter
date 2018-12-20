import React from 'react';
import { Link, StaticQuery } from 'gatsby';

import * as routes from '../constants/routes';
import AuthUserContext from './Session/AuthUserContext';
import SignOutButton from './SignOut';
import Logo from '../images/logo.png';
import './header.css'


const Header = ({data}) => (
  <header>
      <div className="container">
          <div className="logo">
              <h1 style={{ margin: 0 }}>
                  <Link to={routes.LANDING}> <img src={Logo} alt="Site Logo" /> </Link>
              </h1>
          </div>
          <AuthUserContext.Consumer>
          {authUser =>
              authUser ? <NavigationAuth data={data} /> : <NavigationNonAuth />
          }
          </AuthUserContext.Consumer>
      </div>
  </header>
);


const NavigationAuth = ({data}) => (
    <StaticQuery
      query={graphql`
        query pagesMenuQuery {
          allContentfulPages {
            edges {
              node {
                title
                slug
              }
            }
          }
        }   
      `}
      render={data => (
        <>
            <ul className="menulist">
                <li>
                    <Link to="/"> Home </Link>
                </li>
                {data.allContentfulPages.edges.map(({node}) => ( 
                <li>
                        <Link to={node.slug} key={Math.random()}> {node.title} </Link>
                </li>
                ))}
                <li>
                    <Link to="/Contact"> Contact </Link>
                </li>
              <li>
                  <SignOutButton />
              </li>
            </ul>
        </>
      )}
    />
  );

const NavigationNonAuth = () => (
  <ul className="menulist">
    <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={routes.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);
  

export default Header;