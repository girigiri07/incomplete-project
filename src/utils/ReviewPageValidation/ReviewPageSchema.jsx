
import * as yup from 'yup'
export const ReviewPageSchema = yup.object().shape({
    fullName :yup.string().nullable().optional().required('Name Is Requried'),
email :yup.string().nullable().optional().required('Email Is Requried'),
message :yup.string().nullable().required('Suggestion Is Requried'),
}) 

export default ReviewPageSchema