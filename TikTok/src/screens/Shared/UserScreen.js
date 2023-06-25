import React, {useState, useEffect} from 'react'
import { ScrollView } from 'react-native'
import { Text, Tab, TabView } from 'react-native-elements'

import { User } from "../../api";
import { useAuth } from "../../hooks";

const userController = new User();

export function UserScreen(props) {
    const { route: { params }, navigation } = props;
    const idUser = params.idUser
    const [user, setUser] = useState(null);
    const {accessToken} = useAuth();

    useEffect(() => {
        (async () => {
            try {
                const response = await userController.get_user(accessToken, idUser)
                console.log(response);
                navigation.setOptions({title: response.first_name})
                setUser(response)
            } catch (error) {
                console.error(error);
            }
        })();
    }, [idUser])
    

    return (
        <ScrollView>
            <Text>UserScreen</Text>
        </ScrollView>
    )
}