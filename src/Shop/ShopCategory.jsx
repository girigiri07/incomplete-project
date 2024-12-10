import { Button, Typography } from '@mui/material'
import React from 'react'
import Data from '../products.json'
export const ShopCategory = ({ filterItems,setItems, menuItems,setProducts,selectedCategory}) => {
    console.log(filterItems)
    console.log(setItems)
    console.log(menuItems)
    console.log(setProducts)
    console.log(selectedCategory)
  return (
    <Typography>
        <Typography>
            ALL Categories
        </Typography>
        <Button onClick={()=>setProducts(Data)}>
            ALL
        </Button>
        <Typography>
            {
menuItems.map((menu , index)=>{
    return(
        <Button key={index} onClick={()=> filterItems(menu)} >
            {menu}
        </Button>
    )
})
            }
        </Typography>
    </Typography>
  )
}
