import React, { useState } from 'react'
import {toast} from 'react-toastify'

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import TablePageSchema from './TableSchema';
import tableFieldTypes from './TableTypes';
import  'react-toastify/dist/ReactToastify.css';
import tableData from './TableObject';
import { 
    Button,
  TextField,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  InputAdornment,
  IconButton
} from '@mui/material'



export const TableFilter = () => {
// method -1 
  const [searchData , setSearchData] = useState('')
    const {
        control :tableController,
        formState:{errors:tableErrors},
        handleSubmit,
        reset,
        getValues,
        setValue,
        watch,
      }= useForm<tableFieldTypes>({
        criteriaMode: "all",
        mode: "all",
            reValidateMode: "onChange",
            defaultValues:{
                search:'',
              firstname:'',
              lastname:'',
              age:0,
              gender:'',
            },
            resolver:yupResolver(TablePageSchema)
      })

      const handleSearch = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {value} = event.target
        console.log(value)
        setSearchData(value)
    
    }

    const userData = 
        tableData.filter((data) => (
                    searchData == '' ? data : 
                    data.first_name.toLowerCase().includes(searchData.toLowerCase()) ||
                    data.last_name.toLowerCase().includes(searchData.toLowerCase()) ||
                   
                    data.gender.toLowerCase().includes(searchData.toLowerCase()) ||
                    
                  
                    data.age.toString().includes(searchData)
                
                ))

    
const handleCancel = () => {
  setSearchData('')
}


  return (
    <Typography component={'div'}>

<Controller 
          control={tableController}
          name='search'
          defaultValue=''
          render={({field  , formState} ) =>{
            return(
                <TextField 
                // name={name}
                // type='text'
                {...field}
                onChange={(e) => {
                  field.onChange(e) 
                  handleSearch(e)
                  
                }}
                fullWidth
                value={searchData}
                label='Search Data...'
                variant='outlined'
                InputProps={
                    {
                      endAdornment :<InputAdornment position='end'>
                        <IconButton>
                       { searchData === '' ? <SearchIcon  /> : <CancelIcon onClick={handleCancel} />}
                        </IconButton>
                      </InputAdornment>
                
                    }
                  }

                />
            )
        } }
          />
         <TableContainer component={Paper} sx={{height:'300px'}} >
         <Table aria-label='simple table' stickyHeader>
         <TableHead>
         <TableRow>
                   
                    <TableCell >First Name</TableCell>
                    <TableCell >Last Name</TableCell>
                    <TableCell >AGE</TableCell>
                    <TableCell >GENDER</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
               {
              
              //  tableData.filter((data) => (
              //       searchData == '' ? data : 
              //       data.first_name.toLowerCase().includes(searchData.toLowerCase()) ||
              //       data.last_name.toLowerCase().includes(searchData.toLowerCase()) ||
                   
              //       data.gender.toLowerCase().includes(searchData.toLowerCase())
                    
                  
              //       // data.age.includes(searchData)
                
              //   ))
             
                 userData.map((data: { id: React.Key | null | undefined; first_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; last_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; age: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; gender: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                    <TableRow key={data.id}>
                    <TableCell >
                                       {data.first_name}
                                    </TableCell>
                                    <TableCell >
                                      {data.last_name}
                                    </TableCell>
                                    <TableCell >
                                    {data.age}
                                    </TableCell>
                                    <TableCell align='center' >
                                      {data.gender}
                                    </TableCell>

                                   
                    </TableRow>
                ))
                
                
               }

               
            </TableBody>
         </Table>
         {
          userData.length === 0 &&
          <Typography component={'div'}>
                  <Typography variant="h1" sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    textAlign:'center',
                    fontSize:'50px',
                    fontWeight:'bold',
                    color:'red',
                    marginTop:'50px',
                  
                  }} > No Records Found</Typography>
                  </Typography>
         }
         
         </TableContainer>
    </Typography>
  )

// const [searchData , setSearchData] = useState('')
// const {
//     control :tableController,
//     formState:{errors:tableErrors},
//     handleSubmit,
//     reset,
//     getValues,
//     setValue,
//     watch,
//   }= useForm<tableFieldTypes>({
//     criteriaMode: "all",
//     mode: "all",
//         reValidateMode: "onChange",
//         defaultValues:{
//             search:'',
//           firstname:'',
//           lastname:'',
//           age:0,
//           gender:'',
//         },
//         resolver:yupResolver(TablePageSchema)
//   })

//   const handleSearch = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     // const {value} = event.target
//     // setSearchData(value)
//     tableData.filter((data)=>(
//         searchData == '' ? data : 
//                 data.first_name.toLowerCase().includes(searchData.toLowerCase()) ||
//                 data.last_name.toLowerCase().includes(searchData.toLowerCase()) ||
               
//                 data.gender.toLowerCase().includes(searchData.toLowerCase()) 
//     ))
// }

// return (
// <Typography component={'div'}>

// <Controller 
//       control={tableController}
//       name='search'
//       defaultValue=''
//       render={({field  , formState} ) =>{
//         return(
//             <TextField 
//             // name={name}
//             // type='text'
//             {...field}
//             onChange={(e) => {
//               field.onChange(e) 
//             //   handleSearch(e)
//               setSearchData(e.target.value)
//             }}
//             value={searchData}
//             label='Search Data...'
//             variant='outlined'
//             InputProps={
//                 {
//                   endAdornment :<InputAdornment position='end'>
//                     <IconButton>
//                    { searchData === '' ? <SearchIcon onClick={handleSearch()}  /> : <CancelIcon  />}
//                     </IconButton>
//                   </InputAdornment>
            
//                 }
//               }

//             />
//         )
//     } }
//       />
//      <TableContainer component={Paper} sx={{height:'300px'}} >
//      <Table aria-label='simple table' stickyHeader>
//      <TableHead>
//      <TableRow>
               
//                 <TableCell >First Name</TableCell>
//                 <TableCell >Last Name</TableCell>
//                 <TableCell >AGE</TableCell>
//                 <TableCell >GENDER</TableCell>
//             </TableRow>
//         </TableHead>
//         <TableBody>
//            {
//             tableData
//             // filter((data) => (
//             //     searchData == '' ? data : 
//             //     data.first_name.toLowerCase().includes(searchData.toLowerCase()) ||
//             //     data.last_name.toLowerCase().includes(searchData.toLowerCase()) ||
               
//             //     data.gender.toLowerCase().includes(searchData.toLowerCase()) 
//             //     // data.age.includes(searchData)
//             // ))
//             .map(data => (
//                 <TableRow key={data.id}>
//                 <TableCell >
//                                    {data.first_name}
//                                 </TableCell>
//                                 <TableCell >
//                                   {data.last_name}
//                                 </TableCell>
//                                 <TableCell >
//                                 {data.age}
//                                 </TableCell>
//                                 <TableCell align='center' >
//                                   {data.gender}
//                                 </TableCell>
//                 </TableRow>
//             ))
//            }
//         </TableBody>
//      </Table>
//      </TableContainer>
// </Typography>
// )
}
