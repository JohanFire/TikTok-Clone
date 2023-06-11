// Navigation for Logged Users

import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-elements";

import { useTheme, useAuth } from "../hooks";
import { getNavigationTheme, screen } from "../utils";
import { TabNavigation } from "./TabNavigation";

const Stack = createNativeStackNavigator();

export function AppNavigation() {
    const { theme } = useTheme();
    const MyTheme = getNavigationTheme(theme);
    const { logout } = useAuth();

    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator>
                <Stack.Screen name={screen.app.tab} component={TabNavigation} options={{ headerShown: false }} />
            </Stack.Navigator>
            {/* <Button
                title="Cerrar sesión"
                onPress={logout}
            /> */}
        </NavigationContainer>
        
    );
}