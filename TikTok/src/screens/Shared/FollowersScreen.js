import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Text } from 'react-native-elements'

import { Follow } from "../../api";
import { useAuth } from "../../hooks";
import { FollowItem } from "../../components/Shared";

const followController = new Follow();

export function FollowersScreen(props) {
    const { route: { params } } = props;
    const [users, setUsers] = useState(null);
    const { accessToken } = useAuth();

    useEffect(() => {
        (async () => {
            try {
                const response = await followController.get_all_followers(
                    accessToken,
                    params.idUser
                );
                setUsers(response)
            } catch (error) {
                console.error(error);
            }
        })()
    }, [params.idUser])


    return (
        <View style={styles.content} >
            <Text style={styles.title} >Seguidores</Text>

            <FlatList
                data={users}
                renderItem={({ item }) => 
                    <FollowItem user={item.user_data} />
                }
                keyExtractor={(_, index) => index}
                ListEmptyComponent={
                    <View>
                        <Text>Todavía no tienes seguidores</Text>
                    </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        margin: 20,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        marginBottom: 20,
    },
})