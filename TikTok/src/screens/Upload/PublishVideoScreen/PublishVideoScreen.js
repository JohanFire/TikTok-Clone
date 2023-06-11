import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements';
import { useFormik } from "formik";

import { styles } from "./PublishVideoScreen.styles";
import { VideoData } from "../../../components/PublishVideo";
import { initial_values, validation_schema } from "./PublishVideoScreen.data";

export function PublishVideoScreen(props) {
    const { route: { params } } = props;
    // console.log(params.videoUri);

    const formik = useFormik({
        initialValues: initial_values(params.videoUri),
        validationSchema: validation_schema(),
        validationOnChange: false,
        onSubmit: (formValue) => {
            console.log(formValue);
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