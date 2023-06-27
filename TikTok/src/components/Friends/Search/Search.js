import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Input } from 'react-native-elements'

export function Search(props) {
    const { setSearchText } = props;

    return (
        <View>
            <Input
                placeholder="Encuentra amigos"
                inputContainerStyle={styles.input__container}
                leftIcon={{
                    type: "material-community",
                    name: "magnify",
                }}
                onChangeText={(text) => setSearchText(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input__container:{
        borderBottomWidth: 0,
        borderRadius: 4,
        backgroundColor: "#2c2c2c",
        paddingHorizontal: 10,
    }
})