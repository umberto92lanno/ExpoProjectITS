import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Timer from "./src/screens/Timer";
import ChangeColor from "./src/screens/ChangeColor";
import BottomTabNavigation from "./src/navigation/BottomTabNavigation";
import List from './src/screens/List';
import {Provider as PaperProvider} from 'react-native-paper';
import Details from "./src/screens/Details";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Timer" component={Timer} />
        <Stack.Screen name="ChangeColor" component={ChangeColor} />
        <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
