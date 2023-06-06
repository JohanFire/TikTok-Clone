import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TestScreen } from "../screens/TestScreen";

const Tab = createBottomTabNavigator();

export function TabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='home' component={TestScreen}/>
            <Tab.Screen name='friends' component={TestScreen}/>
            <Tab.Screen name='upload' component={TestScreen}/>
            <Tab.Screen name='notificacions' component={TestScreen}/>
            <Tab.Screen name='account' component={TestScreen}/>
        </Tab.Navigator>
    )
}