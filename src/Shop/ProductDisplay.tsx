import { Typography,
    TextField,
    MenuItem,
    Button

 } from '@mui/material'
import React, { useState } from 'react'
import { Ratings } from '../Componets/Ratings'
import SingleProductSchema from '../utils/SingleProductPage/SingleProductSchema'
import singleProductType from '../utils/SingleProductPage/SingleProductTypes'
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import changePasswordType from '../utils/ChangeFormValidation/ChangeFormType'
import { Link } from 'react-router-dom';
import { ReviewPage } from './ReviewPage'
const desc = "Energistis an deliver metres after avisonary Appropria Rransition enterpria an sources applications emerging pad template"


export const ProductDisplay = ({item}) => {
    const {name ,  id , price , seller , ratingCount , quantity , img} = item
    const [ quantityAmount , setQuantityAmouont] = useState(quantity)
    const [coupon , setCoupon ] = useState("")
    const [size , setSize] = useState("Select Size")
    const [color , setColor ] = useState("Select Color ")
    const {
        control : SingleproductController,
        formState: { errors: SingleProductErrors },
        handleSubmit,
        reset,
    } = useForm<singleProductType>({
        criteriaMode: "all",
        defaultValues : {
            code:'',
         
        },
        mode: "all",
        reValidateMode: "onChange",
        resolver:yupResolver(SingleProductSchema)
    })
console.log(quantity)
    const handleSize = (e) =>{
        setSize(e.target.value)
    }
    const handleColor = (e) =>{
        setColor(e.target.value)
    }

    const handleDecrease = () =>{
        console.log("come")
        if(quantityAmount > 1){
            setQuantityAmouont(quantityAmount - 1)
        }
    }

    const handleIncrease = () =>{
        console.log("come 1")
            setQuantityAmouont(quantityAmount + 1)
        
    }
    console.log(quantityAmount)

   const handleCart = () => {
    const product = {
        id:id,
        img:img,
        name:name,
        price:price,
        quantity:quantityAmount,
        size:size,
        color:color,
        coupon:coupon

    }

    console.log(product)
    
    const exisitingCart = JSON.parse(localStorage.getItem("cart") as string ) || [];
console.log(exisitingCart)
    const existingProductIndex = exisitingCart.findIndex((item: { id: any }) => item.id == id);
    
    if(existingProductIndex !== -1 ){
        exisitingCart[existingProductIndex].quantity == quantityAmount
    }
    else{
        exisitingCart.push(product)
    }

    localStorage.setItem("cart", JSON.stringify(exisitingCart))
    setQuantityAmouont(1)
setSize("Select Size")
setColor("Select COlor")
setCoupon("")
   }

  return (
    <Typography>
<Typography variant='h4'>
    {name}
</Typography>

<Typography>
    <Ratings />
    <Typography>
        {ratingCount}
    </Typography>
</Typography>
<Typography variant='h4'>
    {price}
</Typography>
<Typography variant='h4'>
    {seller}
</Typography>
<Typography variant='body1'>
    {desc}
</Typography>
<Typography>
<TextField 
label ='Select Size'

select
fullWidth
onChange={(e)=> handleSize(e)}
value = {size}
>
   
    <MenuItem value='SM' >SM</MenuItem>
    <MenuItem value='MD' >MD</MenuItem>
    <MenuItem value='LG' >LG</MenuItem>
    <MenuItem value='XL' >XL</MenuItem>
    <MenuItem value='XLL' >XLL</MenuItem>
    
</TextField>
</Typography>

<Typography>
<TextField 
label ='Select Color'

select
fullWidth
onChange={(e)=> handleColor(e)}
value = {color}
>
   
    <MenuItem value='Pink' >Pink</MenuItem>
    <MenuItem value='Ash' >Ash</MenuItem>
    <MenuItem value='Red' >Red</MenuItem>
    <MenuItem value='White' >White</MenuItem>
    <MenuItem value='Blue' >Blue</MenuItem>
    <MenuItem value='Black' >Black</MenuItem>
    
</TextField>
</Typography>

<Typography onClick={() => handleDecrease()}>
    -
</Typography>
<Typography onChange={(e) => setQuantityAmouont(parseInt(e.target.value , 10))}>
    {quantityAmount}
</Typography>
<Typography onClick={()=>handleIncrease()}>
    +
</Typography>

<Typography>
<Controller 
          control={SingleproductController}
          name='code'
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
                  setCoupon(e.target.value)
                
                }}
                 value={coupon}
                label='Discount Code'
                variant='outlined'
                
                />
            )
        } }
          />
</Typography>

<Typography>
    <Button onClick={()=> handleCart()}>
        ADD TO CART
    </Button>

    <Button>
     <Link to="/CartPage">
     CHECK OUT 
     </Link>
    </Button>
</Typography>

<Typography>
    <ReviewPage />
</Typography>
    </Typography>
  )
}
