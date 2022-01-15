import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from '../screens/Splash';
import TodoList from '../screens/TodoList';

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'default',
          gestureEnabled: true,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          name="TodoList"
          component={TodoList}
          options={{animation: 'fade_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
