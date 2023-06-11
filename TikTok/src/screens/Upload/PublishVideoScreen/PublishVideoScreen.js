import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements';
import { useFormik } from "formik";

import { styles } from "./PublishVideoScreen.styles";
import { VideoData } from "../../../components/PublishVideo";
import { initial_values, validation_schema } from "./PublishVideoScreen.data";
import { Video } from "../../../api";
import { useAuth } from "../../../hooks";
import { screen } from "../../../utils";

const video = new Video();

export function PublishVideoScreen(props) {
    const { navigation, route: { params } } = props;
    const { accessToken, auth } = useAuth();

    const formik = useFormik({
        initialValues: initial_values(params.videoUri),
        validationSchema: validation_schema(),
        validationOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await video.create(accessToken, formValue, auth.user_id)

                navigation.reset({
                    index: 0,
                    routes: [{ name: screen.home.tab }]
                })

            } catch (error) {
                console.error(error);
            }
        }
    });

    // console.log(formik.values);
    // console.log(formik.errors);

    return (
        <View style={styles.content}>
            <VideoData formik={formik} />

            <View style={styles.btn__submit}>
                <Button
                    title="Publicar"
                    onPress={formik.handleSubmit}
                    loading={formik.isSubmitting}
                />
            </View>
        </View>
    )
}