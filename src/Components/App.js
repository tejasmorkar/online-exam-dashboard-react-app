import React, { Component } from 'react';
import './App.css';
import SidePanel from './SidePanel';
import Dashboard from './Dashboard';
import firebase from '../firebase';

class App extends Component {
  _isMounted = false;
  constructor () {
    super();
    this.state = {
      page: 'home',
    }
  }

  componentDidMount () {
    this._isMounted = true;
  }

  handleUserInput = event => {
    if (this._isMounted){
      this.setState({ page: event.target.id })
    }
    if (event.target.id === 'signIn') {
      firebase.auth().signOut().then(function() {
        console.log('Signed Out');
      }, function(error) {
        console.error('Sign Out Error', error);
      });
    }
  }

  componentWillUnmount () {
   this._isMounted = false;
  }

  render () {
    return (
      <div className="app">
        <SidePanel page={this.state.page} onUserInput={this.handleUserInput}/>

        <Dashboard page={this.state.page}/>
      </div>
    );
  }
}

export default App;
