import { Button, List, ListItem, ListItemText, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { PageHeader } from '../Componets/PageHeader'
import tableData from '../table/TableObject'
import { Link } from 'react-router-dom'
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import cartpageTypes from '../utils/CartPageValidation/CartPageTypes'
import CartPageSchema from '../utils/CartPageValidation/CartPageSchema'
import delImgUrl from "../assets/del.png"
export const CartPage = () => {
  const {
    control : cartController,
    formState: { errors: cartErrors },
    handleSubmit,
    reset,
} = useForm<cartpageTypes>({
    criteriaMode: "all",
    defaultValues : {
        quantity:'',
        coupon:"",
        postCode:"",
     
    },
    mode: "all",
    reValidateMode: "onChange",
    resolver:yupResolver(CartPageSchema)
})
  const [cartItems , setCartItems] =  useState([])

  const [totals , setTotals] = useState("")

  useEffect(() => {
    
    const storedCartItems = JSON.parse(localStorage.getItem("cart") as string ) || [];
    
    setCartItems(storedCartItems)
    

   
  
    
   
  }, [])


  const calculateTotalprice = (item) => {
    // setTotals(item.price * item.quantity) 
    return item.price * item.quantity
  }

  const handleIncrease = (item) => {
    item.quantity += 1;
    calculateTotalprice(item)
    setCartItems([...cartItems])
    localStorage.setItem("cart", JSON.stringify(cartItems))

  }

  const handleDecrease = (item) => {
  if(  item.quantity > 1){
    item.quantity -= 1;
    calculateTotalprice(item)
    setCartItems([...cartItems])
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }
  
  }


  const handleRemoveItems  = (item) => {
const updateCart = cartItems.filter((cartItems) => cartItems.id !== item.id)
    setCartItems(updateCart)

    updataLocalStorage(updateCart)
  }


  const updataLocalStorage = (cart) => {
    localStorage.setItem("cart" , JSON.stringify(cart))
  }

  const cartSubTotal = cartItems.reduce((total , item) => {
    return total = calculateTotalprice(item)
  } , 0)

  const orderTotal = cartSubTotal;

  return (
<div>
  <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />


  <Typography>
    <Typography>
    <TableContainer component={Paper} sx={{height:'300px'}} >
      {/* table kula tha ellama podanum  */}
        <Table aria-label='simple table' stickyHeader>
          {/* table head kula header la podnaum  */}
            <TableHead>
              {/* table row pota row create agirum athukula namba ella table cells yum podanuum */}
                <TableRow>
                    <TableCell >Product</TableCell>
                    <TableCell >Price</TableCell>
                    <TableCell >Quantity</TableCell>
                    <TableCell >Total</TableCell>
                    <TableCell >Edit</TableCell>
                </TableRow>
            </TableHead>
            {/* table body kula body of the content podanum */}
            <TableBody>
                {
                    cartItems.map((item , index)=> (
                        <TableRow  key={index} >
                              <TableCell >
                                <Link to={"/shop"}>
                                <img src={item.img} alt='' />
                                </Link>
                                <Link to={"/shop"}>
                               {item.name}
                                </Link>
                              </TableCell>

                      <TableCell>
                        {item.price}
                      </TableCell>

<TableCell>
<Typography onClick={() => handleDecrease(item)}>
    -
</Typography>
<Controller 
          control={cartController}
          name='quantity'
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
              
                
                }}
                 value={item.quantity}
                label='Discount Code'
                variant='outlined'
                
                />
            )
        } }
          />

<Typography onClick={()=>handleIncrease(item)}>
    +
</Typography>
</TableCell>

                    <TableCell >
                      
                   
                     
                      {/* ${totals} */}
                      {calculateTotalprice(item)}
                    </TableCell>
          <TableCell>
            <a href='#' onClick={() => handleRemoveItems(item)}>
              <img src={delImgUrl} alt='' />
            </a>
          </TableCell>


          
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
    <Typography>
   

    <Controller 
          control={cartController}
          name='coupon'
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
              
                
                }}
                //  value={item.quantity}
                label='Discount Code'
                variant='outlined'
                
                />
            )
        } }
          />

    </Typography>
    <Typography>
      <Button>
        Apply Coupon
      </Button>
      <Button>
        Update Cart
      </Button>
    </Typography>
    </Typography>

    <Typography>
      <Typography variant='h3'>
        Calculate Shipping
      </Typography>



      <Typography>
      <TextField 
label ='Select State'

select
fullWidth
// onChange={(e)=> handleColor(e)}
// value = {color}
>
   
    <MenuItem value='uk' >United KingDom</MenuItem>
    <MenuItem value='bd' >Bangaldesh</MenuItem>
    <MenuItem value='pak' >Pakistan</MenuItem>
    <MenuItem value='ind' >India</MenuItem>
    <MenuItem value='np' >Napal</MenuItem>
  
    
</TextField>
      </Typography>
    </Typography>
    <Typography>
      <Typography variant='h3'>
        Calculate Shipping
      </Typography>
      <Typography>
      <TextField 
label ='Select State'

select
fullWidth
// onChange={(e)=> handleColor(e)}
// value = {color}
>
   
    <MenuItem value='uk' >New York</MenuItem>
    <MenuItem value='bd' >London</MenuItem>
    <MenuItem value='pak' >Korachi</MenuItem>
    <MenuItem value='ind' >New Delhi</MenuItem>
  
  
    
</TextField>
      </Typography>
    </Typography>

<Typography>
<Controller 
          control={cartController}
          name='postCode'
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
              
                
                }}
                //  value={item.quantity}
                label='PostCode/ZIP'
                variant='outlined'
                
                />
            )
        } }
          />
</Typography>

<Typography>
  <Button>
    Update Address
  </Button>
</Typography>

<Typography>
<Typography variant='h3'>
        Cart Total
      </Typography>

<Typography>
  <List>
    <ListItemText>
      Cart SubTotal
    </ListItemText>
    <ListItem>
      ${cartSubTotal}
    {/* {totals} */}
    </ListItem>
    <ListItemText>
      Shipping And Hadling
    </ListItemText>
    <ListItem>
     Free Shipping
    </ListItem>
    <ListItemText>
      Order Total
    </ListItemText>
    <ListItem>
     
    
    ${orderTotal}
    {/* {totals} */}
    </ListItem>
  </List>
</Typography>
</Typography>
  </Typography>
</div>
  )
}
