import React from 'react'
import { StyleSheet, View, Linking } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";

export function Settings(props) {
    const { instagram } = props;
    console.log(props);
    const navigation = useNavigation();

    const open_settings = () => {
        navigation.navigate(screen.account.settings, { instagram })
    };

    const open_url = () => {
        Linking.openURL(`${instagram}`)
    };

    return (
        <View style={styles.content}>
            <Button title="Editar perfil"
                buttonStyle={styles.settings}
                containerStyle={styles.settings}
                titleStyle={styles.setting__text}
                onPress={open_settings}
            />
            {
                instagram
                    ? (
                        <Button
                            icon={{
                                type: "material-community",
                                name: "instagram",
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
    settings: {
        borderRadius: 0,
        backgroundColor: "#2e2e2e",
        paddingHorizontal: 16,
        marginRight: 5,
        justifyContent: "center",
    },
    setting__text: {
        fontSize: 14
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