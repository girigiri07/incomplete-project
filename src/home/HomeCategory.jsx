
import { 
    Typography,
    Stack,
ImageList,
ImageListItem,
ImageListItemBar,
IconButton,
Button


 } from '@mui/material';
 import { Link } from 'react-router-dom';
import React from 'react'
const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
{
imgUrl: 'images/category/01.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'DSLR Camera',
},
{
imgUrl: 'images/category/02.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Shoes',
},
{
imgUrl: 'images/category/03.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Photography',
},
{
imgUrl: 'images/category/04.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Formal Dress',
},
{
imgUrl: 'images/category/05.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Colorful Bags',
},
{
imgUrl: 'images/category/06.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Home Decor',
},
]
export const HomeCategory = () => {
  return (
    <Typography >
        <Typography variant='h5' sx={{
            color:'yellow'}}>
                {subTitle}
            </Typography>
            <Typography variant='h3'>
                {title}
            </Typography>
            <Stack>
            
               <ImageList >
                    {
                        categoryList.map((item , index)=>(
                            <Link to="/shop">
                            <ImageListItem key={index}>
                               <img src={item.imgUrl} alt=""/>
                             
                               {/* <Stack>
                                <i className={item.iconName}>

                                </i>
                               </Stack> */}
                            
                              <Link to="/shop">
                              <ImageListItemBar title={item.title}/>
                              </Link>
                            </ImageListItem>
                           
                            </Link>
                        ))
                    }
                </ImageList>
              
            </Stack>
         <Link to={"/shop"} >
       <Typography sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
         }}>
        <Button variant='outlined'>
            {btnText}
        </Button>
       </Typography>
         </Link>
    
    </Typography>
  )
}
