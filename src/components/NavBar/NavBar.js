import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav style={{ backgroundColor: '#36474F' }}>
        <div class="container">
          <div class="nav-wrapper">
            <Link to="/" class="brand-logo">
              dms
            </Link>
            <ul class="right hide-on-med-and-down">
              <li>
                <Link to="/signup">Register</Link>
              </li>
              <li>
                <Link to="/signin">Login</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/signout">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
