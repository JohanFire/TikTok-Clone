import React, { useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import { Input, Button } from "react-native-elements";
import { useFormik } from "formik";

import { styles } from "./RegisterEmailScreen.styles";
import { initial_values, validation_schema } from "./RegisterEmailScreen.data";
import { Auth } from "../../../api";

const auth = new Auth();

export function RegisterEmailScreen(props) {
    const { navigation } = props;
    const [showPassword, setShowPassword] = useState(false);

    const onShowPassword = () => setShowPassword(prevState => !prevState)

    const formik = useFormik({
        initialValues: initial_values(),
        validationSchema: validation_schema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await auth.register(formValue);
                navigation.goBack();
            } catch (error) {
                // console.log(error);
                console.error(error)
            }
        }
    })

    return (
        <SafeAreaView style={styles.content}>
            <View style={styles.form}>
                <Input
                    placeholder='Correo electrónico'
                    autoCapitalize='none'
                    onChangeText={(text) => formik.setFieldValue("email", text.toLowerCase())}
                    errorMessage={formik.errors.email}
                    />
                <Input
                    placeholder='Nombre(s)'
                    autoCapitalize='none'
                    onChangeText={(text) => formik.setFieldValue("first_name", text)}
                    errorMessage={formik.errors.first_name}
                    />
                <Input
                    placeholder='Apellido(s)'
                    autoCapitalize='none'
                    onChangeText={(text) => formik.setFieldValue("last_name", text)}
                    errorMessage={formik.errors.last_name}
                    />
                <Input
                    placeholder='Usuario'
                    autoCapitalize='none'
                    onChangeText={(text) => formik.setFieldValue("username", text)}
                    errorMessage={formik.errors.username}
                    />
                <Input
                    placeholder='Contraseña'
                    secureTextEntry={!showPassword}
                    rightIcon={{
                        type: "material-community",
                        name: showPassword ? "eye-off-outline" : "eye-outline",
                        onPress: onShowPassword
                    }}
                    onChangeText={(text) => formik.setFieldValue("password", text)}
                    errorMessage={formik.errors.password}
                    />
                <Input
                    placeholder='Confirmar Contraseña'
                    secureTextEntry={!showPassword}
                    rightIcon={{
                        type: "material-community",
                        name: showPassword ? "eye-off-outline" : "eye-outline",
                        onPress: onShowPassword
                    }}
                    onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
                    errorMessage={formik.errors.repeatPassword}
                />
            </View>
            <Button
                title="Registrarse"
                containerStyle={styles.btnContainer}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
            />
        </SafeAreaView>
    )
}