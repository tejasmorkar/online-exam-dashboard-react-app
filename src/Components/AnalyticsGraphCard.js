import React, { Component } from 'react';
import './AnalyticsGraphCard.css';
import Chart from 'chart.js';

class AnalyticsGraphCard extends Component {
  componentDidMount () {
    var ctx = document.getElementById('myChart').getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ['Data Structures', 'Web Development', 'C++'],
				datasets: [{
					label: 'Your Marks',
					data: [5, 10, 12],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
					],
					borderWidth: 1
				},
				{
					label: 'Topper\'s Marks',
					data: [14, 15, 13],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
					],
					borderWidth: 1
				},
				{
					label: 'Overall Average Marks',
					data: [10, 9, 10],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				}
			}
		});
  }
  
  render () {    
    return (
      <div className="card analytics-graph-card">
        <canvas id="myChart" width="auto" height="auto"></canvas>
      </div>
    );
  }
}

export default AnalyticsGraphCard;
