import * as actions from './index';

describe('getHouses', () => {
  it('should return an action of type GET_HOUSES', () => {
    const expected = { type: 'GET_HOUSES' };
    expect(actions.getHouses()).toEqual(expected);
  });
});

describe('getHousesSuccess', () => {
  it('should return an action of type GET_HOUSES_SUCCESS', () => {
    const houses = [{ house: 'white' }];
    const expected = { type: 'GET_HOUSES_SUCCESS', houses };
    expect(actions.getHousesSuccess(houses)).toEqual(expected);
  });
});

describe('captureErrorMessage', () => {
  it('should return an action of type CAPTURE_ERROR_MESSAGE', () => {
    const errorMessage = 'error';
    const expected = { type: 'CAPTURE_ERROR_MESSAGE', errorMessage };
    expect(actions.captureErrorMessage(errorMessage)).toEqual(expected);
  });
});

describe('getMembers', () => {
  it('should return an action of type GET_MEMBERS', () => {
    const expected = { type: 'GET_MEMBERS' };
    expect(actions.getMembers()).toEqual(expected);
  });
});

describe('getMembersSuccess', () => {
  it('should return an action of type GET_MEMBERS_SUCCESS', () => {
    const house = { name: 'white', members: [] };
    const expected = { type: 'GET_MEMBERS_SUCCESS', house };
    expect(actions.getMembersSuccess(house)).toEqual(expected);
  });
});

describe('addMembersDisplay', () => {
  it('should return an action of type DISPLAY_MEMBERS', () => {
    const houseName = 'white'
    const expected = { type: 'DISPLAY_MEMBERS', houseName };
    expect(actions.addMembersDisplay(houseName)).toEqual(expected);
  });
});

describe('removeMembersDisplay', () => {
  it('should return an action of type REMOVE_MEMBERS', () => {
    const houseName = 'white';
    const expected = { type: 'REMOVE_MEMBERS', houseName };
    expect(actions.removeMembersDisplay(houseName)).toEqual(expected);
  });
});