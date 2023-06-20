import React, { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Text, Tab, TabView } from 'react-native-elements'

export function AccountScreen() {
    const [tabActive, setTabActive] = useState(0);

    return (
        <ScrollView>
            <Text>Header</Text>
            <Text>Follows</Text>
            <Text>Settings</Text>
            <Text>User Info</Text>

            <Tab
                value={tabActive}
                onChange={e => setTabActive(e)}
                indicatorStyle={styles.tab__indicator}
            >
                <Tab.Item 
                containerStyle={styles.tab__item_container} 
                icon={{type: "material-community", name: "grid"}}
                />
                <Tab.Item 
                containerStyle={styles.tab__item_container} 
                icon={{type: "material-community", name: "heart"}}
                />
            </Tab>

            <TabView 
                value={tabActive}
                onChange={setTabActive}
                animationType='spring'
            >
                <TabView.Item>
                    <Text>Videos subidos</Text>
                </TabView.Item>
                <TabView.Item>
                    <Text>Videos Favoritos</Text>
                </TabView.Item>
            </TabView>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    tab__indicator: {
        backgroundColor: "#fff"
    },
    tab__item_container: {
        backgroundColor: "transparent"
    }
})