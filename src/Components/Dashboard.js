import React, { Component } from 'react';
import './Dashboard.css';
import DashboardTitle from './DashboardTitle';
import DashboardContent from './DashboardContent';

class Dashboard extends Component {  
  constructor () {
    super();
    this.state = {
      page: 'home'
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.state.page) {
      this.setState({ page: nextProps.page });
    }
  }
  
  render () {
    return (
      <div className="dashboard">
        <DashboardTitle />
        <DashboardContent page={this.state.page}/>
      </div>
    );
  }
}

export default Dashboard;
