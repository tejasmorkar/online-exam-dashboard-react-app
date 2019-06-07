import React, { Component } from 'react';
import './Logo.css'
import logoImg from './images/logo.png';

class Logo extends Component {
  render () {
    return (
      <div className="logo">
        <img src={logoImg} alt="logo" className="logo-img"></img>
        <span className="logo-text">eTests.com</span>
      </div>
    );
  }
}

export default Logo;
