// Navigation for Non Logged Users

import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthScreen, LoginEmailScreen, RegisterEmailScreen } from "../screens/Auth";
import { useTheme } from "../hooks";
import { getNavigationTheme, screen } from "../utils";

const Stack = createNativeStackNavigator();

export function AuthNavigation() {
    const { theme } = useTheme();
    const MyTheme = getNavigationTheme(theme);

    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator screenOptions={{ headerTransparent: true}}>
                <Stack.Screen
                    name={screen.auth.auth}
                    component={AuthScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={screen.auth.loginEmail}
                    component={LoginEmailScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={screen.auth.registerEmail}
                    component={RegisterEmailScreen}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}