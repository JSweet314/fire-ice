import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from '../../components/Card';

export class CardContainer extends Component {
  componentDidMount = () => {
    this.props.getHouses();
  }

  cardGenerator = () => this.props.houses.map(house => 
    <Card {...house} key={house.title}/>
  )

  render = () => {
    return (
      <div className='Container'>
        {this.cardGenerator()}
      </div>
    );
  }
}

export const mapStateToProps = ({ houses }) => ({
  houses
});

export const mapDispatchToProps = dispatch => ({
  getHouses: () => dispatch(actions.getHouses())
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);