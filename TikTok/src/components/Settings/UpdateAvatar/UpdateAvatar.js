import React from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { Text, Avatar, Icon } from 'react-native-elements'
import * as ImagePicker from "expo-image-picker";

import { DEFAULT_USER_AVATAR_2 as DEFAULT } from "../../../../assets/images";
import { User } from "../../../api/user";
import { useAuth } from "../../../hooks";

const userController = new User();

export function UpdateAvatar(props) {
    const { avatar, on_reload_user } = props;
    const { accessToken } = useAuth();

    const change_avatar = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) update_avatar(result.assets[0].uri)
    };

    const update_avatar = async (imageUri) => {
        try {
            await userController.update_avatar(accessToken, imageUri);
            on_reload_user();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Pressable
            style={styles.content}
            onPress={change_avatar}
        >
            <View
                style={styles.content__avatar}
            >
                <Avatar
                    size={100}
                    source={avatar ? { uri: avatar } : DEFAULT}
                    rounded
                    containerStyle={styles.avatar}
                />
                <View
                    style={styles.icon__content}
                >
                    <Icon
                        type='material-community'
                        name='camera-outline'
                        size={14}
                        containerStyle={styles.icon__container}
                        iconStyle={styles.icon}
                    />
                </View>
                <Text>Cambiar foto</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    content: {
        alignItems: "center",
        marginVertical: 20,
    },
    content__avatar: {
        position: "relative",
        width: 100,
        height: 100,
        marginBottom: 5,
    },
    avatar: {
        padding: 5,
    },
    icon__content: {
        position: "absolute",
        height: "100%",
        width: "100%",
        justifyContent: "center",
    },
    icon__container: {
        backgroundColor: "rgba(0,0,0,0.6)",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
    },
    icon: {
        fontSize: 50,
    },
})