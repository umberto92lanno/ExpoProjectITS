import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppFetch from '../../AppFetch';
import CharacterDetails from '../screens/CharacterDetails';

const Stack = createNativeStackNavigator();

export const RickMortyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Fetch" component={AppFetch} />
      <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
    </Stack.Navigator>
  );
};
