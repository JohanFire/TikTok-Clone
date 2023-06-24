import React, {useState} from 'react'
import { StyleSheet, View, Share as ShareReactNative } from 'react-native'
import { Text, Icon } from 'react-native-elements'

import { nFormatter } from "../../../../utils";
import { Video } from "../../../../api";
import { useAuth } from "../../../../hooks";

const video = new Video();

export function Share(props) {
    const { idVideo, shared_counter, idTargetUser } = props;
    const [counter, setCounter] = useState(shared_counter)
    const { accessToken, auth } = useAuth();

    const on_share = async () => {
        try {
            const result = await ShareReactNative.share({
                message: "http://www.tiktokclone.com/compartir-video",
            });

            if (result.action === ShareReactNative.sharedAction) {
                on_update_share_counter();
                // console.log("Update Counter Share Video: ", result);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const on_update_share_counter = async () => {
        try {
            const newTotal = counter + 1
            const response = await video.share_video(accessToken, idVideo, newTotal);
            setCounter(newTotal)
            // console.log(response);
        } catch (error) {
            console.error("ww", error);
        }
    };

    return (
        <View style={styles.content}>
            <Icon
                type='material-community'
                name='share'
                size={40}
                onPress={on_share}
            />
            <Text>{nFormatter(counter)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
    },
})