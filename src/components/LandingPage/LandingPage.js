import React, { Component } from 'react';
import './main.scss';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="main-header">
        <div className="primary-overlay">
          <div class="showcase container">
            <div class="row">
              <div class="col s12 main-text">
                <h2>Make document management online a breeze</h2>
                <h3 class="flow-text">
                  With dms, creating documents becomes as easy as creating a
                  tweet. You can choose access levels for each document you
                  create
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
