import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import GameOperations from './src/screens/GameOperations';
import GameOver from './src/screens/GameOver';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="GameOperations" headerMode="none">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="GameOperations" component={GameOperations} />
          <Stack.Screen name="GameOver" component={GameOver} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}