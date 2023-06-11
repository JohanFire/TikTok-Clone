import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Icon } from 'react-native-elements'

export function Likes(props) {
    const { idVideo, likesCounter, idTargetUser } = props;
    const [isLike, setIsLike] = useState(false);

    return (
        <View style={styles.content} >
            <Icon
                type='material-community'
                name="heart"
                size={40}
                onPress={() => console.log("LIKE !")}
                iconStyle={isLike ? styles.likeOK : styles.like}
            />
            <Text>{likesCounter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        marginBottom: 20,
    },
    like: {
        color: "#fff",
    },
    likeOK: {
        color: "#F00"
    },
})