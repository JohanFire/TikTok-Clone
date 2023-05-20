// Navigation for Non Logged Users

import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthScreen } from "../screens/Auth";
import { useTheme } from "../hooks";
import { getNavigationTheme } from "../utils";

const Stack = createNativeStackNavigator();

export function AuthNavigation() {
    const { theme } = useTheme();
    const MyTheme = getNavigationTheme(theme);

    console.log(`MyTheme: ${MyTheme}`);

    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator>
                <Stack.Screen
                    name='auth'
                    component={AuthScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}