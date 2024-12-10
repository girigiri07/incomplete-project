import * as yup from 'yup'
export const RegisterSchema = yup.object().shape({
    name:yup.string().nullable().required("Name Is Required"),
   email:yup.string().nullable().optional().required('Email Is Requried'),
   number:yup.number().nullable().optional().required('Number Is Requried'),
  
})
export default RegisterSchema