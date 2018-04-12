import { put, call, takeLatest } from 'redux-saga/effects';
import * as API from '../apiCalls';
import * as actions from '../actions';
import { housesDataWrangler } from '../helpers';

export function* getHousesSaga() {
  try {
    const rawHouses = yield call(API.fetchHouses);
    const houses = housesDataWrangler(rawHouses);
    yield put(actions.getHousesSuccess(houses));
  } catch (error) {
    yield put(actions.captureErrorMessage(error.message));
  }
}

export function* listenForGetHouses() {
  yield takeLatest('GET_HOUSES', getHousesSaga);
}