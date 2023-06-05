import * as Yup from "yup";

export function initial_values() {
    return {
        email: "",
        password: "",
    };
}

export function validation_schema() {
    return Yup.object({
        email: Yup.string()
            .email("Ingresa un email válido")
            .required("Campo obligatiorio"),
        password: Yup.string()
            .required("Campo obligatorio")
    })
}