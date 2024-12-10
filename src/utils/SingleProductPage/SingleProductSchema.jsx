
import * as yup from 'yup'
export const SingleProductSchema = yup.object().shape({
    code:yup.string().nullable().required("Discount Code Is Required"),

})
export default SingleProductSchema