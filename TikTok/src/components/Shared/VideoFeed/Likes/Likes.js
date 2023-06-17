import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Icon } from 'react-native-elements'

import { nFormatter } from "../../../../utils";
import { Video } from "../../../../api";
import { useAuth } from "../../../../hooks";

const video = new Video();

export function Likes(props) {
    const { idVideo, likesCounter, idTargetUser } = props;
    const [isLike, setIsLike] = useState(false);
    const [likes, setLikes] = useState(likesCounter)
    const { accessToken, auth } = useAuth();
    const idUser = auth.user_id;

    useEffect(() => {
        (async () => {
            try {
                const response = await video.is_like(accessToken, idVideo, idUser);
                setIsLike(response)
            } catch (error) {
                console.log(error);
                console.error(error);
            }
        })()
    }, [idVideo, idUser]);

    const add_like = async () => {
        try {
            const newLikes = likes + 1
            await video.create_like(accessToken, idVideo, idUser)
            await video.update_likes(accessToken, idVideo, newLikes)

            setLikes(newLikes);
        } catch (error) {
            console.error(error);
        }
    }

    const delete_like = () =>  {
        console.log('Delete like');
    };

    return (
        <View style={styles.content} >
            <Icon
                type='material-community'
                name="heart"
                size={40}
                onPress={isLike ? delete_like : add_like}
                iconStyle={isLike ? styles.likeOK : styles.like}
            />
            <Text>{nFormatter(likes)}</Text>
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