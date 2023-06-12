import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Icon } from 'react-native-elements'

import { nFormatter } from "../../../../utils";

export function Comments(props) {
    const { idUser, idVideo } = props;

    const open_sheet = () => {
        console.log("Open comment container");
    }

    return (
        <View style={styles.content} >
            <Icon 
                type='material-community'
                name='comment-processing'
                size={40}
                onPress={open_sheet}
            />

            <Text>{nFormatter(99)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        alignItems: "center",
        marginBottom: 20,
    },
})