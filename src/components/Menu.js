import React, { Component } from 'react';
import { Link } from 'gatsby';

class Menu extends Component {
  render() {
    return (
      <ul className="menulist">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Page/">
            Pages
          </Link>
        </li>
        <li>
          <Link to="/Contact/">
            Contact
          </Link>
        </li>
      </ul>
    )
  }
}

export default Menu
