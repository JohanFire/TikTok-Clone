import React from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { Text, Avatar, Icon } from 'react-native-elements'

import { DEFAULT_USER_AVATAR_2 as DEFAULT } from "../../../../assets/images";

export function UpdateAvatar(props) {
    const { avatar } = props;

    const change_avatar = () => {
        console.log("change_avatar");
    }

    return (
        <Pressable
            style={styles.content}
            onPress={change_avatar}
        >
            <View
                style={styles.content__avatar}
            >
                <Avatar
                    size={100}
                    source={avatar ? { uri: avatar } : DEFAULT}
                    rounded
                    containerStyle={styles.avatar}
                />
                <View
                    style={styles.icon__content}
                >
                    <Icon 
                        type='material-community'
                        name='camera-outline'
                        size={14}
                        containerStyle={styles.icon__container}
                        iconStyle={styles.icon}
                    />
                </View>
                <Text>Cambiar foto</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    content: {
        alignItems: "center",
        marginVertical: 20,
    },
    content__avatar: {
        position: "relative",
        width: 100,
        height: 100,
        marginBottom: 5,
    },
    avatar: {
        padding: 5,
    },
    icon__content:{
        position: "absolute",
        height: "100%",
        width: "100%",
        justifyContent: "center",
    },
    icon__container:{
        backgroundColor: "rgba(0,0,0,0.6)",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100, 
    },
    icon:{
        fontSize: 50,
    },
})