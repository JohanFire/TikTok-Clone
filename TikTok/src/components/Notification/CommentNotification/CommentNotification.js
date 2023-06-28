import React, { useState } from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { Text, Image, Avatar } from 'react-native-elements'
import { DateTime } from "luxon";
import { useNavigation } from "@react-navigation/native";

import { DEFAULT_USER_AVATAR_2 as LOGO } from "../../../../assets/images";
import { screen } from "../../../utils";

export function CommentNotification(props) {
    const { notification, readNotification } = props;
    const userFollower = notification.user_follower_data
    const [isRead, setIsRead] = useState(false);
    const video = notification.video_data;

    return (
        <Pressable style={[styles.content, isRead && styles.inactive]} >
            <View style={styles.left__content}>
                <Avatar
                    source={userFollower.avatar ? { uri: userFollower.avatar } : LOGO}
                    rounded
                    size={40}
                    style={styles.avatar}
                />
            </View>
            <View style={styles.content__info} >
                <Text
                    style={styles.user}
                >{userFollower.username}</Text>
                <Text
                    style={styles.comment}
                    numberOfLines={3}
                >comentó: {notification.comment}</Text>
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

            <Image 
                source={{ uri: video.image}}
                style={styles.img__video}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 5,
        minHeight: 70,
    },
    inactive: {
        opacity: 0.4
    },
    left__content: {
        flexDirection: "row",
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    content__info: {
        width: "75%",
    },
    user: {
        fontWeight: 'bold',
        marginBottom: 2,
    },
    comment: {
        opacity: 0.4
    },
    time: {
        marginTop: 5,
        fontSize: 12,
    },
    img__video:{
        width: 40,
        height: 60,
        marginVertical: 5,
        borderRadius: 6,
        resizeMode: "cover",
    },
})