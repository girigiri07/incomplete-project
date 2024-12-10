import * as yup from 'yup'
export const ShopSearchSchema = yup.object().shape({
    name:yup.string().nullable().required(" Product Name Is Required"),
 
})
export default ShopSearchSchema