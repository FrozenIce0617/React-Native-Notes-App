import { NoteModel } from '@models/NoteModel';
import { useDispatch, useSelector } from 'react-redux';
import { getNotesSelector } from '@store/note/noteSelectors';
import { useState } from 'react';

export const useNote = (initialNote: NoteModel) => {
  const dispatch = useDispatch();

  const [note, setNote] = useState(initialNote);

  const allNotes = useSelector(getNotesSelector);

  return {
    note,
    allNotes,
  };
};
