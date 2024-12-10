import { List, ListItem, Toolbar, Typography } from '@mui/material'

import { Link } from 'react-router-dom'

import React from 'react'

export const PageHeader = ({title , curPage}) => {
  return (
    <Typography>
    <Typography variant='h2' >
     {title}
    </Typography>
        <Typography>
          <Toolbar>
          <Link to={"/"}>
            HOME
            </Link>
           <List>
            <ListItem aria-current="page">
          /  {curPage}
            </ListItem>
           </List>
        
           
            
          </Toolbar>
        </Typography>

</Typography>
  )
}
