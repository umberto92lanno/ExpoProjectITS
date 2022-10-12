import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RickMortyStack} from './RickMortyStack';
import {TimerStack} from './TimerStack';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import AppTimer from '../../AppTimer';
import ChuckCategories from "../screens/ChuckCategories";
import { ChuckStack } from "./ChuckStack";
import {ChuckModalStack} from "./ChuckModalStack";

const Tab = createBottomTabNavigator();

export const BottomStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
      }}>
      <Tab.Screen
        options={{
          title: 'Timer',
          // tabBarIcon: ({color}) => (
          //   <Icon name="times" size={26} color={color} />
          // ),
        }}
        name="Timer"
        component={AppTimer}
      />
      <Tab.Screen
        options={{
          title: 'Rick & Morty',
          // tabBarIcon: ({color}) => (
          //   <Icon name="rocket" size={26} color={color} />
          // ),
        }}
        name="RickMorty"
        component={RickMortyStack}
      />
      <Tab.Screen
        options={{
          title: 'Chuck Norris',
          // tabBarIcon: ({color}) => (
          //   <Icon name="rocket" size={26} color={color} />
          // ),
        }}
        name="Chuck"
        component={ChuckModalStack}
      />
    </Tab.Navigator>
  );
};
