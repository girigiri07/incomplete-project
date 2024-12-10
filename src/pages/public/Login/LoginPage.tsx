import React from 'react'
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginType from '../../../utils/LoginFormValidation/LoginPageType';
import LoginPageSchema from '../../../utils/LoginFormValidation/LoginPageSchema';
import { 
  TextField,
  Button,
  Typography,
  
} from '@mui/material'


import { useNavigate } from 'react-router-dom';
import { PublicRoutesList } from '../../../Routes/PublicRoutes';

import { PrivateRoutesList } from '../../../Routes/PrivateRoutes';
import { toast } from 'react-toastify';


import { useSelector } from 'react-redux';

// import { RootState , AppDispatch } from '../../../store/ReduxStore';

import { useDispatch } from 'react-redux';
// import { setUsersData } from '../../../store/Slices/UserSlice';


export const LoginPage = () => {
  

     // const dispatch = useDispatch()
    // const dispatch : AppDispatch = useDispatch()

    // const users =  useSelector((state: any) => state.users.users)
    const navigate = useNavigate()
   
    const {
        control : loginPageController,
        formState: { errors: LoginPageErrors },
        handleSubmit,
        reset,
    } = useForm<LoginType>({
        criteriaMode: "all",
        defaultValues : {
            email:'',
            password:''
        },
        mode: "all",
        reValidateMode: "onChange",
        resolver:yupResolver(LoginPageSchema)
    })
  

    const handleLoginSubmitButton = (loginFormData : any) =>{

        console.log(loginFormData)
        // dispatch(setUsersData(loginFormData))
        // navigate(HEADER)
       
    
        toast.success('Login Successfull')
      
    }

    // console.log(users)
    const {
        SIGNUP,TABLETASK
    } = PublicRoutesList
 const {
// HEADER,
HOME
 } = PrivateRoutesList
  return (
    <Typography component={'div'}  sx={{
        
    }} >
        <Controller 
        control={loginPageController}
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
        control={loginPageController}
        name='password'
        defaultValue={''}
        render={({field : {onChange , ref , name , value} , formState}) => {
            return(
                <TextField 
                name={name}
                value={value}
                type='password'
                label='Password'
                onChange={onChange}
                variant='outlined'
                />
            )
        }}
        />

        <Typography component={'div'}>
            <Button onClick={handleSubmit(handleLoginSubmitButton)} >
                Submit
            </Button>
        </Typography>
        <Typography component={'div'} variant='h5' sx={{
            display:'flex',
           
        }}>
        Don't Have a Account 
      
      <Typography  variant='h5' onClick={()=>navigate(SIGNUP)} sx={{
        // textDecoration:'underline'
        marginLeft:'10px',
        ":hover" : {
            color:'blueviolet',
            cursor:'pointer'
        },
        
      }} >
      Sign Up 
      </Typography>

      <Typography variant='h5' onClick={()=> navigate(TABLETASK)} sx={{
        // textDecoration:'underline'
        marginLeft:'10px',
        ":hover" : {
            color:'blueviolet',
            cursor:'pointer'
        },
        
      }}>
        Click To See Table Filter Process
      </Typography>
       
        </Typography>
    </Typography>
  )
}
