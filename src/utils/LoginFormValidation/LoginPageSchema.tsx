
import * as yup from 'yup'
export const LoginPageSchema = yup.object().shape({
email :yup.string().nullable().optional().required('Email Is Requried'),
password :yup.string().nullable().required('Number Is Requried'),
}) 


export default LoginPageSchema