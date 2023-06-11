import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'

export function Timeline(props) {
    const { status } = props;
    
    const totalTime = status.playableDurationMillis
    const currentTime = status.positionMillis

    const currentPercentage = (currentTime * 100) / totalTime

    const lineStyle = {
        width: `${currentPercentage}%`
    }

    return (
        <View style={[styles.content, lineStyle]} >
            {/* <Text>Timeline: {currentPercentage}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        height: 3,
        backgroundColor: "#fff",
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
    },
})