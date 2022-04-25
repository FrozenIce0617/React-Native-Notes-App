import { fork } from 'redux-saga/effects';
import noteSagas from '@store/note/noteSagas';

export default function* sagas() {
  yield fork(noteSagas);
}
