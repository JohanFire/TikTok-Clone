import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Text } from 'react-native-elements'

import { screen } from "../../../utils";
import { Follow } from "../../../api";
import { useAuth } from "../../../hooks";

const follow = new Follow();

export function Follows(props) {
    const { idUser } = props;
    const [followingCount, setFollowingCount] = useState(0)
    const navigation = useNavigation();
    const { accessToken } = useAuth();

    useEffect(() => {
        (async () => {
            try {
                const response = await follow.get_following_count(accessToken, idUser);
                setFollowingCount(response);
            } catch (error) {
                console.error(error);
            }
        })()
    }, [])
    

    const open_followeds = () => {
        navigation.navigate(screen.app.followeds, { idUser })
    }

    const open_followers = () => {
        navigation.navigate(screen.app.followers, { idUser })
    };

    return (
        <View style={styles.content}>
            <Pressable style={styles.item} onPress={open_followeds}>
                <Text style={styles.count}>{followingCount}</Text>
                <Text style={styles.title}>Siguiendo</Text>
            </Pressable>
            <Pressable style={styles.item} onPress={open_followers}>
                <Text style={styles.count}>416</Text>
                <Text style={styles.title}>Seguidores</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },
    item: {
        alignItems: "center",
        paddingHorizontal: 20,
    },
    count: {
        fontWeight: "bold",
    },
    title: {
        color: "#8a8a8a",
        fontSize: 12,
    }
})