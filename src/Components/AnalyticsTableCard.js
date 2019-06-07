import React, { Component } from 'react';
import './AnalyticsTableCard.css';

class AnalyticsTableCard extends Component {
  render () {
    return (
      <div className="card analytics-table-card">
        <table className="highlight responsive-table">
          <thead>
            <tr>
                <th>Topic</th>
                <th>Score</th>
                <th>Passed/Failed</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Data Structures</td>
              <td>5/15</td>
              <td>Failed</td>
            </tr>
            <tr>
              <td>Web Development</td>
              <td>10/15</td>
              <td>Passed</td>
            </tr>
            <tr>
              <td>C++</td>
              <td>12/15</td>
              <td>Passed</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AnalyticsTableCard;
