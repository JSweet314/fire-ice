import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';
import { housesDataWrangler } from '../../helpers';
import { mockHouses } from '../../__mocks__/mockData';

describe('Card', () => {
  const mockHouse = housesDataWrangler(mockHouses)[0];
  it('should match a snapshot', () => {
    const wrapper = shallow(<Card {...mockHouse} />);
    expect(wrapper).toMatchSnapshot();
  });
});