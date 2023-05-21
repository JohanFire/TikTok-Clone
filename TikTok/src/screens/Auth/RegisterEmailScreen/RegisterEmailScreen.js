import React, { useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import { Input, Button } from "react-native-elements";

import { styles } from "./RegisterEmailScreen.styles";

export function RegisterEmailScreen(props) {
    const { navigation } = props;
    const [showPassword, setShowPassword] = useState(false);

    const onShowPassword = () => setShowPassword(prevState => !prevState)

    return (
        <SafeAreaView style={styles.content}>
            <View style={styles.form}>
                <Input
                    placeholder='Correo electrónico'
                    autoCapitalize='none'
                />
                <Input
                    placeholder='Nombre(s)'
                    autoCapitalize='none'
                />
                <Input
                    placeholder='Apellido(s)'
                    autoCapitalize='none'
                />
                <Input
                    placeholder='Usuario'
                    autoCapitalize='none'
                />
                <Input
                    placeholder='Contraseña'
                    secureTextEntry={!showPassword}
                    rightIcon={{
                        type: "material-community",
                        name: showPassword ? "eye-off-outline" : "eye-outline",
                        onPress: onShowPassword
                    }}
                    />
                <Input
                    placeholder='Confirmar Contraseña'
                    secureTextEntry={!showPassword}
                    rightIcon={{
                        type: "material-community",
                        name: showPassword ? "eye-off-outline" : "eye-outline",
                        onPress: onShowPassword
                    }}
                />
            </View>
            <Button
                title="Registrarse"
                containerStyle={styles.btnContainer}
            />
        </SafeAreaView>
    )
}