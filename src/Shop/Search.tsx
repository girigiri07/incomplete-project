import React, { useState } from 'react'
import ShopSearchSchema from '../utils/ShopSearchValidation/ShopSearchSchema'
import shopSearchTypes from '../utils/ShopSearchValidation/ShopSearchType'
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputAdornment, TextField, Typography } from '@mui/material';
import { SelectedCategory } from '../Componets/SelectedCategory';
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom';



export const Search = ({GridList , Products}) => {
    
  const [searchText , setSearchText] = useState('')
  const [filterItems ,setFilterItems] = useState(Products)
console.log(filterItems)
  const {
    control :searchrController,
    formState:{errors:searchErrors},
    handleSubmit,
    reset,
    getValues,
    setValue,
    watch,
  }= useForm<shopSearchTypes>({
    criteriaMode: "all",
    mode: "all",
        reValidateMode: "onChange",
        defaultValues:{

          name:'',
       
        },
        resolver:yupResolver(ShopSearchSchema)
  })

  const handleSingleFieldChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    console.log(event.target.value)
    const searchData = event.target.value
    setSearchText(searchData)

    const filters = Products.filter((product:any) => product.name.toLowerCase().includes(searchData.toLowerCase()))
    setFilterItems(filters)
  }

  return (
    <Typography>
      <Typography>
      <Controller 
          control={searchrController}
          name='name'
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
                
              
                />
            )
        } }
          />
      </Typography>
      <Typography>
        {
          searchText && filterItems.map((product:any)=>(
            <Link key={product.id} to={`/shop/${product.id}`} >
              <Typography>
                <img src={product.img} alt='' />
              </Typography>

              <Typography>
                <Link to={`/shop/${product.id}`}>
                {product.name}
                </Link>
                <Typography>
                  {product.price}
                </Typography>
              </Typography>
            
            </Link>
          ))
        }
      </Typography>
    </Typography>
  )
}
