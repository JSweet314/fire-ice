import {put, call, takeLatest} from 'redux-saga/effects';
import * as API from '../apiCalls';
import * as actions from '../actions';

export function* getHousesSaga() {
  try {
    const response = yield call(API.fetchHouses);
    yield put(actions.getHousesSuccess(response));
  } catch (error) {
    yield put(actions.getHousesFailure(error.message));
  }
}

export function* listenForGetHouses() {
  yield takeLatest('GET_HOUSES', getHousesSaga);
}