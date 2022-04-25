import { combineReducers } from 'redux';
import { RootState } from './rootState';
import { notesReducer } from '@store/note/noteReducer';

const rootReducer = combineReducers<RootState>({
  notes: notesReducer,
});

export default rootReducer;
