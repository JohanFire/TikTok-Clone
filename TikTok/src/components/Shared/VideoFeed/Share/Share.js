import React from 'react'
import { StyleSheet, View, Share as ShareReactNative } from 'react-native'
import { Text, Icon } from 'react-native-elements'

import { nFormatter } from "../../../../utils";
import { styles } from '../VideoFeed/VideoFeed.styles';

export function Share(props) {
    const { idVideo, shareCounter, idTargetUser } = props;

    const on_share = async () => {
        try {
            const result = await ShareReactNative.share({
                message: "http://www.tiktokclone.com/compartir-video",
            });

            if (result.action === ShareReactNative.sharedAction) {
                console.log("Update Counter Share Video: ", result);
            } else {
                console.log(result);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.content}>
            <Icon 
                type='material-community'
                name='share'
                size={40}
                onPress={on_share}
            />
            <Text>{nFormatter(shareCounter)}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    content: {
        alignItems: 'center',
    },
})