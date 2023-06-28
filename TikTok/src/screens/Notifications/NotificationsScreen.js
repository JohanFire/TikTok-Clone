import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { Icon } from 'react-native-elements'

import { Notification } from "../../api";
import { useAuth } from "../../hooks";
import { ListNotification } from "../../components/Notification";

const notificationController = new Notification();

export function NotificationsScreen(props) {
    const { navigation } = props;
    const [notifications, setNotifications] = useState(null);
    const [showNotificationRead, setShowNotificationRead] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const { accessToken, auth } = useAuth();

    const on_refresh = async () => {
        setRefreshing(true)
        try {
            const response = await notificationController.get_user_notifications(
                accessToken,
                auth.user_id,
                showNotificationRead
            )
            setNotifications(response)
        } catch (error) {
            console.error(error);
        } finally {
            setRefreshing(false)
        }
    };

    const read_notification = (idNotification, setIsRead) => {
        Alert.alert("¿Marcar como leído?", "", [{
            text: "No",
            style: "cancel",
        },
        {
            text: "Sí",
            onPress: async () => {
                try {
                    await notificationController.mark_notification_as_read(accessToken, idNotification)
                    setIsRead(true)
                } catch (error) {
                    console.error(error);
                }
            }
        }])
    };

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
                    style={{ marginRight: 10 }}
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

    if (!notifications) return null

    return (
        <ListNotification
            notifications={notifications}
            onRefresh={on_refresh}
            refreshing={refreshing}
            readNotification={read_notification}
        />
    )
}