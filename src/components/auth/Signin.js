import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  state = {
    email: '',
    password: ''
  };

  onFormChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.signin(user, () => {
      this.props.history.push('/dashboard');
    });
  };

  render() {
    return (
      <div className="row" style={{ height: '86vh' }}>
        <form className="col s12 m6 offset-m3" onSubmit={this.handleSubmit}>
          <h3>Login</h3>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="email"
                id="email"
                type="email"
                className="validate"
                autoComplete="none"
                onChange={this.onFormChange}
                value={this.state.email}
              />
              <label htmlFor="email">Email Address</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                name="password"
                className="validate"
                autoComplete="none"
                onChange={this.onFormChange}
                value={this.state.password}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <button
            style={{
              width: '100%',
              display: 'block',
              backgroundColor: '#36474F'
            }}
            type="submit"
            className="btn waves-effect waves-light">
            Submit
          </button>
          <p className="flow-text center red-text">{this.props.errorMsg}</p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { errorMsg: state.auth.errorMsg };
};

export default connect(
  mapStateToProps,
  actions
)(Signin);
