import React, { useRef, useState, useCallback } from 'react'
import { View, Pressable } from 'react-native'
import { Text } from 'react-native-elements'
import { Video } from "expo-av";
import { useFocusEffect } from "@react-navigation/native";

import { styles } from "./VideoFeed.styles";
import { Info } from "../Info";
import { Timeline } from "../Timeline";
import { Profile } from "../Profile";
import { Likes } from "../Likes";
import { Comments } from "../Comments";
import { Share } from "../Share";

export function VideoFeed(props) {
    const { item, index, indexShow, style } = props;
    const [isStarted, setIsStarted] = useState(false)
    const [videoStatus, setVideoStatus] = useState(null)
    const video = useRef(null);
    const user = item.user_data;

    useFocusEffect(
        useCallback(() => {
            setIsStarted(index === indexShow);
            return () => { setIsStarted(false); };
        }, [index, indexShow])
    );

    const startPauseVideo = () => setIsStarted((prevState) => !prevState)

    return (
        <Pressable
            style={[styles.content, style]}
            onPress={startPauseVideo}
        >
            <Video
                ref={video}
                style={styles.video}
                source={{ uri: item.video }}
                resizeMode='cover'
                isLooping
                shouldPlay={isStarted}
                onPlaybackStatusUpdate={(status) => setVideoStatus(status)}
            />

            <View style={styles.block__content} >
                <View style={styles.block__left}>
                    <Info username={user.username} description={item.description} />
                </View>
                <View style={styles.block__right}>
                    <Profile idUser={item.user} image={user.avatar} />
                    <Likes 
                        idVideo={item.id}
                        likesCounter={item.likes_counter}
                        // likesCounter={3200000}
                        idTargetUser={user.id}
                    />
                    <Comments 
                        idUser={user.is}
                        idVideo={item.id}
                    />
                    <Share 
                        idVideo={item.id}
                        shareCounter={item.share_counter}
                        idTargetUser={user.id}
                    />
                </View>
            </View>

            {videoStatus && <Timeline status={videoStatus} />}
        </Pressable>
    )
}