import React from 'react';
import { Link } from 'gatsby'
// import Navigation from './Menu'
import Logo from '../images/logo.png';
import './header.css'
import * as routes from '../constants/routes';
import AuthUserContext from './Session/AuthUserContext';
import SignOutButton from './SignOut';


const Header = ({ data }) => {
    return(
        <div>
    <header>
        <div className="container">
            <div className="logo">
                <h1 style={{ margin: 0 }}>
                    <Link to={routes.LANDING}> <img src={Logo} alt="Site Logo" /> </Link>
                </h1>
            </div>
            {/* <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
            </AuthUserContext.Consumer>    */}
            <AuthUserContext.Consumer>
            {authUser =>
                authUser 
                ? <ul className="menulist">
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        {data.allContentfulPages.edges.map(({node}) => ( 
                            <Link to={node.slug} key={Math.random()}> {node.title} </Link>
                        ))}
                    </li>
                    <li>
                        <Link to="/Contact"> Contact </Link>
                    </li>
                    <li>
                        <SignOutButton />
                    </li>
                </ul>
                : <ul className="menulist">
                    <li>
                    <Link to={routes.LANDING}>Landing</Link>
                    </li>
                </ul>
            }
            </AuthUserContext.Consumer>
  
        </div>
    </header>  
    </div>   
    );
}
// const NavigationAuth = ({ data }) => {
//   console.log('Signed In');
//   return(
//   <ul className="menulist">
//       <li>
//           <Link to="/"> Home </Link>
//       </li>
//       <li>
//           {data.allContentfulPages.edges.map(({node}) => ( 
//               <Link to={node.slug} key={Math.random()}> {node.title} </Link>
//           ))}
//       </li>
//       <li>
//           <Link to="/Contact"> Contact </Link>
//       </li>
//     <li>
//       <SignOutButton />
//     </li>
//   </ul>
//   )
// };

// const NavigationNonAuth = () => {
//   console.log('Signed Out');
//   return(
//   <ul className="menulist">
//     <li>
//       <Link to={routes.LANDING}>Landing</Link>
//     </li>
//   </ul>
//   )
// };

export default Header
