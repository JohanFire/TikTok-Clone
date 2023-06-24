import React, { useState, useCallback, useLayoutEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Text, Icon, Button } from 'react-native-elements'
import { useFocusEffect } from "@react-navigation/native";

import { User } from "../../../api";
import { useAuth, useTheme } from "../../../hooks";
import { UpdateAvatar } from "../../../components/Settings";

const userController = new User();

export function SettingsScreen(props) {
    const { navigation } = props;
    const [user, setUser] = useState(null)
    const styles = styled();
    const { toggleTheme, darkMode } = useTheme();
    const { accessToken, logout } = useAuth();

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
        <ScrollView>
            <UpdateAvatar 
                avatar={user.avatar}
            />

            <Button 
                title="Cerrar Sesión"
                containerStyle={styles.btn__container__logout}
                buttonStyle={styles.btn__logout}
                onPress={logout}
            />
        </ScrollView>
    )
}

const styled = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        btn__logout:{
            backgroundColor: "transparent",
            borderTopWidth: 1,
            borderTopColor: theme.Default.border,
            borderBottomWidth: 1,
            borderBottomColor: theme.Default.border,
            borderRadius: 0,
        }
    })
}