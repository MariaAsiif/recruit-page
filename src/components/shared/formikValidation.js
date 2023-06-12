
import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email")
        .required("Email is required"),
    password: Yup.string()
        .required("Passwort is required")
        .min(6, "Password too short! Must be at least 6 characters."),
    acceptTOS: Yup.bool().oneOf(
        [true],
        "You must accept our Terms and Conditions!"
    ),
});