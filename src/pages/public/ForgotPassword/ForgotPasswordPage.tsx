import React from 'react'
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ForgotPasswordSchema from '../../../utils/ForgotPasswordFormValidation/ForgotPasswordSchema';
import forgotPasswordFormTypes from '../../../utils/ForgotPasswordFormValidation/ForgotPasswordType';
import { 
  TextField,
  Button,
  Typography,
} from '@mui/material'
export const ForgotPasswordPage = () => {



    const {
        control : forgotPasswordPageController,
        formState: { errors: forgotpasswordPageErrors },
        handleSubmit,
        reset,
    } = useForm<forgotPasswordFormTypes>({
        criteriaMode: "all",
        defaultValues : {
            email:'',
           
        },
        mode: "all",
        reValidateMode: "onChange",
        resolver:yupResolver(ForgotPasswordSchema)
    })


    const handleForgotPasswordData =(forgotPasswordData:any) =>{
        console.log(forgotPasswordData)
    }
  return (
    <Typography component={'div'}>
        <Controller 
        control={forgotPasswordPageController}
        name='email'
        defaultValue={''}
        render={({field : {onChange , ref , value , name} , formState} ) =>{
            return(
                <TextField 
                name={name}
                type='email'
                onChange={onChange}
                value={value}
                label='Email'
                variant='outlined'
                />
            )
        } }
        />

<Typography component={'div'}>
            <Button onClick={handleSubmit(handleForgotPasswordData)}>
                Submit
            </Button>
        </Typography>
    </Typography>
  )
}
