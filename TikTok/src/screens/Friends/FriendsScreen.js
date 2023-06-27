import React, { useState, useEffect } from 'react'
import { View, SafeAreaView } from 'react-native'
import { Text } from 'react-native-elements'

import { Search } from "../../components/Friends";
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
        </View>
    )
}