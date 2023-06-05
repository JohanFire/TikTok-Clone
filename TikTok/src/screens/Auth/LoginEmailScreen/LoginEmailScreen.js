import React, { useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import { Text, Input, Button } from "react-native-elements";
import { useFormik } from "formik";

import { styles } from "./LoginEmailScreen.styles";
import { initial_values, validation_schema } from "./LoginEmailScreen.data";

export function LoginEmailScreen() {
    const [showPassword, setShowPassword] = useState(false)

    const on_show_password = () => setShowPassword((prevState) => !prevState)

    const formik = useFormik({
        initialValues: initial_values(),
        validationSchema: validation_schema(),
        validationOnChange: false,
        onSubmit: (formValue) => {
            console.log(formValue);
        }
    })

    return (
        <SafeAreaView style={styles.content} >
            <View style={styles.form}>
                <Input
                    placeholder='Correo electrónico'
                    autoCapitalize='none'
                    onChangeText={(text) => formik.setFieldValue("email", text.toLowerCase())}
                    errorMessage={formik.errors.email}
                ></Input>
                <Input
                    placeholder='Contraseña'
                    autoCapitalize='none'
                    secureTextEntry={!showPassword}
                    rightIcon={{
                        type: "material-community",
                        name: showPassword ? "eye-off-outline" : "eye-outline",
                        onPress: on_show_password
                    }}
                    onChangeText={(text) => formik.setFieldValue("password", text)}
                    errorMessage={formik.errors.password}
                ></Input>
            </View>
            <Button
                title="Iniciar sesión"
                containerStyle={styles.btn__container}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
            />
        </SafeAreaView>
    )
}