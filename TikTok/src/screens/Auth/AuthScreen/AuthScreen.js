import React from 'react'
import { View } from 'react-native'
import { Text, Button } from 'react-native-elements'

import { useTheme } from "../../../hooks";

export function AuthScreen() {
    const { toggleTheme } = useTheme();

    return (
        <View>
            <Text>AuthScreen</Text>
            <Button
                title="Cambiar Tema"
                onPress={toggleTheme}
            ></Button>
        </View>
    )
}