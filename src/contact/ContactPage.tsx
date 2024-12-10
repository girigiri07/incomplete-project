import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { PageHeader } from '../Componets/PageHeader'

import { GoogleMap } from './GoogleMap';
import contactTypes from '../utils/ContactPageValidation/ContactPageTypes';
import ContactSchema from '../utils/ContactPageValidation/ContactPageSchema';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";
const conSubTitle = "Get in touch with Contact us";
const conTitle =
"Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";

const contactList = [
{
imgUrl: "/images/icon/01.png",
imgAlt: "contact icon",
title: "Office Address",
desc: "1201 park street, Fifth Avenue",
},
{
imgUrl: "/images/icon/02.png",
imgAlt: "contact icon",
title: "Phone number",
desc: "+22698 745 632,02 982 745",
},
{
imgUrl: "/images/icon/03.png",
imgAlt: "contact icon",
title: "Send email",
desc: "admin@shopcart.com",
},
{
imgUrl: "/images/icon/04.png",
imgAlt: "contact icon",
title: "Our website",
desc: "www.shopcart.com",
},
];
export const ContactPage = () => {
    const {
        control : ContactController,
        formState: { errors: ContactErrors },
        handleSubmit,
        reset,
    } = useForm<contactTypes>({
        criteriaMode: "all",
        defaultValues : {
            name:'',
            email:'',
            number:'',
            subject:'',
            message:'',
        },
        mode: "all",
        reValidateMode: "onChange",
        resolver:yupResolver(ContactSchema)
    })
    const handleContactData = (contactData:any) =>{
        console.log(contactData)
    }
  return (
    <Typography>
       <Typography>
       <PageHeader title="Get In Touch with US" curPage="Contact Us"/>
       </Typography>
       <Typography>
        <Typography variant='body1'>
            {subTitle}
        </Typography>
        <Typography variant='body1'>
            {title}
        </Typography>
       </Typography>

       <Typography>
        {
            contactList.map((data,index)=>(
                <Typography key={index}>
                    <img src={data.imgUrl} alt='' />

                    <Typography variant='h6'>
            {data.title}
        </Typography>

        <Typography variant='body1'>
            {data.desc}
        </Typography>

                    </Typography>
            ))
        }
       </Typography>

       <Typography >
        <GoogleMap />
       </Typography>

<Typography>
<Typography >
            {conSubTitle}
        </Typography>

        <Typography variant='h2'>
            {conTitle}
        </Typography>


</Typography>



<Typography>
<Controller 
        control={ContactController}
        name='name'
        defaultValue={''}
        render={({field : {onChange , ref , value , name} , formState} ) =>{
            return(
                <TextField 
                name={name}
                type='text'
                onChange={onChange}
                value={value}
                label='Your Name'
                variant='outlined'
                />
            )
        } }
        />
        <Controller 
        control={ContactController}
        name='email'
        defaultValue={''}
        render={({field : {onChange , ref , value , name} , formState} ) =>{
            return(
                <TextField 
                name={name}
                type='email'
                onChange={onChange}
                value={value}
                label='Your Email'
                variant='outlined'
                />
            )
        } }
        />
        <Controller 
        control={ContactController}
        name='number'
        defaultValue={0}
        render={({field : {onChange , ref , value , name} , formState} ) =>{
            return(
                <TextField 
                name={name}
                type='text'
                onChange={onChange}
                value={value}
                label='Mobile Number'
                variant='outlined'
                />
            )
        } }
        />
          <Controller 
        control={ContactController}
        name='subject'
        defaultValue={''}
        render={({field : {onChange , ref , value , name} , formState} ) =>{
            return(
                <TextField 
                name={name}
                type='text'
                onChange={onChange}
                value={value}
                label='Your Subject'
                variant='outlined'
                />
            )
        } }
        />
        <Controller 
        control={ContactController}
        name='message'
        defaultValue={''}
        render={({field : {onChange , ref , value , name} , formState} ) =>{
            return(
                <TextField 
                name={name}
                type='text'
                onChange={onChange}
                value={value}
                label='Your Message'
                variant='outlined'
                />
            )
        } }
        />
        <Button onClick={handleSubmit(handleContactData)}>
            Send Our Message
        </Button>
</Typography> 
    </Typography>
  )
}
