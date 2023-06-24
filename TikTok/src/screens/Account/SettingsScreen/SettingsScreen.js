import React, { useState, useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { useFocusEffect } from "@react-navigation/native";

import { User } from "../../../api";
import { useAuth, useTheme } from "../../../hooks";

const userController = new User();

export function SettingsScreen() {
    const [user, setUser] = useState(null)
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

    if (!user) return null

    return (
        <View>
            <Text>SettingsScreen</Text>
        </View>
    )
}

const styles = () => {
    const {} = useTheme();

    return StyleSheet.create({
        
    })
}