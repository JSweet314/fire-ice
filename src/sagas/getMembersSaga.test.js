import {listenForGetMembers, getMembersSaga} from './getMembersSaga';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as API from '../apiCalls';
import * as actions from '../actions';

describe('listenForGetMembers', () => {
  let generator;
  beforeAll(() => {
    generator = listenForGetMembers();
  });
  it('should listen for GET_HOUSES actions', () => {
    const expected = takeLatest('GET_MEMBERS', getMembersSaga);
    expect(generator.next().value).toEqual(expected);
  });

  it('should be done', () => {
    expect(generator.next().done).toBe(true);
  });
});

describe('getMembersSaga', () => {
  let generator;
  beforeAll(() => {
    generator = getMembersSaga({house: {name: 'white', swornMembers: []}});
  });

  it('should call the api', () => {
    const expected = call(API.fetchSwornMembers, []);
    expect(generator.next().value).toEqual(expected);
  });

  it('should put action creator captureHouses on the stack', () => {
    const expected = put(
      actions.getMembersSuccess({name: 'white', swornMembers: []})
    );
    expect(generator.next([]).value).toEqual(expected);
  });

  it('should put addMembersDisplay on the stack', () => {
    const expected = put(actions.addMembersDisplay('white'));
    expect(generator.next().value).toEqual(expected);
  });

  it('should be done', () => {
    expect(generator.next().done).toBe(true);
  });

  it('should throw an error if appropriate', () => {
    const generator = getMembersSaga(
      { house: { name: 'white', swornMembers: [] } }
    );
    generator.next();
    const expected = put(actions.captureErrorMessage('error message'));
    expect(generator.throw(new Error('error message')).value).toEqual(expected);
  });
});