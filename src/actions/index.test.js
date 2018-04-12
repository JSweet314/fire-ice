import * as actions from './index';

describe('getHouses', () => {
  it('should return an action of type GET_HOUSES', () => {
    const expected = {type: 'GET_HOUSES'};
    expect(actions.getHouses()).toEqual(expected);
  });
});

describe('getHousesSuccess', () => {
  it('should return an action of type GET_HOUSES_SUCCESS', () => {
    const houses = [{house: 'white'}];
    const expected = {type: 'GET_HOUSES_SUCCESS', houses };
    expect(actions.getHousesSuccess(houses)).toEqual(expected);
  });
});

describe('captureErrorMessage', () => {
  it('should return an action of type CAPTURE_ERROR_MESSAGE', () => {
    const errorMessage = 'error'
    const expected = {type: 'CAPTURE_ERROR_MESSAGE', errorMessage };
    expect(actions.captureErrorMessage(errorMessage)).toEqual(expected);
  });
});