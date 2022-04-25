import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import { StackScreens } from '@navigation/Routes';

import Home from '@views/Home';
import EditNote from '@views/EditNote';

export type StackParamList = {
  [StackScreens.Home]: undefined;
  [StackScreens.Note]: undefined;
};

export type ProfileScreenNavigationProp = StackNavigationProp<StackParamList>;

export const Navigation = () => {
  const Stack = createStackNavigator<StackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={StackScreens.Home} component={Home} />
        <Stack.Screen name={StackScreens.Note} component={EditNote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
