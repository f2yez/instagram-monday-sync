import { all } from 'redux-saga/effects';

import { watchCommon } from './common';

export default function* rootSaga() {
  yield all([
    watchCommon(),
  ]);
}
