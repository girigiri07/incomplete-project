import { 
    
    Typography ,
    Icon,
    ImageList,
    Divider,
    ListItem,
    List,
    Button,
    ImageListItem

} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Ratings } from '../Componets/Ratings'
import { useState } from 'react'
export const ProductsCards = ({GridList , Products}) => {
    
    console.log(Products)
    const [currentPage , setCurrentPage] = useState(1);
    const recordPerPage = 12;
    const lastIndex = currentPage * recordPerPage;
    const firstindex = lastIndex - recordPerPage;
    const productData = Products.slice(firstindex , lastIndex);
    const totalNumOfPage = Math.ceil(Products.length/recordPerPage);
    const num = [...Array(totalNumOfPage + 1).keys()].slice(1)

    const handlePrevious = () =>{
        if(currentPage !== 1) {
            setCurrentPage(currentPage -1)
        }
    }

    const handleChangePage = (id) =>{
        setCurrentPage(id)
    }
    const handleNext = () =>{
        if(currentPage !== totalNumOfPage){
            setCurrentPage(currentPage + 1)
        }
    }
  return (
   <Typography>
    <Typography sx={{
                        display:'grid',
                        gridTemplateColumns:'repeat(4,1fr)',
                        
                       
                    }}>
        {
            productData.map((product  , index)=>(
                <Typography key={index}>
                <ImageList>
                    <ImageListItem sx={{
                        width:'100px'
                    }}>
                    <img src={product.img} alt=''  />
                    </ImageListItem>
                </ImageList>
                        <Typography>
                            <Link to={`/shop/${product.id}`}>
                                <Icon>
                                    icon varum enga
                                </Icon>
                            
                            </Link>
                            <a href='#'>
                                <Icon>
                                    heart
                                </Icon>
                            </a>
                            <Link to={"/cart-page"}>
                                <Icon>
                                    cart
                                </Icon>
                            
                            </Link>
                            </Typography>
<Typography>
    
<Typography variant='h5'>

<Link to={`/shop/${product.id}`} >
{product.name}
</Link>
</Typography>

                    <Typography>
                <Ratings />
                        </Typography>

<Typography variant='h4'>

    {product.price}
    </Typography>


    </Typography>


                    </Typography>
            ))
        }
    </Typography>
    <Typography>
                           
                           <List sx={
                             {
                             display:'flex'
                             }
                           }>
                             <ListItem>
                             <Button onClick={handlePrevious} >
                                 PREVIOUS
                             </Button>
                             </ListItem>
                             <Divider/>
                         {
                             num.map((items , index)=>(
                                 <ListItem key={index}>
                                    <Button onClick={()=>handleChangePage(items)}>
                                     {items}
                                    </Button>
                                 </ListItem>
                                 
                             ))
                         }
                           <Divider/>
                       
                           <ListItem>
                             <Button onClick={handleNext}>
                                 NEXT
                             </Button>
                             </ListItem>
                             <Divider/>
                           </List>
                       
                       
                       </Typography>
   </Typography>
  )
}
