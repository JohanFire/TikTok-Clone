import React, { useState } from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { Text, Avatar } from 'react-native-elements'
import { DateTime } from "luxon";
import { useNavigation } from "@react-navigation/native";

import { DEFAULT_USER_AVATAR_2 as LOGO } from "../../../../assets/images";
import { screen } from "../../../utils";

export function FollowNotification(props) {
    const { notification, readNotification } = props;
    const userFollower = notification.user_follower_data;
    const navigation = useNavigation();
    const [isRead, setIsRead] = useState(notification.read);

    const go_to_user = () => {
        navigation.navigate(screen.app.user, { idUser: userFollower.id });
    };

    const onReadNotification = () => readNotification(notification.id, setIsRead);

    return (
        <Pressable
            style={[styles.content, isRead && styles.inactive]}
            onLongPress={!isRead ? onReadNotification : null}
            onPress={go_to_user}
        >
            <View style={styles.left__content}>
                <Avatar
                    source={userFollower.avatar ? { uri: userFollower.avatar } : LOGO}
                    rounded
                    size={40}
                    style={styles.avatar}
                />

                <View>
                    <Text
                        style={styles.user}
                    >{userFollower.username}</Text>

                    <Text
                        style={styles.text}
                    >comenzó a seguirte</Text>

                    <Text
                        style={styles.time}
                    >
                        {
                            DateTime.fromISO(notification.created_at)
                                .setLocale('es')
                                .minus({
                                    days: 1
                                })
                                .toRelative()
                        }
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginVertical: 5,
        height: 70,
    },
    inactive: {
        opacity: 0.4,
    },
    left__content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    user: {
        fontWeight: 'bold',
        marginBottom: 2,
    },
    text: {
        opacity: 0.4,
    },
    time: {
        marginTop: 5,
        fontSize: 12,
    }
})