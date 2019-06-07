import React, { Component } from 'react';
import './SidePanel.css';
import Logo from './Logo';
import Footer from './Footer';

class SidePanel extends Component {  
  render () {
    const { page, onUserInput } = this.props;
    return (
      <div className="side-panel">
        <Logo />

        <div className="nav">
          <div 
            className={page === 'home' ? 'nav-item active' : 'nav-item'} 
            id="home" 
            onClick={onUserInput}
          >Home</div>
          <div 
            className={page === 'createTest' ? 'nav-item active' : 'nav-item'} 
            id="createTest" 
            onClick={onUserInput}
          >Create Test</div>
          <div 
            className={page === 'signIn' ? 'nav-item active' : 'nav-item'} 
            id="signIn" 
            onClick={onUserInput}
          >Sign Out</div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default SidePanel;
