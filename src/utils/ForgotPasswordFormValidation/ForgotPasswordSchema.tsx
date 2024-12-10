import React from 'react'
import * as yup from 'yup'
export const ForgotPasswordSchema = yup.object().shape({
    email:yup.string().nullable().optional().required('Email Is Required')

})

export default ForgotPasswordSchema