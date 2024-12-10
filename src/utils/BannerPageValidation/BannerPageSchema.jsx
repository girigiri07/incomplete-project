import React from 'react'
import * as yup from 'yup'
export const BannerPageSchema = yup.object().shape({
    productname:yup.string().nullable().optional().required('Product Name Is Requried'),
 
})
export default BannerPageSchema