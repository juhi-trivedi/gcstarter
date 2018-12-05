import React from 'react';
import { Link } from 'gatsby';

const Menu = ({ data }) => (
    <ul className="menulist">
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
    </ul>
)

export default Menu;