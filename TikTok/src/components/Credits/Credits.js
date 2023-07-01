import React, { useRef } from 'react'
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native'
import { Text, Button, Avatar, Icon } from 'react-native-elements'
import RBSheet from "react-native-raw-bottom-sheet";

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
                marginTop: 20,
            },
            avatar: {
                backgroundColor: "#e74c3c",
                padding: 5,
            },
            name: {
                marginTop: 15,
                fontSize: 24,
            },
            username: {
                opacity: 0.4,
                fontSize: 16,
            },
        })
    )
}