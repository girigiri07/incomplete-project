import { Button, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const btnText = "Sign Up for Free"
const title = "Shop AnyTime, AnyWhere"
const desc = " Take Shop On Your any Device With Our App & Learn All time What You Want. Just download & Install & Start To Learn"


export const AppSection = () => {
  return (
    <Typography>
        <Typography>
            <Button>
                <Link to='/sign-up'>
                {btnText}
                </Link>
            </Button>
        </Typography>
        <Typography>
           <List>
           <ListItem>
                <a href='#'>
                    <img src='images/app/01.jpg' alt='' />
                </a>
                </ListItem>
                <ListItem>
                <a href='#'>
                    <img src='images/app/01.jpg' alt='' />
                </a>
                </ListItem>
           </List>
        </Typography>
    </Typography>
  )
}
