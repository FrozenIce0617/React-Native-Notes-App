import { State as NotesState } from '@store/note/noteReducer';

export interface RootState {
  notes: NotesState;
}
