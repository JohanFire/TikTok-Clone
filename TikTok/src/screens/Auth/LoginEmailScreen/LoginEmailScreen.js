import React, { useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import { Text, Input, Button } from "react-native-elements";

import { styles } from "./LoginEmailScreen.styles";

export function LoginEmailScreen() {
    const [showPassword, setShowPassword] = useState(false)

    const on_show_password = () => setShowPassword((prevState) => !prevState)

    return (
        <SafeAreaView style={styles.content} >
            <View style={styles.form}>
                <Input placeholder='Correo electrónico' autoCapitalize='none'></Input>
                <Input
                    placeholder='Contraseña'
                    autoCapitalize='none'
                    secureTextEntry={!showPassword}
                    rightIcon={{
                        type: "material-community",
                        name: showPassword ? "eye-off-outline" : "eye-outline",
                        onPress: on_show_password
                    }}
                ></Input>
            </View>
            <Button title="Iniciar sesión" containerStyle={styles.btn__container}></Button>
        </SafeAreaView>
    )
}