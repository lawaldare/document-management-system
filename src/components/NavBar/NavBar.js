import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav style={{ backgroundColor: '#36474F' }}>
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              dms
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/api/v1/users/signup">Register</Link>
              </li>
              <li>
                <Link to="/api/v1/users/login">Login</Link>
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
