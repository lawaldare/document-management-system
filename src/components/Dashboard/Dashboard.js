import React, { Component } from 'react';
import requireAuth from '../requireAuth';

class Dashboard extends Component {
  render() {
    return (
      <div className="container" style={{ height: '86vh' }}>
        <h1>This is the Dashboard</h1>
      </div>
    );
  }
}

export default requireAuth(Dashboard);
