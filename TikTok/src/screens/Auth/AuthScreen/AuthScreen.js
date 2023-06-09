import React from 'react'
import { View, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
import { Text, Button, Avatar } from 'react-native-elements'

import { screen } from "../../../utils";
import { styled } from "./AuthScreen.styles";
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Credits } from "../../../components/Credits";

export function AuthScreen(props) {
    const { navigation } = props;
    const styles = styled()

    const go_to_register_email = () => {
        navigation.navigate(screen.auth.registerEmail)
    }

    const go_to_login_email = () => {
        navigation.navigate(screen.auth.loginEmail)
    }

    return (
        <SafeAreaView style={styles.content}>
            <View style={styles.optionContent}>
                <Text style={styles.title}>
                    Regístrate en <Text style={styles.titleColor}>TikTok Clone</Text>
                </Text>
                <Text style={styles.info}>
                    Crea un perfil, sigue a tus amigos, sube tus propios TikToks y más.
                </Text>

                <TouchableOpacity
                    onPress={go_to_register_email}
                    style={styles.itemRegister}
                >
                    <Icon
                        type='material-community' name='at'
                    />
                    <Text>Correo electrónico:</Text>
                    <View></View>
                </TouchableOpacity>
            </View>

            <Credits />

            <View style={styles.loginContent}>
                <Text>
                    ¿Ya estás registrado?{" "}
                    <Text
                        style={styles.login}
                        onPress={go_to_login_email}
                    >Inicia sesión</Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}