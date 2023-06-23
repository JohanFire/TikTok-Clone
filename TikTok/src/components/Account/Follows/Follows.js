import React from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { Text } from 'react-native-elements'

export function Follows(props) {
    const { idUser } = props;
    const navigation = useNavigation();

    const open_followeds = () => {
        navigation.navigate( screen.app.followeds, { idUser } )
    }
    
    const open_followers = () => {
        navigation.navigate( screen.app.followers, { idUser } )
    };

    return (
        <View style={styles.content}>
            <Pressable style={styles.item} onPress={open_followeds}>
                <Text style={styles.count}>64</Text>
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