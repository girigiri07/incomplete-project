import { ListItem, ListItemIcon, Typography } from '@mui/material'
import React from 'react'
import { PageHeader } from '../Componets/PageHeader'
import blogList from '../utils/dumpyblogdata/blogdata'
import { Link } from 'react-router-dom'
import { List } from '@mui/icons-material'
export const BlogPage = () => {
  return (
  <Typography>
      <Typography>
        <PageHeader title="Blog Page" curPage="Blog" />
    </Typography>

    <Typography>
      {
        blogList.map((blog , index) => (
          <Typography key={index} >

                <Typography>
                  <Link to={`/blog/${blog.id}`}>
                    <img src={blog.imgUrl} alt='' />
                  </Link>
                  </Typography>

                  <Typography>
                  <Link to={`/blog/${blog.id}`}>
                   {blog.title}
                  </Link>
                  </Typography>

                  <Typography>
                    {
                      blog.metaList.map((vol , ind) => (
                        <List>
                          <ListItem key={ind}>
                            <ListItemIcon >
                              {vol.iconName}
                            </ListItemIcon>
                            {vol.text}
                          </ListItem>
                        </List>
                      ))
                    }
                    </Typography>

                    
                  <Typography>
                  <Link to={`/blog/${blog.id}`}>
                   {blog.btnText}
                  </Link>
</Typography>


                        <Typography>
                          icon varum enga 
                          {blog.commentCount}
                          </Typography>

</Typography>


        ))
      }
    </Typography>
  </Typography>
  )
}
