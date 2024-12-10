import {
     Typography ,
     Box,
     TextField,
     Button
    } from '@mui/material'
import React from 'react'
import RegisterSchema from '../utils/RegisterValidation/RegisterSchema'
import registerType from '../utils/RegisterValidation/RegisterTypes'
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const subTitle = "Save The Day"
const desc = "Limited Time Offer! Hurry Up"

export const RegisterPage = () => {
    const {
        control : registerController,
        formState: { errors: registerErrors },
        handleSubmit,
        reset,
    } = useForm<registerType>({
        criteriaMode: "all",
        defaultValues : {
            name:'',
            email:'',
            number:0,
           
        },
        mode: "all",
        reValidateMode: "onChange",
        resolver:yupResolver(RegisterSchema)
    })

    const handleRegisterData = (registerData:any) => {
        console.log(registerData)
    }
  return (
   <Typography>
    <Typography>
        {subTitle}
    </Typography>
        <Typography>
            Join on Day Long Free WorkShop for 
            <br />
          
        <Typography sx={{
            display:'flex',
            gap:'10px'
        }}>
        <Box sx={{
                color:'yellow'
            }}>
              Advance
            </Box>
            <Typography>
            Mastering  On Sales
            </Typography>
        </Typography>
         
        </Typography>
        <Typography>
            {desc}
        </Typography>

<Typography >
    <Typography variant='h3'>
        Register Now 
    </Typography>
<Controller 
   control={registerController}
   name='name'
   defaultValue={''}
   render={({field : {onChange , ref , value , name} , formState} ) =>{
       return(
           <TextField 
           name={name}
           type='text'
           onChange={onChange}
           value={value}
           label='UserName'
           variant='outlined'
           />
       )
   } }
   />
   <Controller 
   control={registerController}
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
   <Controller 
   control={registerController}
   name='number'
  
   render={({field : {onChange , ref , value , name} , formState} ) =>{
       return(
           <TextField 
           name={name}
           type='number'
           onChange={onChange}
           value={value}
           label='Phone'
           variant='outlined'
           />
       )
   } }
   />

   <Typography>
    <Button onClick={handleSubmit(handleRegisterData)} >
   Register Now
    </Button>
   </Typography>
</Typography>
   

   </Typography>
  )
}
