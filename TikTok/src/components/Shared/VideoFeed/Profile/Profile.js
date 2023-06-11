import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, Icon } from 'react-native-elements'

import {
    DEFAULT_USER_AVATAR,
    DEFAULT_USER_AVATAR_2
} from "../../../../../assets/images";

export function Profile(props) {
    const { idUser, image } = props;

    const go_to_profile = () => {
        console.log(`Go to profile ${idUser}`);
    }

    const follow = () => {
        console.log(`Follow user: ${idUser}`);
    }

    return (
        <View style={styles.content}>
            <Avatar
                rounded
                source={image ? { uri: image } : DEFAULT_USER_AVATAR_2}
                size={40}
                avatarStyle={styles.avatar}
                onPress={go_to_profile}
            />
            <Icon
                type='material-community'
                name='plus'
                size={14}
                containerStyle={styles.icon__container}
                onPress={follow}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        alignItems: "center",
        marginBottom: 20,
    },
    avatar: {
        borderWidth: 1,
        borderColor: "#fff",
    },
    icon__container: {
        position: "absolute",
        bottom: -7,
        backgroundColor: "#d40000",
        borderRadius: 100,
        padding: 1,
    },
})