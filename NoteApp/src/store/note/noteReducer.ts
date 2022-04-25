import { NoteModel } from '@models/NoteModel';

import data from '../../__mock__/notes';

import {
  ImmerReducer,
  createReducerFunction,
  createActionCreators,
} from 'immer-reducer';

export interface State {
  error: boolean;
  loading: boolean;
  notes: NoteModel[];
}

const initialState: State = {
  error: false,
  loading: false,
  notes: data,
};

class Reducer extends ImmerReducer<State> {
  clearState() {
    this.draftState = { ...initialState };
  }
  getNotes() {
    this.draftState.loading = false;
  }
  getNoteSuccess(notes: NoteModel[]) {
    this.draftState.notes = notes;
    this.draftState.loading = false;
    this.draftState.error = false;
  }
  getNotesFailure() {
    this.draftState.loading = false;
    this.draftState.error = true;
  }
}

const NotesActions = createActionCreators(Reducer);
const notesReducer = createReducerFunction(Reducer, initialState);

export { notesReducer, NotesActions };
