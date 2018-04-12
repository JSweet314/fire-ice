import {memberDisplayReducer} from './memberDisplayReducer';
import * as actions from '../actions';

describe('memberDisplayReducer', () => {
  it('should return a default state', () => {
    expect(memberDisplayReducer(undefined, {})).toEqual({});
  });
  
  it('should be able to DISPLAY_MEMBERS', () => {
    const mockAction = actions.addMembersDisplay('white');
    expect(memberDisplayReducer(undefined, mockAction)).toEqual({white: true});
  });

  it('should be able to DISPLAY_MEMBERS', () => {
    const mockAction = actions.removeMembersDisplay('white');
    expect(memberDisplayReducer(undefined, mockAction)).toEqual({white: false});
  });
});