import {listenForGetHouses, getHousesSaga} from './getHousesSaga';
import {call, put, takeLatest} from 'redux-saga/effects';

describe('listenForGetHouses', () => {
  let generator;
  beforeAll(() => {
    generator = listenForGetHouses();
  });
  it('should listen for GET_HOUSES actions', () => {
    const expected = takeLatest('GET_HOUSES', getHousesSaga);
    expect(generator.next().value).toEqual(expected);
  });
});