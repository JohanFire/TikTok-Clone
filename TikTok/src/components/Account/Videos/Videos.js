import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'

import { Video } from "../../../api";
import { useAuth } from "../../../hooks";

const video = new Video();

export function Videos(props) {
    const { idUser } = props;
    const [videos, setVideos] = useState(null)
    const { accessToken } = useAuth();

    useEffect(() => {
        (async () => {
            try {
                const response = await video.get_user_videos(accessToken, idUser)
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        })()
    }, [])


    return (
        <View>
            <Text>Videos</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})