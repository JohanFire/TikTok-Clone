import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Avatar } from 'react-native-elements'

import { DEFAULT_USER_AVATAR_2 } from "../../../../assets/images";

export function Header(props) {
    const {avatar, username} = props;

    return (
        <View style={styles.content}>
            <Avatar 
                size={100}
                source={avatar ? {uri: avatar} : DEFAULT_USER_AVATAR_2}
                rounded
                containerStyle={styles.avatar}
            />
            <Text style={styles.username} >@{username}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        alignItems: "center",
        marginTop: 20,
    },
    avatar: {
        backgroundColor: "#2e2e2e",
        padding: 5,
    },
    username:{
        marginTop: 5,
        fontSize: 16,
    },
})