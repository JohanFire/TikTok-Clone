import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text, Icon } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";

import { screen } from "../../../utils";

export function Info(props) {
    const { description, website } = props;
    // console.log(props);
    const navigation = useNavigation();

    const open_url = () =>  {
        WebBrowser.openBrowserAsync(website)
    };

    return (
        <View style={styles.content}>
            {
                description
                ? <Text style={styles.text}>{description}</Text>
                : null
            }
            {
                website
                ? <TouchableOpacity style={styles.link__content} onPress={open_url}>
                    <Icon 
                        type='material-community'
                        name='link-variant'
                        size={14}
                        containerStyle={styles.icon__container}
                    />
                    <Text style={styles.text}>{website}</Text>
                </TouchableOpacity>
                : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        alignItems: "center",
        marginVertical: 20,
    },
    text:{
        fontSize: 12,
        textAlign: 'center',
    },
    link__content:{
        flexDirection: "row",
        marginTop: 10,
        alignItems: "center",
    },
    icon__container:{
        width: 14,
        height: 14,
        marginRight: 5,
    },
})