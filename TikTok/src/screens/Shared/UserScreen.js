import React, {useState, useEffect} from 'react'
import { ScrollView } from 'react-native'
import { Tab, TabView } from 'react-native-elements'

import { User } from "../../api";
import { useAuth } from "../../hooks";
import { Account } from "../../components/Account";

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
    
    if(!user) return null

    return (
        <ScrollView>
            <Account.Header 
                avatar={user.avatar}
                username={user.username}
            />
        </ScrollView>
    )
}