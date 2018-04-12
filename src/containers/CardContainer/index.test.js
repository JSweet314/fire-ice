import React from 'react';
import { shallow } from 'enzyme';
import {CardContainer, mapDispatchToProps, mapStateToProps} from './index';
import * as actions from '../../actions';
import * as mockData from '../../__mocks__/mockData';
import * as helpers from '../../helpers';

describe('CardContainer', () => {
  let wrapper;
  const mockGetHouses = jest.fn();
  const mockGetMembers = jest.fn();
  const mockRemoveMembersDisplay = jest.fn();
  const mockAddMembersDisplay = jest.fn();
  const mockCardGenerator = jest.fn();
  const mockHouses = helpers.housesDataWrangler(mockData.mockHouses);
  beforeEach(() => {
    wrapper = shallow(
      <CardContainer 
        getHouses={mockGetHouses}
        getMembers={mockGetMembers}
        houses={mockHouses}
        memberDisplay={{white: true}}
        removeMembersDisplay={mockRemoveMembersDisplay}
        addMembersDisplay={mockAddMembersDisplay}/>
    );
  });

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should get houses after component mounts', () => {
    expect(mockGetHouses).toHaveBeenCalled();
  });

  it('should be able to remove a house from members display', () => {
    wrapper.instance().handleOnClick({name: 'white', members: []});
    expect(mockRemoveMembersDisplay).toHaveBeenCalled();
  });

  it('should be able to add a house to members display', () => {
    wrapper = shallow(
      <CardContainer
        getHouses={mockGetHouses}
        getMembers={mockGetMembers}
        houses={[]}
        memberDisplay={{ white: false }}
        removeMembersDisplay={mockRemoveMembersDisplay}
        addMembersDisplay={mockAddMembersDisplay} />
    );
    wrapper.instance().handleOnClick({ name: 'white', members: [] });
    expect(mockAddMembersDisplay).toHaveBeenCalled();
  });
  
  it('should be able to get members data', () => {
    wrapper = shallow(
      <CardContainer
        getHouses={mockGetHouses}
        getMembers={mockGetMembers}
        houses={[]}
        memberDisplay={{ black: true }}
        removeMembersDisplay={mockRemoveMembersDisplay}
        addMembersDisplay={mockAddMembersDisplay} />
    );
    wrapper.instance().handleOnClick({ name: 'white', members: [] });
    expect(mockGetMembers).toHaveBeenCalled();
  });

  describe('mapStateToProps', () => {
    it('should return an object of state data', () => {
      const mockState = {houses: [], memberDisplay: {}};
      expect(mapStateToProps(mockState)).toEqual(mockState);
    });
  });

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    it('should call dispatch with getHouses action creator', () => {
      mapped.getHouses();
      expect(mockDispatch).toHaveBeenCalledWith(actions.getHouses());
    });
    
    it('should call dispatch with getMembers action creator', () => {
      mapped.getMembers([]);
      expect(mockDispatch).toHaveBeenCalledWith(actions.getMembers([]));
    });
    
    it('should call dispatch with removeMembersDisplay action creator', () => {
      mapped.removeMembersDisplay('white');
      expect(mockDispatch)
        .toHaveBeenCalledWith(actions.removeMembersDisplay('white'));
    });

    it('should call dispatch with addMembersDisplay action creator', () => {
      mapped.addMembersDisplay('white');
      expect(mockDispatch)
        .toHaveBeenCalledWith(actions.addMembersDisplay('white'));
    });
  });
});