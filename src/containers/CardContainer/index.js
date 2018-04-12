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

  handleOnClick = house => {
    this.props.getMembers(house);
  }

  cardGenerator = () => this.props.houses.map((house, index) => 
    <Card {...house} key={index} handleOnClick={this.handleOnClick}/>
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
  getMembers: PropTypes.func.isRequired,
  houses: PropTypes.array.isRequired
};

export const mapStateToProps = ({ houses }) => ({
  houses
});

export const mapDispatchToProps = dispatch => ({
  getHouses: () => dispatch(actions.getHouses()),
  getMembers: membersArray => dispatch(actions.getMembers(membersArray))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);