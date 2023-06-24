import React, { useState, useCallback, useLayoutEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Icon } from 'react-native-elements'
import { useFocusEffect } from "@react-navigation/native";

import { User } from "../../../api";
import { useAuth, useTheme } from "../../../hooks";

const userController = new User();

export function SettingsScreen(props) {
    const { navigation } = props;
    const [user, setUser] = useState(null)
    const { toggleTheme, darkMode } = useTheme();
    const { accessToken } = useAuth();

    useFocusEffect(
        useCallback(() => {
            (async () => {
                try {
                    const response = await userController.me(accessToken)
                    setUser(response)
                } catch (error) {
                    console.error(error);
                }
            })()
        }, [],)
    )

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Icon
                    type='material-community'
                    name={darkMode ? "weather-sunny" : "weather-night"}
                    size={24}
                    onPress={toggleTheme}
                />
            ),
        });
    }, [darkMode]);

    if (!user) return null

    return (
        <View>
            <Text>SettingsScreen</Text>
        </View>
    )
}

const styles = () => {
    const { } = useTheme();

    return StyleSheet.create({

    })
}