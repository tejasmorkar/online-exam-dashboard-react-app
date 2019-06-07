import React, { Component } from 'react';
import './AnalyticsCardsContainer.css';
import AnalyticsGraphCard from './AnalyticsGraphCard';
import AnalyticsTableCard from './AnalyticsTableCard';

class AnalyticsCardsContainer extends Component {
  render () {
    return (
      <div className="analytics-cards-container">
        <AnalyticsGraphCard />
        <AnalyticsTableCard />
      </div>
    );
  }
}

export default AnalyticsCardsContainer;
