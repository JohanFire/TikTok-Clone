import React from 'react'
import { View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { useFormik } from "formik";
import * as Yup from "yup";

import { User } from "../../api";
import { useAuth } from "../../hooks";

const user = new User();

export function ChangeWebsiteScreen(props) {
    const { route: { params }, navigation } = props;
    const { accessToken } = useAuth();

    const formik = useFormik({
        initialValues: { website: params.website },
        validationSchema: Yup.object({
            website: Yup.string(),
        }),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await user.update_user(accessToken,
                    { website: formValue.website }
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
                placeholder='Sitio web'
                autoCapitalize='none'
                value={formik.values.website}
                onChangeText={text => formik.setFieldValue("website", text)}
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