import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { Text } from 'react-native-elements'

import { Video } from "../../api";
import { useAuth } from "../../hooks";

const videoController = new Video();

export function ForYouVideos() {
    const [videos, setVideos] = useState(null);
    const { accessToken } = useAuth();

    useEffect(() => {
        if (accessToken) {
            (async () => {
                try {
                    const response = await videoController.get_all_videos(accessToken);
                    setVideos(response);
                } catch (error) {
                    console.error(error);
                }
            })()
        }
    }, [])

    return (
        <SafeAreaView>
            <Text>ForYouVideos</Text>
        </SafeAreaView>
    )
}