import React, { useRef } from 'react'
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Linking
} from 'react-native'
import { Text, Button, Avatar, Icon } from 'react-native-elements'
import RBSheet from "react-native-raw-bottom-sheet";
import * as WebBrowser from "expo-web-browser";

import { useTheme } from "../../hooks";
import { screen } from "../../utils";
import { Header } from "../../components/Shared/VideoFeed/Comments/Header";
import { JOHANFIRE } from "../../../assets/images";

const { height } = Dimensions.get('screen');

export function Credits() {
    const styles = styled();
    const sheet = useRef();
    // const { toggleTheme } = useTheme();

    const open_sheet = () => sheet.current.open();
    const close_sheet = () => sheet.current.close();

    const open_johanfire_web = () => {
        WebBrowser.openBrowserAsync("https://www.johanfire.com/")
    };

    const open_instagram = () => {
        Linking.openURL('https://www.instagram.com/johanfireok/');
    };

    const open_linkedin = () => {
        Linking.openURL('https://www.linkedin.com/in/johanfire/');
    };

    const open_github = () => {
        Linking.openURL('https://github.com/johanfire');
    };

    return (
        <>

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
                        color="white"
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
                    <Text style={styles.description} >Software Developer</Text>

                    <View style={styles.social}>
                        <View style={styles.links}>
                            <Icon
                                type='material-community'
                                name='link-variant'
                                size={26}
                                onPress={open_johanfire_web}
                            />
                            <View />
                            <Text
                                style={styles.text}
                                onPress={open_johanfire_web}
                            >www.johanfire.com</Text>
                        </View>
                        <View style={styles.links} >
                            <Icon
                                type='material-community'
                                name='linkedin'
                                size={26}
                                onPress={open_linkedin}
                            />
                            <View />
                            <Text 
                                style={styles.text__variant} 
                                onPress={open_linkedin}
                            >/johanfire</Text>
                        </View>
                        <View style={styles.links}>
                            <Icon
                                type='material-community'
                                name='github'
                                size={26}
                                onPress={open_github}
                            />
                            <View />
                            <Text 
                                style={styles.text__variant} 
                                onPress={open_github}
                            >/johanfire</Text>
                        </View>
                        <View style={styles.links}>
                            <Icon
                                type='material-community'
                                name='instagram'
                                size={26}
                                onPress={open_instagram}
                            />
                            <View />
                            <Text
                                style={styles.text__variant__02}
                                onPress={open_instagram}
                            >/johanfireok</Text>
                        </View>
                    </View>


                </View>

            </RBSheet>
        </>
    )
}

const styled = () => {
    const { theme } = useTheme();
    return (
        StyleSheet.create({
            credits__content: {
                alignItems: "center",
                marginBottom: -350,
            },
            rb_sheet_container: {
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: theme.Default.background,
            },
            header__content: {
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
            },
            credits__info: {
                alignItems: "center",
                marginTop: 30,
            },
            avatar: {
                backgroundColor: "#e74c3c",
                padding: 5,
            },
            social: {
                padding: 35
            },
            links: {
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
            },
            name: {
                marginTop: 15,
                fontSize: 24,
            },
            username: {
                opacity: 0.4,
                fontSize: 16,
            },
            description:{
                marginTop: 10,
                fontSize: 16,
            },
            text: {
                fontSize: 18,
                marginLeft: 10,
                // margin: 10,
                color: "#3498db",
            },
            text__variant: {
                fontSize: 18,
                marginRight: 75,
                color: "#3498db",
            },
            text__variant__02: {
                fontSize: 18,
                marginRight: 57,
                color: "#3498db",
            },
            icon__container: {
                width: 14,
                height: 14,
                marginRight: 5,
            },
        })
    )
}