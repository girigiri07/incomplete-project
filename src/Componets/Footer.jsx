import { Icon, List, ListItem, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const title = "About ShopCart";
const desc = "Eduaid theme number one world class university in the world There are student are studing always in this university for all time.";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
    {
        iconName: 'icofont-google-map',
        text: 'New York, USA.',
    },
    {
        iconName: 'icofont-phone',
        text: '+880 123 456 789',
    },
    {
        iconName: 'icofont-envelope',
        text: 'info@shopcart.com',
    },
]

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]

const ItemList = [
    {
        text: 'All Products',
        link: '/shop',
    },
    {
        text: 'Shop',
        link: '/shop',
    },
    {
        text: 'Blog',
        link: '/blog',
    },
    {
        text: 'About',
        link: '/about',
    },
    {
        text: 'Policy',
        link: '#',
    },
    {
        text: 'FAQs',
        link: '/about',
    }
]

const quickList = [
    {
        text: 'Summer Sessions',
        link: '#',
    },
    {
        text: 'Events',
        link: '#',
    },
    {
        text: 'Gallery',
        link: '#',
    },
    {
        text: 'Forums',
        link: '#',
    },
    {
        text: 'Privacy Policy',
        link: '#',
    },
    {
        text: 'Terms of Use',
        link: '#',
    },
]

const tweetList = [
    {
        iconName: 'icofont-twitter',
        desc: <p>Aminur islam <a href="#">@ShopCart Greetings!  #HTML_Template</a> Grab your item, 50% Big Sale Offer !!</p>,
    },
    {
        iconName: 'icofont-twitter',
        desc: <p>Somrat islam <a href="#">@ShopCart Hey! #HTML_Template</a> Grab your item, 50% Big Sale Offer !!</p>,
    },
]

const footerbottomList = [
    {
        text: 'Faculty',
        link: '#',
    },
    {
        text: 'Staff',
        link: '#',
    },
    {
        text: 'Students',
        link: '#',
    },
    {
        text: 'Alumni',
        link: '#',
    },
]
export const Footer = () => {
  return (
   <Typography>
    <Typography>
        {title}
    </Typography>
    <Typography>
        {desc}
        <List>
            {
                addressList.map((data , index)=>(
                    <ListItem key={index}>
                        <Icon>
                            {data.iconName}
                        </Icon>
                        {data.text}

                    </ListItem>
                ))
            }
        </List>
        <List>
            {
                socialList.map((data , index)=>(
                    <ListItem key={index}>
                       <a href='#'>
                       <Icon>
                            {data.iconName}
                        </Icon>
                        {data.text}
                       </a>

                    </ListItem>
                ))
            }
        </List>
    </Typography>
    <Typography>
        {quickTitle}
    </Typography>
    <Typography>
        
        <List>
            {
                quickList.map((data , index)=>(
                    <ListItem key={index}>
                      <a href='#'>
                      {data.text}
                      </a>
                       

                    </ListItem>
                ))
            }
        </List>
       
    </Typography>
    <Typography>
        {ItemTitle}
    </Typography>
    <Typography>
        
        <List>
            {
                ItemList.map((data , index)=>(
                    <ListItem key={index}>
                      <a href='#'>
                      {data.text}
                      </a>
                       

                    </ListItem>
                ))
            }
        </List>
       
    </Typography>
    
    <Typography>
        {tweetTitle}
    </Typography>
    <Typography>
        
        <List>
            {
                tweetList.map((data , index)=>(
                    <ListItem key={index}>
                   <Icon>
                    {data.iconName}
                   </Icon>
                       {data.desc}

                    </ListItem>
                ))
            }
        </List>
       
    </Typography>

    <Typography>
        <Typography>
            &copy;2024 <Link to="/">Shop Cart </Link>  Designed By <a href='#' target='_blank'>
                GIRI 
            </a>


        </Typography>
        <Typography>
            {
                footerbottomList.map((footData , index)=>(
                    <a href='#' key={index}>
                        {footData.text}
                    </a>
                ))
            }
        </Typography>
    </Typography>
   </Typography>
  )
}
