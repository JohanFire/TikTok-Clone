import React from 'react'
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Text, Avatar } from 'react-native-elements'
import { DateTime } from "luxon";

import { DEFAULT_USER_AVATAR_2 } from "../../../../../../assets/images";
import { useAuth } from "../../../../../hooks";
import { Comment as CommentController } from "../../../../../api";

const commentController = new CommentController();

export function Comment(props) {
    const { comment } = props;
    const user = comment.user_data
    const { accessToken, auth } = useAuth();

    const confirm_delete_comment = () => {
        if (user.id === auth.user_id) {
            Alert.alert(
                "Eliminar comentario",
                "¿Estás seguro de querer eliminar el comentario?",
                [
                    {
                        text: "Cancelar",
                        style: "cancel",
                    },
                    {
                        text: "Eliminar",
                        onPress: delete_comment,
                    }

                ]
            );
        } else{
            Alert.alert(
                "Denunciar comentario",
                "",
                [
                    {
                        text: "Salir",
                        style: "cancel",
                    },
                    {
                        text: "Denunciar",
                    }

                ]
            )
        }
    }

    const delete_comment = async () => {
        try {
                await commentController.delete(accessToken, comment.id);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <TouchableOpacity
            style={styles.content}
            onLongPress={confirm_delete_comment}
        >
            <Avatar
                rounded
                source={user.avatar ? { uri: user.avatar } : DEFAULT_USER_AVATAR_2}
                size={35}
            />
            <View
                style={styles.info__content}
            >
                <Text style={styles.username}>{user.username}</Text>
                <Text style={styles.comment}>{comment.text}</Text>
                <Text style={styles.date}>
                    {
                        DateTime.fromISO(comment.created_at)
                            .setLocale("es")
                            .toFormat("dd-MM-yy")
                    }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 10,
        flexDirection: "row",
    },
    info__content: {
        marginLeft: 10,
    },
    username: {
        fontSize: 11,
        opacity: 0.6,
    },
    comment: {
        fontSize: 13,
        paddingVertical: 3,
        paddingRight: 20,
    },
    date: {
        fontSize: 11,
        opacity: 0.6,
    },
})