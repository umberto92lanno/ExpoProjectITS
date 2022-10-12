import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ChuckStack} from "./ChuckStack";
import {ChuckFace} from "../screens/ChuckFace";

const Stack = createNativeStackNavigator();

export const ChuckModalStack = () => {
    return(
        <Stack.Navigator screenOptions={{
            presentation: 'modal',
            headerShown: false,
        }}>
            <Stack.Screen name="ChuckStack" component={ChuckStack} />
            <Stack.Screen name="ChuckFace" component={ChuckFace} />
        </Stack.Navigator>
    );
}
