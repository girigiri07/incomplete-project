import React, { useState } from 'react'
import {toast} from 'react-toastify'

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import signUpFormtypes from '../../../utils/SignUpFormValidation/SignUpPageTypes';
import SignUpPageSchema from '../../../utils/SignUpFormValidation/SignUpPageSchema';
import { PrivateRoutesList } from '../../../Routes/PrivateRoutes';
import { 
    Button,
  TextField,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import  'react-toastify/dist/ReactToastify.css';



export const SignUpFormPage = () => {
// const [signUpData , setSignUpData] = useState<any>({})
// const [signUpArrayData ,setSignUpArrayData] = useState<any>([])
// const {
// HEADER
// } =PrivateRoutesList
const navigate = useNavigate()
// console.log(signUpData)
// console.log(signUpArrayData)
    const {
        control :signUpController,
        formState:{errors:signUpErrors},
        handleSubmit,
        reset,
        getValues,
        setValue,
        watch,
      }= useForm<signUpFormtypes>({
        criteriaMode: "all",
        mode: "all",
            reValidateMode: "onChange",
            defaultValues:{

              name:'',
              email:'',
              password:'',
              confirmpassword:'',
            },
            resolver:yupResolver(SignUpPageSchema)
      })

      const singleFieldValue = watch('name');

     

      // const handleName = (event: { target: { value: any; }; }) =>{
      //   const name = event.target.value;
      //   console.log(name)
      //   const regex = /^[A-Za-z]+$/;

      
      //       if(regex.test(name)){
      //         console.log(signUpData)
             
      //       }
      //       else{
      //           alert('only alphabets')
      //       }

      //   }

        const handleSignUpFormButton = (signUpFormData : any) =>{
        
          // console.log(signUpFormData)
          // console.log(signUpFormData.name.length)
          // console.log(signUpFormData.password)

          if(signUpFormData.name.length >= 3 ){
           
            if(signUpFormData.password == signUpFormData.confirmpassword){

             if( signUpFormData.password.length >= 6 && signUpFormData.confirmpassword.length >= 6){
              
              console.log('All field values :',{
                ...signUpFormData , name:singleFieldValue,
              })
              // navigate(HEADER)
              toast.success('Login Successfull')
            
            }
            else{
              toast.error('PassWord Minimum 6 Num')
              console.log('PassWord Minimum 6 Number Requried')
            }
       
           
           
            }

            else{
              toast.error("PassWord and Confirm Password is Not Same ")
                  console.log("PassWord and Confirm Password is Not Same ")
                }

          
         
          }

          else {
            toast.error(' Minimum 3 Letters Must In Your Name')
            console.log(' Minimum 3 Letters Must In Your Name')
          }
          


          // setSignUpArrayData((signUpArrayData:any) => [...signUpArrayData ,signUpFormData])


        //   const {name , email , password , confirmpassword} = signUpFormData
        //  setSignUpData({...signUpData , signUpFormData})
         
        }


       
      
        const handleSingelFieldChange =  (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          const {value} = event.target
             const regex = /^[A-Za-z]+$/;

      
            if(regex.test(value)){
             
              console.log(value)
              setValue('name',value)
             
            }
            else{
              toast.error('Name is Must Be A Charcter')
            }

        }
      return (
        <Typography component={'div'}>
          <Controller 
          control={signUpController}
          name='name'
          defaultValue=''
          render={({field  , formState} ) =>{
            return(
                <TextField 
                // name={name}
                // type='text'
                {...field}
                onChange={(e) => {
                  field.onChange(e) 
                  handleSingelFieldChange(e)
                }}
                value={singleFieldValue}
                label='Name'
                variant='outlined'
                />
            )
        } }
          />
            <Controller 
          control={signUpController}
          name='email'
          defaultValue=''
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
          control={signUpController}
          name='password'
          defaultValue=''
          render={({field : {onChange , ref , value , name} , formState} ) =>{
            return(
                <TextField 
                name={name}
                type='password'
                onChange={onChange}
                value={value}
                label='Password'
                variant='outlined'
                />
            )
        } }
          />
            <Controller 
          control={signUpController}
          name='confirmpassword'
          defaultValue=''
          render={({field : {onChange , ref , value , name} , formState} ) =>{
            return(
                <TextField 
                name={name}
                type='password'
                onChange={onChange}
                value={value}
                label='Confirm Password'
                variant='outlined'
                />
            )
        } }
          />

          <Typography component={'div'}>
            <Button onClick={handleSubmit(handleSignUpFormButton)} >Submit</Button>
          </Typography>
        </Typography>
      
  )
}
