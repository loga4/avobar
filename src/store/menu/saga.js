import { call, put, takeLatest } from 'redux-saga/effects'

import * as act from './actions';
import * as api from './api';

function* fetchMenu() {
  try {
    const data = yield call(api.fetchData);

    yield put({ type:act.MENU_LOAD_SUCCESS, data });

  } catch (e) {
    yield put({ type: act.MENU_LOAD_FAILED, e});
  }
}

function* saga() {
  yield takeLatest(act.MENU_LOAD, fetchMenu);
}

export default saga;
