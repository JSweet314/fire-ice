import { housesReducer } from './housesReducer';
import * as actions from '../actions';

describe('housesReducer', () => {
  it('should return a default state', () => {
    expect(housesReducer(undefined, {})).toEqual([]);
  });

  it('should return an array of houses for action GET_HOUSES_SUCCESS', () => {
    const mockAction = actions.getHousesSuccess([{house: 'white'}]);
    expect(housesReducer(undefined, mockAction)).toEqual([{house: 'white'}]);
  });
});