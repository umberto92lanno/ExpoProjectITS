import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppTimer from '../../AppTimer';

const Stack = createNativeStackNavigator();

export const TimerStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true, gestureEnabled: true}}>
      <Stack.Screen name="Timer" component={AppTimer} />
    </Stack.Navigator>
  );
};
