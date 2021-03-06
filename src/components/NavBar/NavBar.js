import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/api/v1/users/logout">Logout</Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/api/v1/users/signup">Register</Link>
          </li>
          <li>
            <Link to="/api/v1/users/login">Login</Link>
          </li>
        </ul>
      );
    }
  }
  render() {
    return (
      <nav style={{ backgroundColor: '#36474F' }}>
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              d m s
            </Link>
            {this.renderLinks()}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return { authenticated: state.auth.authenticated };
};
export default connect(mapStateToProps)(NavBar);
