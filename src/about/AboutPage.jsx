import React from 'react'
import { 
    ImageList,
    List,
    Typography,
   

 } from '@mui/material'
import { PageHeader } from '../Componets/PageHeader';

const aboutList = [
    {
    imgUrl: '/images/about/icon/01.jpg',
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Skilled Instructors',
    desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
    {
    imgUrl: '/images/about/icon/02.jpg',
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Get Certificate',
    desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
    {
    imgUrl: '/images/about/icon/03.jpg',
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Online Classes',
    desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
    ]
    const year = "30+";
    const expareance = "Years Of Experiences";
    const subTitle = "About Our Brand";
const title = "Good Qualification Services And Better Expriences";
const desc = "Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.";

export const AboutPage = () => {
  return (
    <Typography>

    <Typography>
           <PageHeader title="About Our Brand" curPage="About"/>
        </Typography>
        <Typography>
            <img src='images/about/01.jpg' alt='' />
        </Typography>
        <Typography>
            <img src='images/about/02.jpg' alt='' />
        </Typography>
        <Typography variant='h3'>
            {year}
        </Typography>
        <Typography variant='body1'>
            {expareance}
        </Typography>
        <Typography>
        <Typography >
            {subTitle}
        </Typography>
        <Typography variant='h2'>
            {title}
        </Typography>
        <Typography variant='body1'>
            {desc}
        </Typography>
        </Typography>

        <Typography>
            {
                aboutList.map((data , index)=>(
                    <List>
                        <ImageList key={index}>
                            <img src={data.imgUrl} alt='' />
                        </ImageList>
                        <Typography variant='h5'>
                            {data.title}
                        </Typography>
                        <Typography variant='body'>
                            {data.desc}
                        </Typography>
                    </List>
                ))
            }
        </Typography>
        </Typography>
  )
}
