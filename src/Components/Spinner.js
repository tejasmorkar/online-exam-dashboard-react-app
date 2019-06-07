import React, { Component } from 'react';
import './Spinner.css';

class Spinner extends Component {
  render () {
    return (
      <div className="spinner">
        <div className="loader">Loading your Dashboard...</div>
        <span className="loading-text">Loading your Dashboard...</span>
      </div>
    );
  }
}

export default Spinner;
