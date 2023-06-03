import * as Yup from "yup";

export function initial_values() {
    return {
        email: "",
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        repeatPassword: "",
    };
}

export function validation_schema() {
    return Yup.object({
        email: Yup.string()
            .email("Ingresa un email válido")
            .required("Campo obligatorio"),
        first_name: Yup.string().required("Campo obligatorio"),
        last_name: Yup.string().required("Campo obligatorio"),
        username: Yup.string().required("Campo obligatorio"),
        password: Yup.string().required("Campo obligatorio"),
        repeatPassword: Yup.string()
            .required("Campo obligatorio")
            .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    });
}
