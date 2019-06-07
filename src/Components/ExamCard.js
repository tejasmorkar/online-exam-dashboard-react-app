import React, { Component } from 'react';
import './ExamCard.css';

class ExamCard extends Component {
  render () {
    return (
      <div className="carousel-item card exam-card">
        <div className="card-title">{this.props.cardTitle}</div>
        <p>
            {this.props.cardDesc}
        </p>
      </div>
    );
  }
}

export default ExamCard;
