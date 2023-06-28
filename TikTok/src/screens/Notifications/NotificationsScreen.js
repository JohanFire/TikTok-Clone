import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Text, Icon } from 'react-native-elements'

import { Notification } from "../../api";
import { useAuth } from "../../hooks";
import { ListNotification } from "../../components/Notification";

const notificationController = new Notification();

export function NotificationsScreen(props) {
    const { navigation } = props;
    const [notifications, setNotifications] = useState(null);
    const [showNotificationRead, setShowNotificationRead] = useState(false)
    const { accessToken, auth } = useAuth();

    console.log(notifications);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Icon
                    type='material-community'
                    name={showNotificationRead 
                        ? 'eye-off-outline' 
                        : 'eye-outline'
                    }
                    size={24}
                    onPress={() => setShowNotificationRead(prevState => !prevState)}
                    style={{marginRight: 10}}
                />
            )
        })
    }, [showNotificationRead])

    useEffect(() => {
        (async () => {
            try {
                const response = await notificationController.get_user_notifications(
                    accessToken,
                    auth.user_id,
                    showNotificationRead
                )
                setNotifications(response)
            } catch (error) {
                console.error(error);
            }
        })()
    }, [showNotificationRead])

    if(!notifications) return null

    return (
        <ListNotification 
            notifications={notifications}
        />
    )
}