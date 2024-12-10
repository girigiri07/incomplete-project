
import * as yup from 'yup'
export const TablePageSchema = yup.object().shape({
    search:yup.string().nullable().required(" Search Is Required"),
    firstname:yup.string().nullable().required(" First Name Is Required"),
    lastname:yup.string().nullable().required(" Last Name Is Required"),
age:yup.number().nullable().optional().required('Number Is Requried'),
   gender:yup.string().nullable().optional().required('Gender Is Requried'),
   
})
export default TablePageSchema