import {listenForGetHouses, getHousesSaga} from './getHousesSaga';
import {call, put, takeLatest} from 'redux-saga/effects';
import * as API from '../apiCalls';
import * as actions from '../actions';

describe('listenForGetHouses', () => {
  let generator;
  beforeAll(() => {
    generator = listenForGetHouses();
  });
  it('should listen for GET_HOUSES actions', () => {
    const expected = takeLatest('GET_HOUSES', getHousesSaga);
    expect(generator.next().value).toEqual(expected);
  });

  it('should be done', () => {
    expect(generator.next().done).toBe(true);
  });
});

describe('getHousesSaga', () => {
  let generator;
  beforeAll(() => {
    generator = getHousesSaga();
  });

  it('should call the api', () => {
    const expected = call(API.fetchHouses);
    expect(generator.next().value).toEqual(expected);
  });

  it('should put action creator captureHouses on the stack', () => {
    const expected = put(actions.getHousesSuccess([]));
    expect(generator.next([]).value).toEqual(expected);
  });

  it('should be done', () => {
    expect(generator.next().done).toBe(true);
  });

  it('should throw an error if appropriate', () => {
    const generator = getHousesSaga();
    generator.next();
    const expected = put(actions.getHousesFailure('error message'));
    expect(generator.throw(new Error('error message')).value).toEqual(expected);
  });
});