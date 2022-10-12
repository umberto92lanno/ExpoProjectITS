import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { BottomStack } from "./src/navigation/BottomStack";
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomStack />
    </NavigationContainer>
  );
};
export default AppNavigation;
