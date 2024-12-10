
import * as yup from 'yup'
export const SignUpPageSchema = yup.object().shape({
    name:yup.string().nullable().required("Name Is Required"),
   email:yup.string().nullable().optional().required('Email Is Requried'),
   password:yup.string().nullable().optional().required('Password Is Requried'),
   confirmpassword :yup.string().nullable().optional().required(' Confirm Password Is Requried'),
})
export default SignUpPageSchema