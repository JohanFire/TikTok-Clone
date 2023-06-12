import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Icon } from 'react-native-elements'

import { nFormatter } from "../../../../utils";
import { styles } from '../VideoFeed/VideoFeed.styles';

export function Share(props) {
    const { idVideo, shareCounter, idTargetUser } = props;

    const on_share = () => {
        console.log("Compartir video:", idVideo);
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