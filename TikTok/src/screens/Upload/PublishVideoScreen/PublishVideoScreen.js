import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements';

import { styles } from "./PublishVideoScreen.styles";
import { VideoData } from "../../../components/PublishVideo";

export function PublishVideoScreen(props) {
    const {route: {params}} = props;
    console.log(params.videoUri);

    return (
        <View style={styles.content}>
            <VideoData />

            <View style={styles.btn__submit}>
                <Button title="Publicar" onPress={() => console.log("Publicando...")} />
            </View>
        </View>
    )
}