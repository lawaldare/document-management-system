import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  state = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    role: ''
  };

  onFormChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      role: this.state.role
    };

    this.props.signup(user, () => {
      this.props.history.push('/dashboard');
    });

    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      role: ''
    });

    //console.log(user);
  };

  render() {
    return (
      <div className="row" style={{ height: '86vh' }}>
        <form className="col s12 m6 offset-m3" onSubmit={this.handleSubmit}>
          <h3>Register</h3>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="firstname"
                id="firstname"
                type="text"
                className="validate"
                autoComplete="none"
                onChange={this.onFormChange}
                value={this.state.firstname}
              />
              <label htmlFor="firstname">First Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="lastname"
                id="lastname"
                type="text"
                className="validate"
                autoComplete="none"
                onChange={this.onFormChange}
                value={this.state.lastname}
              />
              <label htmlFor="lastname">Last Name</label>
            </div>
          </div>
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
                name="username"
                id="username"
                type="text"
                className="validate"
                autoComplete="none"
                onChange={this.onFormChange}
                value={this.state.username}
              />
              <label htmlFor="username">Username</label>
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
          <div className="row">
            <div className="input-field col s12">
              <select
                name="role"
                value={this.state.role}
                onChange={this.onFormChange}>
                <option value="" disabled selected>
                  Choose your option
                </option>
                <option value={'regular'}>Regular</option>
              </select>
              <label>Select Role</label>
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
)(Signup);
