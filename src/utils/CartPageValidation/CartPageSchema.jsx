import * as yup from 'yup'
export const CartPageSchema = yup.object().shape({
    quantity:yup.string().nullable().required("Quantity Is Required"),
    coupon:yup.string().nullable().required("Coupon Is Required"),
    postCode:yup.string().nullable().required("Post Code Is Required"),

})

export default CartPageSchema