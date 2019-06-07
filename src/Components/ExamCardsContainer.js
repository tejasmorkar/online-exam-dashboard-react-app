import React, { Component } from 'react';
import './ExamCardsContainer.css';
import ExamCard from './ExamCard';
import firebase from '../firebase';

class ExamCardsContainer extends Component {  
  constructor () {
    super();
    this.state = {
      topicsList: [],
      topicsRef: firebase.database().ref('topics')
    }
  }
  
  componentDidMount () {
    return this.state.topicsRef.on('value', snap => {
      this.setState({topicsList: snap.val()})
      console.log(this.state.topicsList);
    })
  }
  
  render () {
    const {topicsList} = this.state;
    
    return (
      <div className="exam-cards-container">
        <div className="exam-cards">
        {
          Object.keys(topicsList).map((topicKey, i) => {
            return (
              <ExamCard 
                key={i}
                cardTitle={topicsList[topicKey].title}
                cardDesc={topicsList[topicKey].desc}
              />
            )
          })
        }
        </div>
      </div>
    );
  }
}

export default ExamCardsContainer;
