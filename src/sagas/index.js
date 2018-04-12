import {all} from 'redux-saga/effects';
import {listenForGetHouses} from './getHousesSaga';

export default function* rootSaga() {
  yield all([
    listenForGetHouses()
  ]);
}