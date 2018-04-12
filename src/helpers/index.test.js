import * as helpers from './index';
import * as mockData from '../__mocks__/mockData';

describe('houseDataWrangler', () => {
  it('should return an array of objects', () => {
    const expected = mockData.mockCleanHouses;
    expect(helpers.housesDataWrangler(mockData.mockHouses))
      .toEqual(expected);
  });
});

describe('swornMembersDataWrangler', () => {
  it('should return an array of objects', () => {
    const expected = [mockData.mockCleanCharacter];
    expect(helpers.swornMembersDataWrangler([mockData.mockCharacter]))
      .toEqual(expected);
  });
});