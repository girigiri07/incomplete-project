import React from 'react'
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import changePasswordType from '../../../utils/ChangeFormValidation/ChangeFormType';
import ChangeFormSchema from '../../../utils/ChangeFormValidation/ChangeFormSchema';
import { 
    TextField,
    Button,
    Typography,
  } from '@mui/material'
export const ChangePasswordpage = () => {

  
  const {
    control : ChangePasswordController,
    formState: { errors: ChangePasswordErrors },
    handleSubmit,
    reset,
} = useForm<changePasswordType>({
    criteriaMode: "all",
    defaultValues : {
        currentpassword:'',
        newpassword:'',
        confirmpassword:'',
    },
    mode: "all",
    reValidateMode: "onChange",
    resolver:yupResolver(ChangeFormSchema)
})

const handleChangePasswordData = (changePasswordData:any) =>{
    console.log(changePasswordData)
}
  return (
    <Typography component={'div'}>
        <Controller 
        control={ChangePasswordController}
        name='currentpassword'
        defaultValue={''}
        render={({field : {onChange , ref , value , name} , formState} ) =>{
            return(
                <TextField 
                name={name}
                type='text'
                onChange={onChange}
                value={value}
                label='Current Password'
                variant='outlined'
                />
            )
        } }
        />
          <Controller 
        control={ChangePasswordController}
        name='newpassword'
        defaultValue={''}
        render={({field : {onChange , ref , value , name} , formState} ) =>{
            return(
                <TextField 
                name={name}
                type='text'
                onChange={onChange}
                value={value}
                label='New Password'
                variant='outlined'
                />
            )
        } }
        />
          <Controller 
        control={ChangePasswordController}
        name='confirmpassword'
        defaultValue={''}
        render={({field : {onChange , ref , value , name} , formState} ) =>{
            return(
                <TextField 
                name={name}
                type='text'
                onChange={onChange}
                value={value}
                label='Confirm Password'
                variant='outlined'
                />
            )
        } }
        />
        <Typography component={'div'}>
            <Button onClick={handleSubmit(handleChangePasswordData)}>
                Submit
            </Button>
        </Typography>
    </Typography>
  )
}
