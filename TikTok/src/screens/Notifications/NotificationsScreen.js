import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'

import { Notification } from "../../api";
import { useAuth } from "../../hooks";

const notification = new Notification();

export function NotificationsScreen() {
    const [notifications, setNotifications] = useState(null);
    const { accessToken, auth } = useAuth();

    useEffect(() => {
        (async () => {
            try {
                const response = await notification.get_by_user(
                    accessToken,
                    auth.user_id
                )
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        })()
    }, [])


    return (
        <View>
            <Text>NotificationsScreen</Text>
        </View>
    )
}