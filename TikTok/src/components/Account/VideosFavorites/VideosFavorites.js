import React, {useState, useEffect} from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

import { Video } from "../../../api";
import { useAuth } from "../../../hooks";

const video = new Video();

export function VideosFavorites(props) {
    const { idUser } = props;
    const [videosFavorites, setVideosFavorites] = useState(null);
    const { accessToken } = useAuth();

    useEffect(() => {
        (async () => {
            try {
                const response = await video.get_favorite_user_videos(accessToken, idUser)
                console.log("videos_favorites: ", response);
            } catch (error) {
                console.error(error);
            }
        })()
    }, [])
    
    return (
        <View>
            <Text>VideosFavorites screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})