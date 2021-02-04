import { fork, all } from 'redux-saga/effects';

import menuSaga from './menu/saga';

export default function* rootSaga() {
  yield all([
    fork(menuSaga)
  ]);
}
