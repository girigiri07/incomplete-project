import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import {Swiper , SwiperSlide} from "swiper/react"
// import "swiper/css"
// import {autoplay} from "swiper/modules"
import { PageHeader } from '../Componets/PageHeader'
import productData from "../products.json"
import { ProductDisplay } from './ProductDisplay'


export const SingleProduct = () => {
    const [product , setProducts] = useState(productData)
    const {id} = useParams()
    console.log(id)
    // useEffect(()=>{
    //   fetch("/src/products.json").then(res => res.json()).then(data => setProducts(data))
    // }, [])
console.log(product)
    const result = product.filter((p) => p.id === id )
    console.log(result)
  return (
   <Typography>
    
    <Typography>
     <PageHeader title="Our Shop Page" curPage="Shop / Single Product" />
     </Typography>



     <Typography>
      <Typography>
{/* <Typography>
  <Swiper>
    <SwiperSlide>
      Slide 1 
    </SwiperSlide>
    <SwiperSlide>
      Slide 2
    </SwiperSlide>
    <SwiperSlide>
      Slide 3
    </SwiperSlide>
    <SwiperSlide>
      Slide 4
    </SwiperSlide>
    <SwiperSlide>
      Slide 5 
    </SwiperSlide>
    <SwiperSlide>
      Slide 6 
    </SwiperSlide>
    <SwiperSlide>
      Slide 7 
    </SwiperSlide>
    <SwiperSlide>
      Slide 8 
    </SwiperSlide>
    <SwiperSlide>
      Slide 9 
    </SwiperSlide>
  </Swiper>
</Typography> */}

{
  result.map((item , index)=>(
   <Typography key={index}>
<img src={item.img} alt=''/>

    </Typography>
  ))
}
      </Typography>

      <Typography>
        icon varum enga 
      </Typography>
      <Typography>
        icon varum enga 
      </Typography>

      <Typography>

        {
      result.map(item => < ProductDisplay key={item.id} item={item} />)
        }
        </Typography>
     </Typography>
   </Typography>
  )
}
