import * as API from './index';
import { housesDataWrangler } from '../helpers';
import {mockHouses} from '../__mocks__/mockData';

describe('fetchHouses', () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockHouses)
  }));

  it('should call fetch with the correct params', () => {
    const expected = 'http://localhost:3001/api/v1/houses';
    API.fetchHouses();
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return an array of clean houses data', async () => {
    const expected = housesDataWrangler(mockHouses);
    await expect(API.fetchHouses()).resolves.toEqual(expected);
  });

  it('should throw an error if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      status: 500
    }));
    const expected = Error('Error getting houses, status code: 500');
    await expect(API.fetchHouses()).rejects.toEqual(expected);
  });
});