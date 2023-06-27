import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, View, Pressable, Dimensions } from 'react-native'
import { Text, Image } from 'react-native-elements'
import { map, size } from "lodash";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Video } from "../../../api";
import { useAuth } from "../../../hooks";
import { screen } from "../../../utils";

const video = new Video();
const { width } = Dimensions.get('screen')

export function VideosFavorites(props) {
    const { idUser } = props;
    const [videos, setVideos] = useState(null);
    const { accessToken } = useAuth();
    const navigation = useNavigation();

    const go_to_favorite_video = (data) => {
        navigation.navigate(screen.app.videosFavorites, {
            idUser,
            idVideo: data.video_data.id,
        });
    };

    useFocusEffect(
        useCallback(
            () => {
                (async () => {
                    try {
                        const response = await video.get_favorite_user_videos(
                            accessToken,
                            idUser
                        )
                        // console.log("response", response);
                        setVideos(response)
                    } catch (error) {
                        console.error(error);
                    }
                })()
            },
            [idUser],
        )
    )

    if (!videos) return null;

    return (
        <View style={styles.content}>
            {map(videos, (video, index) => (
                <Pressable
                    key={index}
                    style={styles.video__block}
                    onPress={() => go_to_favorite_video(video)}
                >
                    <Image
                        source={{ uri: video.video_data.image }}
                        style={styles.image}
                    />
                </Pressable>
            ))}

            {size(videos) === 0 && (
                <View style={styles.no__videos}>
                    <Text>No tienes ningun video favorito</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        width: width,
    },
    video__block: {
        width: "33.3333%",
        height: 200,
    },
    no__videos: {
        width: "100%",
        alignItems: "center",
        opacity: 0.6,
        marginTop: 20,
    },
    image:{
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    }
})