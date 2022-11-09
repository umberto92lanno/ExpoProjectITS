import React from 'react';
import { View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {TabBarComponent} from "./components/TabBarComponent";
import WeatherList from "./screens/WeatherList";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


const TabNavigator = () => {
    return (
      <Tab.Navigator
          screenOptions={{ headerShown: false }}
          tabBar={props => <TabBarComponent {...props} />}
      >
          <Tab.Screen
              name="Bottom1"
              component={WeatherList} />
          <Tab.Screen
              name="Bottom2"
              component={WeatherList} />
          <Tab.Screen
              name="Bottom3"
              component={WeatherList} />
          <Tab.Screen
              name="Bottom4"
              component={WeatherList} />
      </Tab.Navigator>
    );
}

const theme = {
    colors: {
        background: "transparent",
    },
};

const App = () => {
  return (
      <NavigationContainer theme={theme}>
          <TabNavigator />
          {/*<Stack.Navigator>*/}
          {/*    <Stack.Screen*/}
          {/*        name="WeatherList"*/}
          {/*        component={WeatherList}*/}
          {/*    />*/}
          {/*    <Stack.Screen*/}
          {/*        name="WeatherDetails"*/}
          {/*        component={WeatherDetails}*/}
          {/*    />*/}
          {/*</Stack.Navigator>*/}
      </NavigationContainer>
  );
}

export default App;
