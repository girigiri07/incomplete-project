import { ListItem,
     Typography ,
     List
    } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const title = "Most Popular Post"
const postList = [ { 
    id:1, imgUrl: '/blog/10.jpg', imgAlt: 'rajibraj91', title: 'Poor People Campaign Our Resources', date: 'Jun 05,2022', }, 
    { id:2, imgUrl: 'images/blog/11.jpg', imgAlt: 'rajibraj91', title: 'Poor Peoples Campaign Our Resources', date: 'Jun 05,2022', }, 
    { id:3, imgUrl: 'images/blog/12.jpg', imgAlt: 'rajibraj91', title: 'Poor Peoples Campaign Our Resources', date: 'Jun 05,2022', }, 
    { id:4, imgUrl: 'images/blog/09.jpg', imgAlt: 'rajibraj91', title: 'Poor Peoples Campaign Our Resources', date: 'Jun 05,2022', }, ]
export const PopularPost = () => {
  return (
   <Typography>
    <Typography>
        {title}
    </Typography>
    <Typography>
      <List>
      {
            postList.map((post , index)=>(
                <>
                <ListItem key={index}>
                    <Link to={`/blog/${post.id}`}>
                        <img src={post.imgUrl} alt='' />
                    </Link>
                </ListItem>
                <ListItem>
                <Link to={`/blog/${post.id}`}>
                        <img src={post.title} alt='' />
                    </Link>
                    <Typography>
                        {post.date}
                    </Typography>
                    </ListItem>
                    </>
            ))
        }
      </List>
    </Typography>
   </Typography>
  )
}
