import React from 'react'
import * as yup from 'yup'
export const ChangeFormSchema = yup.object().shape({
    currentpassword:yup.string().nullable().optional().required('Current Password Is Requried'),
    newpassword:yup.string().nullable().optional().required('New Password Is Requried'),
    confirmpassword:yup.string().nullable().optional().required('Confirm Password Is Requried'),
})
export default ChangeFormSchema