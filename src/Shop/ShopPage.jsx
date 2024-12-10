import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { PageHeader } from '../Componets/PageHeader'
import Data from "../products.json"
import { ProductsCards } from './ProductsCards'
import { Search } from './Search'
import { ShopCategory } from './ShopCategory'
import { PopularPost } from './PopularPost'
import { PopularTags } from './PopularTags'
// import { ShopPagePagination } from './ShopPagePagination'
const showResults = "Showing 01 - 12 of 139 Results"

export const ShopPage = () => {
  const [gridList , setGridList] = useState(true)
 const [products , setProducts] = useState(Data)
const [selectedCategory , setSelectedCategory] = useState("ALL")

const menuItems = [...new Set(Data.map((item)=> item.category))]

const filterItems = (curItem)=>{
  const newItems = Data.filter((product)=>{
    return product.category === curItem
  })

  setSelectedCategory(curItem)
  setProducts(newItems)
}


//   const [currentPage , setCurrentPage] = useState(1)
// const productPerPage = 12;

// const indexOfLastproduct = currentPage * productPerPage
// const indexOfFirstProduct = indexOfLastproduct - productPerPage;
// const currentProducts = products.slice(indexOfFirstProduct, indexOfLastproduct)

// const paginate = (pageNumber) => {
//   setCurrentPage(pageNumber)
// }


  return (
    <Typography>
     <PageHeader title="Shop Page" curPage="Shop" />
     <Typography>
    
      {showResults}
     </Typography>
     {/* {`${gridList ? "gridActive" : "listActive"}`} */}
<Typography >
<Typography onClick={()=> setGridList(!gridList)} >
  <Typography >
  kk
</Typography>
</Typography>
<Typography onClick={()=> setGridList(!gridList)}>
<Typography>
    ss
  </Typography>
</Typography>
</Typography>

<Typography>
<ProductsCards GridList={gridList} Products={products} />
</Typography>
<Typography>
  <Search GridList={gridList} Products={products}/>
</Typography>
<Typography>
  <ShopCategory 
  filterItems={filterItems}
  setItems={setProducts}
  menuItems={menuItems}
  setProducts={setProducts}
  selectedCategory={selectedCategory}
  />
</Typography>
<Typography>
  <PopularPost />
</Typography>
<Typography>
  <PopularTags />
</Typography>
{/* <Typography>
  <ShopPagePagination data={Data}/>
</Typography> */}
    </Typography>
  )
}
