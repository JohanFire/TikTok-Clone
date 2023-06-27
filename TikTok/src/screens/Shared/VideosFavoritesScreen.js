import React, { useState, useEffect, useRef } from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import { Text } from 'react-native-elements'
import { forEach } from "lodash";

import { useAuth } from "../../hooks";
import { Video } from "../../api";
import { VideoFeed } from "../../components/Shared";

const video = new Video();

export function VideosFavoritesScreen(props) {
    const {
        route: { params },
    } = props;
    const [videos, setVideos] = useState(null);
    const [indexStart, setIndexStart] = useState(null);
    const { accessToken } = useAuth();

    useEffect(() => {
        (async () => {
            try {
                const response = await video.get_favorite_user_videos(accessToken, params.idUser);
                setVideos(response);
            } catch (error) {
                console.error(error);
            }
        })()
    }, [params])
    

    return (
        <View>
            <Text>VideosFavoritesScreen</Text>
        </View>
    )
}