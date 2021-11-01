import { all, fork, takeLatest, call } from '@redux-saga/core/effects';
import { loginService } from '../../services/loginPageService';
import { LOGIN } from './constants';

function* loginWorker() {
  const data = yield call(loginService);
  console.log(data);
}

function* loginWatcher() {
  yield takeLatest(LOGIN, loginWorker);
}

export default function* loginSaga() {
  yield all([loginWatcher].map(fork));
}
