import React from 'react'
import { View, Pressable } from 'react-native'
import { Text, Input, Image } from 'react-native-elements'

import { styles } from "./VideoData.styles";

export function VideoData(props) {
    const { formik } = props;

    return (
        <View style={styles.content}>
            <Input
                placeholder='Descripción'
                containerStyle={styles.input__container}
                inputContainerStyle={styles.input__container}
                inputStyle={styles.input}
                multiline
                onChangeText={text => formik.setFieldValue("description", text)}
            />

            <Pressable
                style={styles.image__container}
                onPress={() => console.log("Click")}
            >
                <Image
                    style={styles.image}
                    source={{ uri: null }}
                />
                <Text
                    style={styles.image__text}
                >Seleccionar portada</Text>
            </Pressable>

        </View>
    )
}