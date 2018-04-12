import {call, put, takeLatest} from 'redux-saga/effects';
import * as actions from '../actions';
import * as API from '../apiCalls';
import * as helpers from '../helpers';

export function* getMembersSaga(action) {
  try {
    const rawMembers = yield call(
      API.fetchSwornMembers, 
      action.house.swornMembers
    );
    const swornMembers = helpers.swornMembersDataWrangler(rawMembers);
    yield put(
      actions.getMembersSuccess({name: action.house.name, swornMembers})
    );
  } catch (error) {
    throw new Error(`Error getting members: ${error.message}`);
  }
}

export function* listenForGetMembers() {
  yield takeLatest('GET_MEMBERS', getMembersSaga);
}