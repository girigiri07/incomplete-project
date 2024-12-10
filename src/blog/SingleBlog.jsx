import React, { useState } from 'react'
import blogList from '../utils/dumpyblogdata/blogdata'
import { useParams } from 'react-router-dom'
import { PageHeader } from '../Componets/PageHeader'
import { 
    Typography,
    List,
    ListItem,
    ListItemIcon

 } from '@mui/material'
import { PopularTags } from '../Shop/PopularTags'
import { PopularPost } from '../Shop/PopularPost'

 const socialList = [
    {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
    },
    {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
    },
    {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
    },
    {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
    },
    {
    link: "#",
    iconName: "icofont-pinterest",
    className: "pinterest",
    },
    ];
export const SingleBlog = () => {

    const [blog , setBlog] = useState(blogList)
    const {id} = useParams()

    const result = blog.filter((b) => b.id === Number(id))

  return (
    <div>
       <PageHeader title={"Single Blog Page "} curPage={"Blog / Blog Details"} />

       <Typography>
        <Typography>
            {
                result.map((item) => (
                    <Typography key={item.id}>
                           <Typography>
                           <img src={item.imgUrl} alt='' />
                            </Typography>

                        <Typography variant='h2'>

                            {item.title}

                        </Typography>
                        
                        <Typography>
                    {
                      item.metaList.map((vol , ind) => (
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


<Typography variant='body1'>
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performePluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
    </Typography>


    <Typography variant='body1'>
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performePluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
    </Typography>



                        <Typography>
                        <a href='#' >
                            ...Mulisse Hunter
                        </a>
                            </Typography>

                    <Typography>
                    <Typography variant='body1'>
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performePluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
    </Typography>


    <img src='/images/blog/single/01.jpg' alt='' />


    <Typography variant='body1'>
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performePluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
    </Typography>

    <img src='/images/blog/single/02.jpg' alt='' />

    <Typography variant='body1'>
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performePluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
    </Typography>

    <List>
        <ListItem>
            <a href='#' >
                Agency
            </a>
        </ListItem>
        <ListItem>
            <a href='#' >
                Business
            </a>
        </ListItem>
        <ListItem>
            <a href='#' >
                Personal
            </a>
        </ListItem>
    </List>



                        </Typography>



                        </Typography>


                ))
            }
        </Typography>

<Typography>
{
    socialList.map((data,index) => (
        <List>
<ListItem key={index}>
                    <a href='#' >
                        {data.iconName}
                    </a>
                </ListItem>
            </List>
    ))
  }
</Typography>


<Typography>
    <a href='#'>
        icon varum enga 
        Previous Blog
    </a>
    <a href='#'>
       
       konja text varum
    </a>
</Typography>
<Typography>
    <a href='#'>
        icon varum enga 
        Previous Blog
    </a>
    <a href='#'>
       
       konja text varum
    </a>
</Typography>

<Typography>
    <PopularTags />
    <PopularPost />
</Typography>
       </Typography>

    </div>
  )
}
