import React from 'react';
import { Link } from 'gatsby'
import Menu from './Menu'
import Logo from '../images/logo.png';
import './header.css'

const Header = ({ data }) => (    
    <header>
        <div className="container">
            <div className="logo">
                <h1 style={{ margin: 0 }}>
                    <Link to="/"> <img src={Logo} alt="Site Logo" /> </Link>
                </h1>
            </div>
            <Menu data={data} />   
        </div>
    </header>     
)

export default Header;
