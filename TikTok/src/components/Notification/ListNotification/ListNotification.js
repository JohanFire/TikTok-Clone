import React from 'react'
import { ScrollView, RefreshControl, ActivityIndicator } from 'react-native'
import { Text } from 'react-native-elements'
import { map } from "lodash";

import { ENV } from "../../../utils";
import { CommentNotification } from "../CommentNotification";

export function ListNotification(props) {
    const { notifications, refreshing, onRefresh } = props;

    return (
        <ScrollView
            refreshControl={
                <RefreshControl 
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                >
                    {refreshing && (
                        <ActivityIndicator 
                            size='large'
                            style={{marginTop: 20}}
                        />
                    )}
                </RefreshControl>
            }
        >
            {map(notifications, (notification) => {
                if(notification.type_notification === ENV.TYPE_NOTIFICATION.COMMENT) {
                    return (
                        <CommentNotification 
                            key={notification.id}
                            notification={notification}
                            readNotification={() => console.log("MARK AS READ")}
                        />
                    )
                }
                if(notification.type_notification === ENV.TYPE_NOTIFICATION.FOLLOW) {
                    return <Text key={notification.id}>FOLLOW</Text>
                }
                if(notification.type_notification === ENV.TYPE_NOTIFICATION.LIKE) {
                    return <Text key={notification.id}>LIKE</Text>
                }
                if(notification.type_notification === ENV.TYPE_NOTIFICATION.SHARED) {
                    return <Text key={notification.id}>SHARED</Text>
                }

                return null
            })}
        </ScrollView>
    )
}