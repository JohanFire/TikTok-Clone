import React, { useState, } from 'react'
import { StyleSheet, View, Linking } from 'react-native'
import { Text, Button } from 'react-native-elements'

export function Social(props) {
    const { instagram } = props;
    const [isFollowing, setIsFollowing] = useState(undefined)

    const open_url = () => {
        Linking.openURL(`https://www.instagram.com/${instagram}`)
    };

    return (
        <View style={styles.content}>
            {isFollowing === false
                ? (
                    <Button
                        title="Seguir"
                        buttonStyle={styles.follow}
                        containerStyle={styles.follow}
                        onPress={() => console.log("SEGUIR USER")}
                    />
                )
                : null}

            {isFollowing
                ? (
                    <Button
                        icon={{ type: "material-community", name: "account-check-outline" }}
                        buttonStyle={styles.unfollow}
                        containerStyle={styles.unfollow}
                        onPress={() => console.log("UNFOLLOW USER")}
                    />
                )
                : null
            }


            {
                instagram
                    ? (
                        <Button
                            icon={{
                                type: "material-community",
                                name: "instagram"
                            }}
                            buttonStyle={styles.social}
                            containerStyle={styles.social}
                            onPress={open_url}
                        />
                    )
                    : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },
    follow: {
        borderRadius: 0,
        backgroundColor: "#c90202",
        justifyContent: "center",
        width: 150,
        height: 40,
        padding: 0,
        margin: 0,
        marginRight: 10,
    },
    unfollow: {
        borderRadius: 0,
        backgroundColor: "#2e2e2e",
        justifyContent: "center",
        width: 40,
        height: 40,
        padding: 0,
        margin: 0,
        marginRight: 10,
    },
    social: {
        borderRadius: 0,
        backgroundColor: "#2e2e2e",
        justifyContent: "center",
        width: 40,
        height: 40,
        padding: 0,
        margin: 0,
    },
})