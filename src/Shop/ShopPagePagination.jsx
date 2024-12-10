import React from 'react'
import { useState } from 'react';
import {
     Typography,
     Divider,
     ListItem,
     List,
     Button,


 } from '@mui/material';
export const ShopPagePagination = ({data}) => {
    console.log(data)
    // const pageNumbers = []

    // for(let i = 1; 1 <= Math.cell(totalProducts / productPerPage); i++ ){
    //     pageNumbers.push(i)
    // }
    const [currentPage , setCurrentPage] = useState(1);
    const recordPerPage = 10;
    const lastIndex = currentPage * recordPerPage;
    const firstindex = lastIndex - recordPerPage;
    const records = data.slice(firstindex , lastIndex);
    const totalNumOfPage = Math.ceil(data.length/recordPerPage);
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
  )
}
