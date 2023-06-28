import React, { useRef } from 'react'
import { View, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
import { Text, Button, Avatar } from 'react-native-elements'
import RBSheet from "react-native-raw-bottom-sheet";

import { useTheme } from "../../../hooks";
import { screen } from "../../../utils";
import { styled } from "./AuthScreen.styles";
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Header } from "../../../components/Shared/VideoFeed/Comments/Header";
import { JOHANFIRE } from "../../../../assets/images";

const { height } = Dimensions.get('screen');

export function AuthScreen(props) {
    const { navigation } = props;
    const { toggleTheme } = useTheme();
    const sheet = useRef();
    const styles = styled()

    const open_sheet = () => sheet.current.open();
    const close_sheet = () => sheet.current.close();

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

            <View style={styles.credits__content}>
                <View></View>
                <Icon
                    type='material-community'
                    name='chevron-double-up'
                    size={30}
                    onPress={open_sheet}
                    color="white"
                    containerStyle={{ marginBottom: 10 }}
                />
                <Text
                    onPress={open_sheet}
                >
                    Desarrollado por
                    <Text style={{ color: "#e74c3c" }}> Johan Tristán</Text>
                </Text>
                <View></View>
            </View>

            <View style={styles.loginContent}>
                <Text>
                    ¿Ya estás registrado?{" "}
                    <Text
                        style={styles.login}
                        onPress={go_to_login_email}
                    >Inicia sesión</Text>
                </Text>
            </View>



            <RBSheet
                ref={sheet}
                height={height - 300}
                openDuration={200}
                keyboardAvoidingViewEnabled={false}
                customStyles={{
                    container: styles.rb_sheet_container,
                }}
            >
                <View style={styles.header__content}>
                    <View />
                    <Text style={{ fontSize: 16 }} >Desarrollado por</Text>
                    <Icon
                        type='material-community'
                        name='close'
                        size={16}
                        onPress={close_sheet}
                    // containerStyle={styles.icon__container}
                    // iconStyle={styles.icon}
                    />
                </View>

                <View style={styles.credits__info}>
                    <Avatar
                        size={160}
                        source={JOHANFIRE}
                        rounded
                        containerStyle={styles.avatar}
                    />
                    <Text style={styles.name} >Johan Tristán</Text>
                    <Text style={styles.username} >(JohanFire)</Text>
                </View>

            </RBSheet>

        </SafeAreaView>
    )
}