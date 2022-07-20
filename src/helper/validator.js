
import * as Yup from 'yup';
export const FormSchema = Yup.object().shape({
    title: Yup.string()
        .required('required'),
    country: Yup.string()
        .required('required'),
    city: Yup.string()
        .required('required'),
    age: Yup.string()
        .required('required'),
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    familyname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    reEmail: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    reEmail: Yup.string().email('Invalid email').required('Required'),



});