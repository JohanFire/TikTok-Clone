import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TestScreen } from "../screens/TestScreen";
import { screen } from "../utils";
import { HomeStack, FriendsStack, UploadStack } from "./stacks";

const Tab = createBottomTabNavigator();

export function TabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name={screen.home.tab}
                component={HomeStack}
                options={{ headerShown: false }}
            />
            <Tab.Screen name={screen.friends.tab}
                component={FriendsStack}
                options={{ headerShown: false }}
                />
            <Tab.Screen name={screen.upload.tab}
                component={UploadStack}
                options={{headerShown: false, tabBarLabelStyle: {
                    display: "none",
                }}}
            />
            <Tab.Screen name={screen.notifications.tab} component={TestScreen} />
            <Tab.Screen name={screen.account.tab} component={TestScreen} />
        </Tab.Navigator>
    )
}