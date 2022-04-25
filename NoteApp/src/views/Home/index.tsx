import { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackScreens } from '@navigation/Routes';

import { ProfileScreenNavigationProp } from '@navigation/Navigation';
import { RootState } from '@store/rootState';

import { useDispatch, useSelector } from 'react-redux';
import { NotesActions } from '@store/note/noteReducer';

const Home: React.FC = () => {
  const { navigate } = useNavigation<ProfileScreenNavigationProp>();
  const dispatch = useDispatch();

  const { notes } = useSelector((state: RootState) => state.notes);

  const goToNote = () => {
    navigate(StackScreens.Note);
  };

  const loadNotes = async () => {
    dispatch(NotesActions.getNotes);
  };

  useEffect(() => {
    if (!notes || notes.length < 1) {
      loadNotes();
    }
  }, [notes]);

  return (
    <View>
      <Text onPress={goToNote}>Home page</Text>
      <FlatList
        data={notes}
        renderItem={({ item }) => <Text>{item.text}</Text>}
        keyExtractor={item => item.id.toString()}
        stickyHeaderIndices={[0]}
      />
    </View>
  );
};

export default Home;
