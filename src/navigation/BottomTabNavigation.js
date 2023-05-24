// import React from 'react';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import Login from '../screens/Login';
// import Timer from '../screens/Timer';
// import { NavigationContainer } from '@react-navigation/native';
// import ChangeColor from "../screens/ChangeColor";
// const Tab = createMaterialBottomTabNavigator();
//
// const BottomTabNavigation = () => {
//     return (
//         <Tab.Navigator
//               activeColor="#f0edf6"
//               inactiveColor="#3e2465"
//               barStyle={{ backgroundColor: '#694fad' }}
//               shifting
//         >
//             <Tab.Screen name={"Login"} component={Login} options={{ tabBarColor: 'blue' }} />
//             <Tab.Screen name={"Timer"} component={Timer} options={{ tabBarColor: 'red' }} />
//             <Tab.Screen name={"ChangeColor"} component={ChangeColor} options={{ tabBarColor: 'yellow' }} />
//         </Tab.Navigator>
//     );
// }
//
// export default BottomTabNavigation;
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Feed() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Feed!</Text>
      </View>
    );
}

function Profile() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Profile!</Text>
      </View>
    );
}

function Notifications() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Notifications!</Text>
      </View>
    );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="white"
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: 'tomato' }}
      >
          <Tab.Screen
            name="Feed"
            component={Feed}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={Notifications}
            options={{
                tabBarLabel: 'Updates',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="bell" color={color} size={26} />
                ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }}
          />
      </Tab.Navigator>
    );
}

export default function App() {
    return (
      <MyTabs />
    );
}
