import React, { useRef, useState, useCallback } from 'react'
import { View, Pressable } from 'react-native'
import { Text } from 'react-native-elements'
import { Video } from "expo-av";
import { useFocusEffect } from "@react-navigation/native";

import { styles } from "./VideoFeed.styles";

export function VideoFeed(props) {
    const { item, index, indexShow } = props;
    const [isStarted, setIsStarted] = useState(false)
    const video = useRef(null);

    useFocusEffect(
        useCallback(() => {
            setIsStarted(index === indexShow);
            return () => { setIsStarted(false); };
        }, [index, indexShow])
    );

    const startPauseVideo = () => setIsStarted((prevState) => !prevState)

    return (
        <Pressable
            style={styles.content}
            onPress={startPauseVideo}
        >
            {/* VIDEO REPRODUCER goes here */}
            <Video
                ref={video}
                style={styles.video}
                source={{ uri: item.video }}
                resizeMode='cover'
                isLooping
                shouldPlay={isStarted}
            />

            <View style={styles.block__content} >
                <View style={styles.block__left}>
                    <Text>{item.user_data.username}</Text>
                    <Text
                        style={{ marginBottom: 30 }}
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