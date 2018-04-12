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
    const { memberDisplay } = this.props;
    if (Object.keys(memberDisplay).includes(house.name)) {
      if(memberDisplay[house.name]) {
        this.props.removeMembersDisplay(house.name);
      } else {
        this.props.addMembersDisplay(house.name);
      }
    } else {
      this.props.getMembers(house);
    }
  }

  cardGenerator = () => this.props.houses.map((house, index) => {
    const { memberDisplay } = this.props;
    const display = memberDisplay[house.name] ? 'initial' : 'none';
    return <Card 
      {...house} 
      key={index} 
      display={display}
      handleOnClick={this.handleOnClick}/>;
  })

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
  houses: PropTypes.array.isRequired,
  memberDisplay: PropTypes.object.isRequired,
  removeMembersDisplay: PropTypes.func.isRequired,
  addMembersDisplay: PropTypes.func.isRequired
};

export const mapStateToProps = ({ houses, memberDisplay }) => ({
  houses,
  memberDisplay
});

export const mapDispatchToProps = dispatch => ({
  getHouses: () => 
    dispatch(actions.getHouses()),
  getMembers: membersArray => 
    dispatch(actions.getMembers(membersArray)),
  removeMembersDisplay: houseName => 
    dispatch(actions.removeMembersDisplay(houseName)),
  addMembersDisplay: houseName =>
    dispatch(actions.addMembersDisplay(houseName))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);