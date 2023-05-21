import React from 'react'
import { View } from 'react-native'
import { Text, Button } from 'react-native-elements'

import { useTheme } from "../../../hooks";
import { screen } from "../../../utils";

export function AuthScreen(props) {
    console.log(props);
    const { navigation } = props;
    const { toggleTheme } = useTheme();

    return (
        <View>
            <Text>AuthScreen</Text>
            <Button
                title="Cambiar Tema"
                onPress={toggleTheme}
            ></Button>
            <Button
                title="Iniciar Sesión"
                onPress={() => navigation.navigate(screen.auth.loginEmail)}
            ></Button>
        </View>
    )
}