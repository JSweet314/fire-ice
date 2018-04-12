import { all } from 'redux-saga/effects';
import { listenForGetHouses } from './getHousesSaga';
import { listenForGetMembers } from './getMembersSaga';

export default function* rootSaga() {
  yield all([
    listenForGetHouses(),
    listenForGetMembers()
  ]);
}