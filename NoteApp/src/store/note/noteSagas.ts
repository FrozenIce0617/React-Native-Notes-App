import { NoteModel } from '@models/NoteModel';
import axios from '@networking/axios';

import {
  all,
  call,
  put,
  select,
  take,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { NotesActions } from './noteReducer';

export default function* sagas() {
  yield all([takeLatest(NotesActions.getNotes.type, getNotes)]);
}

function* getNotes() {
  try {
    let notes: NoteModel[];
    const { data } = yield call(axios.get, '/notes');
    notes = data;
    yield put(NotesActions.getNoteSuccess(notes));
  } catch (err: any) {
    console.log(err);
    yield put(NotesActions.getNotesFailure());
  }
}
