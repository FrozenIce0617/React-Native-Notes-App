import { RootState } from '@store/rootState';

export const getNotesSelector = (state: RootState) => state.notes.notes;
