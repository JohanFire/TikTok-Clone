import React, { useState, useEffect } from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import { Text } from 'react-native-elements'

import { useAuth } from "../../hooks";
import { Video } from "../../api";

const video = new Video();

export function VideosPublishedScreen(props) {
    const { route: { params } } = props;
    const { accessToken } = useAuth();
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await video.get_user_videos(
                    accessToken,
                    params.idUser
                );
                setVideos(response)
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        })()
    }, [])


    return (
        <View>
            <Text>VideosPublishedScreen</Text>
        </View>
    )
}