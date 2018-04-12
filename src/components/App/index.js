import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './style.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import CardContainer from '../../containers/CardContainer';

const App = () => {
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Welcome to Westeros</h2>
      </div>
      <div className='Display-info'>
        <CardContainer />
      </div>
    </div>
  );
}

export default App;
