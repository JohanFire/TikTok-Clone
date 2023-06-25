import React from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { Text, Icon } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native";

import { screen } from "../../../utils";

export function UpdateData(props) {
    const { name, last_name, username, description, email, website, instagram } = props;
    const navigation = useNavigation();

    const go_to_change_name = () => {
        navigation.navigate(screen.account.changeName, { name })
    }

    const go_to_change_last_name = () => {
        navigation.navigate(screen.account.changeLastName, { last_name })
    }

    const go_to_change_description = () => {
        navigation.navigate(screen.account.changeDescription, { description })
    }

    const go_to_change_website = () => {
        navigation.navigate(screen.account.changeWebsite, { website })
    }

    const go_to_change_instagram = () => {
        navigation.navigate(screen.account.changeInstagram, { instagram })
    }

    return (
        <View style={styles.content}>
            <Text style={styles.title}>Acerca de ti</Text>

            <Block_Item
                title="Nombre de usuario:"
                value={username}
            />
            <Block_Item
                title="Correo electrónico:"
                value={email}
            />
            <Block_Item
                title="Nombre:"
                value={name}
                onPress={go_to_change_name}
            />
            <Block_Item
                title="Apellido:"
                value={last_name}
                onPress={go_to_change_last_name}
            />
            <Block_Item
                title="Descripción:"
                value={description}
                onPress={go_to_change_description}
            />

            <Text style={styles.title}>Social</Text>
            <Block_Item
                title="Sitio web:"
                value={website}
                onPress={go_to_change_website}
            />
            <Block_Item
                title="Instagram:"
                value={instagram}
                onPress={go_to_change_instagram}
            />
        </View>
    )
}

function Block_Item(props) {
    const { title, value, onPress } = props;

    return (
        <Pressable style={styles.block} onPress={onPress}>
            <Text>{title}</Text>
            <View style={styles.block__content}>
                <Text
                    style={styles.block__value}
                    numberOfLines={1}
                >
                    {value}
                </Text>
                {onPress && (
                    <Icon
                        type='material-community'
                        name="chevron-right"
                        iconStyle={styles.icon}
                    />
                )}
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
    },
    title: {
        marginTop: 20,
        marginBottom: 10,
        opacity: 0.5,
    },
    block: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    block__content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    block__value: {
        maxWidth: 150,
    },
    icon: {
        fontSize: 20,
        opacity: 0.6,
        marginLeft: 5,
    }
})