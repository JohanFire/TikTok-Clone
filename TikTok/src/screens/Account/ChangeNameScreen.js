import React from 'react'
import { View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { useFormik } from "formik";
import * as Yup from "yup";

import { User } from "../../api";
import { useAuth } from "../../hooks";

const user = new User();

export function ChangeNameScreen(props) {
    const { route: { params }, navigation } = props;
    const { accessToken } = useAuth();

    const formik = useFormik({
        initialValues: { name: params.name },
        validationSchema: Yup.object({
            name: Yup.string().required("El nombre es obligatorio"),
        }),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await user.update_user(accessToken,
                    { first_name: formValue.name }
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
                // value={""}
                // onChange={() => { }}
                placeholder='Nombre'
                autoCapitalize='words'
                value={formik.values.name}
                onChangeText={text => formik.setFieldValue("name", text)}
                errorMessage={formik.errors.name}
            />
            <Button
                title="Guardar"
                style={{ marginTop: 10 }}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
            />
        </View>
    )
}