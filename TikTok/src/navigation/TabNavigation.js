import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import { TestScreen } from "../screens/TestScreen";
import { screen } from "../utils";
import {
    HomeStack,
    FriendsStack,
    UploadStack,
    NotificationsStack,
    AccountStack
} from "./stacks";

const Tab = createBottomTabNavigator();

export function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarActiveTintColor: "#fff",
            tabBarStyle: { backgroundColor: "#252525", borderTopWidth: 0 },
            tabBarIcon: (props) => tab_icon({ route, ...props })
        })}>
            <Tab.Screen name={screen.home.tab}
                component={HomeStack}
                options={{ headerShown: false, title: "Inicio" }}
            />
            <Tab.Screen name={screen.friends.tab}
                component={FriendsStack}
                options={{ headerShown: false, title: "Amigos" }}
            />
            <Tab.Screen name={screen.upload.tab}
                component={UploadStack}
                options={{
                    headerShown: false, tabBarLabelStyle: {
                        display: "none",
                    }
                }}
            />
            <Tab.Screen name={screen.notifications.tab}
                component={NotificationsStack}
                options={{ headerShown: false, title: "Notificaciones" }}
            />
            <Tab.Screen name={screen.account.tab}
                component={AccountStack}
                options={{ headerShown: false, title: "Perfil" }}
            />
        </Tab.Navigator>
    )
}

function tab_icon(props) {
    const { route, size, color, focused } = props;

    let iconName = "plus"

    if (route.name === screen.home.tab) {
        iconName = focused ? "home" : "home-outline"
    }
    if (route.name === screen.friends.tab) {
        iconName = focused ? "account-multiple" : "account-multiple-outline"
    }
    if (route.name === screen.notifications.tab) {
        iconName = focused ? "message-processing" : "message-processing-outline"
    }
    if (route.name === screen.account.tab) {
        iconName = focused ? "account" : "account-outline"
    }

    if (route.name === screen.upload.tab) {
        return (
            <Icon
                type='material-community'
                name='plus'
                size={size}
                color={color}
                containerStyle={{
                    backgroundColor: "#fff",
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 6
                }}
                iconStyle={{
                    color: "#000",
                    fontSize: 14,
                }}
            />
        )
    }

    return (
        <Icon
            type='material-community'
            name={iconName}
            size={size}
            color={color}
        />
    )
}