import React, { useState, useEffect } from 'react'
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
    const [tabActive, setTabActive] = useState(0)
    const { accessToken } = useAuth();

    useEffect(() => {
        (async () => {
            try {
                const response = await userController.get_user(accessToken, idUser)
                console.log(response);
                navigation.setOptions({ title: response.first_name })
                setUser(response)
            } catch (error) {
                console.error(error);
            }
        })();
    }, [idUser])

    if (!user) return null

    return (
        <ScrollView>
            <Account.Header
                avatar={user.avatar}
                username={user.username}
            />
            <Account.Follows
                idUser={user.id}
            />
            <Account.Social
                idUser={user.id}
                instagram={user.instagram}
            />
            <Account.Info
                description={user.description}
                website={user.website}
            />

            <Tab
                value={tabActive}
                onChange={(e) => setTabActive(e)}
                indicatorStyle={{backgroundColor: "#fff"}}
            >
                <Tab.Item 
                    icon={{type: "material-community", name: "grid"}}
                    containerStyle={{backgroundColor: "transparent"}}
                />
                <Tab.Item 
                    icon={{type: "material-community", name: "heart"}}
                    containerStyle={{backgroundColor: "transparent"}}
                />
            </Tab>

            <TabView 
                value={tabActive}
                onChange={setTabActive}
                animationType="spring"
            >
                <TabView.Item>
                    <Account.Videos idUser={user.id} />
                </TabView.Item>
                <TabView.Item>
                <Account.VideosFavorites idUser={user.id} />
                </TabView.Item>
            </TabView>
        </ScrollView>
    )
}