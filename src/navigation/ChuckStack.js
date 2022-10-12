import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppFetch from '../../AppFetch';
import CharacterDetails from '../screens/CharacterDetails';
import ChuckCategories from '../screens/ChuckCategories';
import ChuckJoke from '../screens/ChuckJoke';

const Stack = createNativeStackNavigator();

export const ChuckStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="ChuckCategories"
        component={ChuckCategories}
      />
      <Stack.Screen name="ChuckJoke" component={ChuckJoke} />
    </Stack.Navigator>
  );
};
