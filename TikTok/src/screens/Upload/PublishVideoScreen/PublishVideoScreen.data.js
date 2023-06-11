import  * as Yup from "yup";

export function initial_values(videoUri){
    return{
        videoUri,
        description: "",
        imageUri: "",
    };
}

export function validation_schema(){
    return Yup.object({
        videoUri: Yup.string().required("Es obligatorio"),
        description: Yup.string().required("Es obligatorio"),
        imageUri: Yup.string().required("Es obligatorio"),
    })
}