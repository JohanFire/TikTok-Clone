import React from 'react'
import { View } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import { useFormik } from "formik";
import * as Yup from "yup";

import { User } from "../../api";
import { useAuth } from "../../hooks";

const user = new User();

export function ChangeLastNameScreen(props) {
    const { route: { params }, navigation } = props;
    // console.log(props);
    const { accessToken } = useAuth();

    const formik = useFormik({
        initialValues: { last_name: params.last_name },
        validationSchema: Yup.object({
            last_name: Yup.string().required("El campo es obligatorio"),
        }),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await user.update_user(accessToken,
                    { last_name: formValue.last_name }
                )
                navigation.goBack()
            } catch (error) {
                console.error(error);
            }
        }
    })

    return (
        <View style={{ marginHorizontal: 20 }}>
            <Input 
                placeholder='Apellido'
                autoCapitalize='words'
                value={formik.values.last_name}
                onChangeText={text => formik.setFieldValue("last_name", text)}
                errorMessage={formik.errors.name}
            />
            <Button 
                title="Guardar"
                style={{marginTop: 10}}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
            />
        </View>
    )
}