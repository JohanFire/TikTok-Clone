import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Icon } from 'react-native-elements'

const commentCounter = 0;

export function Header(props) {
    const {onClose} = props;

    const get_text_comment = () => {
        if (commentCounter === 1) return "comentario";
        return "comentarios";
    }

    return (
        <View style={styles.content}>
            <View/>
            <Text>{commentCounter} {get_text_comment()}</Text>
            <Icon 
                type='material-community'
                name='close'
                size={16}
                onPress={onClose}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
});