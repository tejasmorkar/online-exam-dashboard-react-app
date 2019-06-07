import React, { Component } from 'react';
import './DashboardTitle.css';

class DashboardTitle extends Component {
  render () {
    return (
        <nav className="dashboard-title">
          <div className="nav-wrapper">
            <span className="brand-logo center">DASHBOARD</span>
          </div>
        </nav>
    );
  }
}

export default DashboardTitle;
