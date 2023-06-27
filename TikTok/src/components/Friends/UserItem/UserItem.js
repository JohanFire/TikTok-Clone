import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text, Avatar } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native";

import { DEFAULT_USER_AVATAR_2 as LOGO } from "../../../../assets/images";
import { screen } from "../../../utils";

export function UserItem(props) {
    const { user: { id, avatar, username } } = props;
    const navigation = useNavigation();

    const go_to_user_profile = () => {
        navigation.navigate(screen.app.user, { idUser: id })
    };

    return (
        <TouchableOpacity
            style={styles.content}
            onPress={go_to_user_profile}
        >
            <Avatar
                source={avatar ? { uri: avatar } : LOGO}
                rounded
                size={60}
            />
            <Text
                style={styles.text}
            >{username}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    text: {
        marginTop: 5,
    }
})