import React from 'react'
import { View, Pressable } from 'react-native'
import { Text, Input, Image } from 'react-native-elements'
import * as ImagePicker from "expo-image-picker";

import { styles } from "./VideoData.styles";

export function VideoData(props) {
    const { formik } = props;

    const selected_image_video = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [16,9],
            quality: 1,
        });

        if (!result.canceled) {
            formik.setFieldValue("imageUri", result.assets[0].uri)
        } else {
            
        }
    };

    return (
        <View style={styles.content}>
            <Input
                placeholder='Descripción'
                containerStyle={styles.input__container}
                inputContainerStyle={styles.input__container}
                inputStyle={styles.input}
                // multiline
                onChangeText={text => formik.setFieldValue("description", text)}
            />

            <Pressable
                style={styles.image__container}
                onPress={selected_image_video}
            >
                <Image
                    style={styles.image}
                    source={{ uri: formik.values.imageUri || null }}
                />
                <Text
                    style={styles.image__text}
                >Seleccionar portada</Text>
            </Pressable>

        </View>
    )
}