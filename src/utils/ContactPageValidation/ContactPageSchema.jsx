import React from 'react'
import * as yup from 'yup'
export const ContactSchema = yup.object().shape({
    name:yup.string().nullable().optional().required('Name Is Required'),
    email:yup.string().nullable().optional().required('Email Is Required'),
    number:yup.string().nullable().optional().required('Phone Number Is Required'),
    subject:yup.string().nullable().optional().required('Subject Is Required'),
    message:yup.string().nullable().optional().required('Message Is Required'),

})

export default ContactSchema