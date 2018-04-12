import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
class App extends Component {

  componentDidMount() {
    this.props.getHouses();
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {}}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  getHouses: PropTypes.func.isRequired
};

const mapStateToProps = ({ houses }) => ({
  houses 
});

const mapDispatchToProps = dispatch => ({ 
  getHouses: () => dispatch(actions.getHouses())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
