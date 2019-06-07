import React, { Component } from 'react';
import './Analytics.css';
import AnalyticsCardsContainer from './AnalyticsCardsContainer';

class Analytics extends Component {
  render () {
    return (
      <div className="analytics">
        <AnalyticsCardsContainer />
      </div>
    );
  }
}

export default Analytics;
