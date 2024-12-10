import React, { useState } from 'react'
import productData from '../products.json'
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import bannerType from '../utils/BannerPageValidation/BannerPageType';
import BannerPageSchema  from '../utils/BannerPageValidation/BannerPageSchema';
import SearchIcon from '@mui/icons-material/Search'
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Badge,
    Avatar,
    MenuItem,
    Menu,
    Button,
    Tooltip,
    Stack,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Box,
    TextField,
    List,
    ListItem,
    InputAdornment
    
    }from '@mui/material'
import { Link } from 'react-router-dom';
import { SelectedCategory } from '../Componets/SelectedCategory';

// const title = <h2>
//     Search Your One From Thousand Of products 
// </h2>
const desc = "We Have Largest Collection Of Products";
const bannerList = [
     { iconName: "icofont-users-alt-4", text: "1.5 Million Customers", }, 
{ iconName: "icofont-notification", text: "More then 2000 Marchent", }, 
{ iconName: "icofont-globe", text: "Buy Anything Online", }, ];
 

export const BannerPage = () => {

  const [searchText , setSearchText] = useState('')
  const [filterItems ,setFilterItems] = useState(productData)

  const {
    control :bannerController,
    formState:{errors:bannerErrors},
    handleSubmit,
    reset,
    getValues,
    setValue,
    watch,
  }= useForm<bannerType>({
    criteriaMode: "all",
    mode: "all",
        reValidateMode: "onChange",
        defaultValues:{

          productname:'',
       
        },
        resolver:yupResolver(BannerPageSchema)
  })

  const handleSingleFieldChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    console.log(event.target.value)
    const searchData = event.target.value
    setSearchText(searchData)

    const filters = productData.filter((product) => product.name.toLowerCase().includes(searchData.toLowerCase()))
    setFilterItems(filters)
  }
  return (
    <Typography >
        <Typography variant='h3' sx={{
          display:'flex',
          gap:'10px',
          justifyContent:'center'
        }}>
        Search Your One From 
        <Typography variant='h3' sx={{color:'yellow'}}>
        Thousand 
          </Typography>  
          <Typography variant='h3'>
            of
          </Typography>

        
            
        </Typography>
        <Typography variant='h3' sx={{
          display:'flex',
          justifyContent:'center'
        }}>
        Products
        </Typography>
        
        <Typography sx={{
          display:'flex',
          justifyContent:'center'
        }} >
        <Controller 
          control={bannerController}
          name='productname'
          defaultValue=''
          render={({field  , formState} ) =>{
            return(
                <TextField sx={{
                  display:'flex',
                  justifyContent:'center',
                  width:'800px',
             

                }}
                // name={name}
                // type='text'
                {...field}
                onChange={(e) => {
                  field.onChange(e) 
                  handleSingleFieldChange(e)
                }}
                value={searchText}
                label='Search Your Product'
                variant='outlined'
                
                InputProps={
                  {
                    startAdornment:<InputAdornment position='start'>
                    <SelectedCategory />
                    </InputAdornment>,
                     endAdornment :<InputAdornment position='end'>
                     
                       <SearchIcon />
                     
                   </InputAdornment>
              
                  }
                }
                />
            )
        } }
          />
        </Typography>
        <Typography variant='h5' sx={{
                  display:'flex',
                  justifyContent:'center',
                  
                }}>
          {desc}
        </Typography>
        <List>
        {
          searchText && filterItems.map((products , index) => (
            <ListItem key={index}>
              <Link to={`/shop/${products.id}`}>
                {products.name}
              </Link>
            
            </ListItem>
          ))
        }
        </List>
        
    </Typography>
  )
}
//https://github.com/mdalmamunit427/advanced-reactjs-ecommerce-website-starter-files/blob/main/public/project_description.md