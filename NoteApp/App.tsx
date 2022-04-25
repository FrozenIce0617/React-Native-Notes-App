import 'react-native-gesture-handler';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './src/store';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from '@navigation/Navigation';

export default function App() {
  return (
    <ReduxProvider store={configureStore()}>
      <SafeAreaProvider>
        <View>
          <Navigation />
        </View>
      </SafeAreaProvider>
    </ReduxProvider>
  );
}
