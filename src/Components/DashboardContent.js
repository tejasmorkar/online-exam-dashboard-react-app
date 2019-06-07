import React, { Component } from 'react';
import './DashboardContent.css';
import ExamCardsContainer from './ExamCardsContainer';
import Analytics from './Analytics';
import CreateTest from './CreateTest';
import SignIn from './SignIn';
import Spinner from './Spinner';
import firebase from '../firebase';

class DashboardContent extends Component {  
  constructor () {
    super();
      this.state = {
        page: 'home',
        loading: true,
        isSignedIn: false
      }
    }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.state.page) {
      this.setState({ page: nextProps.page });
    }
  }

  componentDidMount () {
    this.setState({isSignedIn: this.onSignIn()})
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({loading: false, isSignedIn: true})
      } else {
        this.setState({loading: false, isSignedIn: false})
      }
    });
  }

  onSignIn = isSignedIn => {
    return isSignedIn;
  }

  render () {
    const { page, loading, isSignedIn } = this.state;
    if (loading) {
      return <Spinner />
    } else if (isSignedIn) {
        if (page === 'createTest') {
          return (
            <div className="dashboard-content">
              <CreateTest />
          </div>
          );
        } else if (page === 'home') {
          return (
            <div className="dashboard-content">
              <ExamCardsContainer />
      
              <Analytics />
            </div>
          );
        } 
      } else {
        return (
          <div className="dashboard-content">
            <SignIn onSignIn={this.onSignIn()}/>
          </div>
        );
      }
  }
}

export default DashboardContent;
