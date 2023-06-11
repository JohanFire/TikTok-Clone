import React from 'react'
import { View, Pressable } from 'react-native'
import { Text } from 'react-native-elements'

import { styles } from "./VideoFeed.styles";

export function VideoFeed(props) {
    const {item} = props;
    console.log(item);

    const startPauseVideo = () => {
        console.log("startPauseVideo...");
    }

    return (
        <Pressable
            style={styles.content}
            onPress={startPauseVideo}
        >
            {/* VIDEO REPRODUCER goes here */}
            <View style={{backgroundColor: "red", height: "100%"}} >
                <Text>VIDEO</Text>
            </View>

            <View style={styles.block__content} >
                <View style={styles.block__left}>
                    <Text>{item.user_data.username}</Text>
                    <Text
                    style={{marginBottom: 30}}
                    >{item.description}</Text>
                </View>
                <View style={styles.block__right}>
                    <Text>PROFILE</Text>
                    <Text>LIKES</Text>
                    <Text>COMMENTS</Text>
                    <Text>SHARED</Text>
                </View>
            </View>

            {/* ToDo: TIME LINE */}
            <Text>TIME LINE</Text>
        </Pressable>
    )
}