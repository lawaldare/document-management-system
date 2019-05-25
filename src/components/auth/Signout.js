import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
  }
  render() {
    return (
      <div className="container" style={{ height: '86vh' }}>
        <h3>Have a nice day, hope to see you soon, drunk!</h3>;
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Signout);
