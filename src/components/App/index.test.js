import React from 'react';
import { shallow } from 'enzyme';
import {App} from './index';

describe('App', () => {
  let wrapper;
  const mockGetHouses = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <App
        getHouses={mockGetHouses}
        houses={[]}
      />,
      {disableLifecycleMethods: true}
    );
  });

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getHouses after mounting', () => {
    wrapper.instance().componentDidMount();
    expect(mockGetHouses).toHaveBeenCalled()
  })
});