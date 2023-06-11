import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'

export function Info(props) {
    const { username, description } = props;
    const [showLines, setShowLines] = useState(2)

    const open_close_description = () => {
        setShowLines(showLines === 2 ? 100 : 2);
    }

    return (
        <View style={styles.content} >
            <Text style={styles.username} >@{username}</Text>
            <Text
                // style={styles.description}
                numberOfLines={showLines}
            >{description}</Text>
            <Text
                style={styles.load__more}
                onPress={open_close_description}
            >{showLines === 2 ? "Ver más" : "Ocultar"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        width: "100%",
        padding: 10,
        marginBottom: 15,
    },
    username: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    load__more: {
        textAlign: "right",
        fontWeight: 'bold'
    },
});