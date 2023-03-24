import { object, array, string, date, number } from "yup";

const loginSchema = object().shape({
    email: string()
        .trim()
        .email('This field must be a valid email')
        .min(2, 'This field must be at least 2 characters')
        .max(20, 'This field must be at most 20 characters')
        .required('This field must not be empty'),
    password: string()
        .required("This field must not be empty")
})
 
export default loginSchema;