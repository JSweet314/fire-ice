import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Card from '../../components/Card';
import * as actions from '../../actions';
import wolfGif from './wolf.gif';

export class CardContainer extends Component {
  componentDidMount = () => {
    this.props.getHouses();
  }

  cardGenerator = () => this.props.houses.map((house, index) => 
    <Card {...house} key={index}/>
  )

  render = () => {
    return (
      <div className='Container'>
        {
          this.props.houses.length ? this.cardGenerator() : 
            <img id='wolf' src={wolfGif} alt='direwolf'/>
        }
      </div>
    );
  }
}

CardContainer.propTypes = {
  getHouses: PropTypes.func.isRequired,
  houses: PropTypes.object.isRequired
};

export const mapStateToProps = ({ houses }) => ({
  houses
});

export const mapDispatchToProps = dispatch => ({
  getHouses: () => dispatch(actions.getHouses())
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);