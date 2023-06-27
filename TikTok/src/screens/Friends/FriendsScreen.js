import React, { useState, useEffect } from 'react'
import { View, SafeAreaView, FlatList } from 'react-native'
import { Text } from 'react-native-elements'

import { Search, UserItem } from "../../components/Friends";
import { Users } from "../../api";
import { useAuth } from "../../hooks";

const userController = new Users();

export function FriendsScreen() {
    const { accessToken } = useAuth();
    const [searchText, setSearchText] = useState("")
    const [users, setUsers] = useState()

    useEffect(() => {
        (async () => {
            try {
                const response = await userController.obtains(
                    accessToken,
                    searchText
                )
                setUsers(response);
            } catch (error) {
                console.error(error);
            }
        })()
    }, [searchText])


    return (
        <View>
            <SafeAreaView>
                <Search setSearchText={setSearchText} />
            </SafeAreaView>

            <FlatList
                style={{
                    marginHorizontal: 12,
                    height: "100%",
                }}
                data={users}
                numColumns={4}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =><UserItem user={item} />}
                ListEmptyComponent={
                    <Text
                        style={{textAlign: "center"}}
                    >No se han encontrado resultados</Text>
                }
            />
        </View>
    )
}