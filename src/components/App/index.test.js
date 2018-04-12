import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

describe('App', () => {
  let wrapper;
  const mockGetHouses = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<App/>);
  });

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});