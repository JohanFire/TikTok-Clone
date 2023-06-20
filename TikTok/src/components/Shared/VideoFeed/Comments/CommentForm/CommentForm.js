import React from 'react'
import { View, StyleSheet, Platform, Keyboard } from 'react-native'
import { Input } from 'react-native-elements'

import { useTheme } from "../../../../../hooks";

export function CommentForm(props) {
    const { idTargetUser, idVideo, onReloadComments } = props;
    const styles = styled();

    return (
        <View
            style={styles.content}
        >
            <Input 
                placeholder='Añadir Comentario...'
                inputContainerStyle={styles.input__container}
                inputStyle={styles.input__style}
                onChangeText={text => console.log(text)}
            />
        </View>
    )
}

const styled = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        content: {
            backgroundColor: theme.Default.backgroundSecondary,
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 80,
            paddingTop: 10,
        },
        input__container: {
            backgroundColor: "#333333",
            borderBottomWidth: 0,
            borderRadius: 11,
            paddingHorizontal: 5,
        },
        input__style: {
            fontSize: 14,

        },
    })
}