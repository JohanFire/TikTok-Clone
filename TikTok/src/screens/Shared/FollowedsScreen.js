import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

import { Follow } from "../../api";
import { useAuth } from "../../hooks";

const followController = new Follow();

export function FollowedsScreen(props) {
    const { route: { params } } = props;
    const [users, setUsers] = useState(null);
    const { accessToken } = useAuth();

    useEffect(() => {
        (async () => {
            try {
                const response = await followController.get_all_following(
                    accessToken,
                    params.idUser
                );
                console.log("response: ", response);
                setUsers(response);
            } catch (error) {
                console.error(error);
            }
        })()
    }, [params.idUser]) // cada vez params.idUser cambie

    return (
        <View>
            <Text>FollowedsScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})