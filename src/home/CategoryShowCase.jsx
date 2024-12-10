import { AppBar, Button, ImageList, ImageListItem, ImageListItemBar, Stack, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Ratings } from '../Componets/Ratings';
import { Link } from 'react-router-dom'
const title = "Our Products";

const ProductData = [
{
imgUrl: 'images/categoryTab/01.jpg',
cate: 'Shoes',
title: 'Nike Premier X',
author: 'assets/images/course/author/01.jpg',
brand: 'Nike',
price: '$199.00',
id: 1,
},
{
imgUrl: 'images/categoryTab/02.jpg',
cate: 'Bags',
title: 'Asthetic Bags',
author: 'assets/images/course/author/02.jpg',
brand: 'D&J Bags',
price: '$199.00',
id: 2,
},
{
imgUrl: 'images/categoryTab/03.jpg',
cate: 'Phones',
title: 'iPhone 12',
author: 'src/assets/images/categoryTab/brand/apple.png',
brand: 'Apple',
price: '$199.00',
id: 3,
},
{
imgUrl: 'images/categoryTab/04.jpg',
cate: 'Bags',
title: 'Hiking Bag 15 Nh100',
author: 'assets/images/course/author/04.jpg',
brand: 'Gucci',
price: '$199.00',
id: 4,
},
{
imgUrl: 'images/categoryTab/05.jpg',
cate: 'Shoes',
title: 'Outdoor Sports Shoes',
author: 'assets/images/course/author/05.jpg',
brand: 'Nike',
price: '$199.00',
id: 5,
},
{
imgUrl: 'images/categoryTab/06.jpg',
cate: 'Beauty',
title: 'COSRX Snail Mucin',
author: 'assets/images/course/author/06.jpg',
brand: 'Zaara',
price: '$199.00',
id: 6,
},
{
imgUrl: 'images/categoryTab/07.jpg',
cate: 'Bags',
title: 'Look Less Chanel Bag ',
author: 'assets/images/course/author/01.jpg',
brand: 'Gucci',
price: '$199.00',
id: 7,
},
{
imgUrl: 'images/categoryTab/08.jpg',
cate: 'Shoes',
title: 'Casual Sneakers',
author: 'assets/images/course/author/02.jpg',
brand: 'Bata',
price: '$199.00',
id: 8,
},
]
export const CategoryShowCase = () => {
    const [items , setItems] = useState(ProductData);

    const handleFilterItems =(categoryItemName)=>{
        const updateItems = ProductData.filter((category)=>{
            return category.cate === categoryItemName
    })
    setItems(updateItems)
    }
  return (
   <Typography >
   
   
        <Toolbar>
        <Typography variant='h3'>
    OUR PRODUCTS
   </Typography>
            <Button onClick={()=>setItems(ProductData)}>
                All
            </Button>
            <Button onClick={()=>handleFilterItems("Shoes")}>
                Shoes
            </Button>
            <Button onClick={()=>handleFilterItems("Bags")}>
                Bags
            </Button>
            <Button onClick={()=>handleFilterItems("Phones")}>
                Phones
            </Button>
            <Button onClick={()=>handleFilterItems("Beauty")}>
            Beauty
            </Button>
        </Toolbar>

       <Typography sx={{
        display:"grid",
        gridTemplateColumns:"repeat(4,1fr)",
        gap:2,
       }}>
    
            {
                items.map((product) =>(
                    <Typography key={product.id} >
                        <ImageList>
                            <ImageListItem sx={{
                                width:'300px'
                            }} >
                               <img src={product.imgUrl} alt=""/>
                           
                            <ImageListItemBar sx={{
                                display:'flex',
                                justifyContent:'space-between',
                                padding:'0 16px',
                            }}
                            title={
                                <a href='#'>
                                    <Typography variant='body2' sx={{
                                        fontWeight:'bold',
                                        color:'white'
                                    }} >
                                    {product.cate}
                                </Typography>
                                </a>
                            }
                            actionIcon={
                                <Typography variant='body2' sx={{
                                    fontWeight:'bold',
                                    color:'inherit',
                                    marginRight:'16px'
                                }}>
                                <Ratings />
                            </Typography>
                            }

                            />
                           
                           </ImageListItem>
                         
                         </ImageList>
                               

                           
                       
                            
                            {/* <ImageListItemBar position='below' >
                            <Typography>
                                <Ratings />
                            </Typography>
                            </ImageListItemBar> */}


                           
                        {/* <Typography>
                            <a href='#'>
                                {product.cate}
                            </a>
                        </Typography> */}
                        {/* <Typography >
                            <Ratings />
                        </Typography> */}


                        <Typography >
                          <Typography variant='h5'>
                          <Link to={`/shop/${product.id}`}>
                            {product.title}
                            </Link>
                          </Typography>

                         <Typography sx={{
                            display:'flex',
                            justifyContent:'space-between'
                         }}>
                         <Typography >
                                <Link to="/">
                                {product.brand}
                                </Link>
                            </Typography>
                            <Typography>
                                {product.price}
                            </Typography>
                            </Typography>

                        </Typography>

                    </Typography>
                ))
            }
      
       </Typography>
  
   </Typography>
  )
}
