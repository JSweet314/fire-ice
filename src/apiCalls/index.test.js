import * as API from './index';
import * as mockData from '../__mocks__/mockData';

describe('fetchHouses', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockData.mockHouses)
    }));
  });

  it('should call fetch with the correct params', () => {
    const expected = 'http://localhost:3001/api/v1/houses';
    API.fetchHouses();
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return an array of clean houses data', async () => {
    await expect(API.fetchHouses()).resolves.toEqual(mockData.mockHouses);
  });

  it('should throw an error if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      status: 500
    }));
    const expected = Error(
      'Error fetching houses: Bad response, status code - 500'
    );
    await expect(API.fetchHouses()).rejects.toEqual(expected);
  });
});

describe('fetchSwornMembers', () => {
  let charIdArray;
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockData.mockCharacter)
    }));
  
    charIdArray = [1];
  });

  it('should call fetch with the right parameters for each char Id', () => {
    const expected = 'http://localhost:3001/api/v1/character/1';
    API.fetchSwornMembers(charIdArray);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return an array of objects', async () => {
    await expect(API.fetchSwornMembers(charIdArray))
      .resolves.toEqual([mockData.mockCharacter]);
  });

  it('should return an error if appropriate', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      status: 500
    }));
    const expected = Error(
      'Error fetching members: Bad response, status code - 500'
    );
    await expect(API.fetchSwornMembers(charIdArray)).rejects.toEqual(expected);
  });
});