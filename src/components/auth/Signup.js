import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
  componentDidMount() {
    console.log(M);
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
      email: this.state.email,
      password: this.state.password
    };

    this.props.signup(user, () => {
      this.props.history.push('/dashboard');
    });

    this.setState({
      email: '',
      password: ''
    });

    //console.log(user);
  };

  render() {
    return (
      <div className="row" style={{ height: '86vh' }}>
        <form className="col s12 m6 offset-m3" onSubmit={this.handleSubmit}>
          <h3>Register</h3>
          <div class="row">
            <div class="input-field col s12">
              <input
                name="firstname"
                id="firstname"
                type="text"
                class="validate"
                autoComplete="none"
                onChange={this.onFormChange}
                value={this.state.email}
              />
              <label HTMLfor="email">First Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                name="lastname"
                id="lastname"
                type="text"
                class="validate"
                autoComplete="none"
                onChange={this.onFormChange}
                value={this.state.email}
              />
              <label HTMLfor="email">Last Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                name="email"
                id="email"
                type="email"
                class="validate"
                autoComplete="none"
                onChange={this.onFormChange}
                value={this.state.email}
              />
              <label HTMLfor="email">Email Address</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                name="username"
                id="username"
                type="text"
                class="validate"
                autoComplete="none"
                onChange={this.onFormChange}
                value={this.state.email}
              />
              <label HTMLfor="email">Username</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                id="password"
                type="password"
                name="password"
                class="validate"
                autoComplete="none"
                onChange={this.onFormChange}
                value={this.state.password}
              />
              <label HTMLfor="password">Password</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <select>
                <option value="" disabled selected>
                  Choose your option
                </option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="viewer">Viewer</option>
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

// const mapStateToProps = state => {
//   return { errorMsg: state.auth.errorMsg };
// };

// export default connect(
//   mapStateToProps,
//   actions
// )(Signup);

export default Signup;
