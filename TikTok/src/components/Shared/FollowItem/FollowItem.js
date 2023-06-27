import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text, Avatar } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native";

import { DEFAULT_USER_AVATAR_2 as LOGO } from "../../../../assets/images";
import { screen } from "../../../utils";

export function FollowItem(props) {
    const { user } = props;
    const navigation = useNavigation();

    const go_to_user = () => {
        navigation.goBack();
        navigation.navigate(screen.app.user, { idUser: user.id })
    };

    return (
        <TouchableOpacity
            style={styles.content}
            onPress={go_to_user}
        >
            <Avatar
                source={user.avatar ? { uri: user.avatar } : LOGO}
                rounded
                size={30}
            />
            <View style={styles.info}>
                <Text>{user.first_name} {user.last_name}</Text>
                <Text style={styles.username} >{user.username}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    content: {
        borderRadius: 6,
        marginBottom: 10,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1f1f1f",
    },
    info: {
        marginLeft: 15,
    },
    username: {
        opacity: 0.4
    },
})