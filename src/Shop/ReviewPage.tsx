import { Button, List , ListItem, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import ReviewPageSchema from '../utils/ReviewPageValidation/ReviewPageSchema';
import ReviewPageTypes from '../utils/ReviewPageValidation/ReviewPageTypes';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PopularPost } from './PopularPost';
import { PopularTags } from './PopularTags';


const reviwtitle = "Add a Review";

let ReviewList = [
    {
      imgUrl: "/src/assets/images/instructor/01.jpg",
      imgAlt: "Client thumb",
      name: "Ganelon Boileau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/02.jpg",
      imgAlt: "Client thumb",
      name: "Morgana Cailot",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/03.jpg",
      imgAlt: "Client thumb",
      name: "Telford Bois",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/04.jpg",
      imgAlt: "Client thumb",
      name: "Cher Daviau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
  ];

export const ReviewPage = () => {
  
  const {
    control :reviewController,
    formState:{errors:reviewErrors},
    handleSubmit,
    reset,
    getValues,
    setValue,
    watch,
  }= useForm<ReviewPageTypes>({
    criteriaMode: "all",
    mode: "all",
        reValidateMode: "onChange",
        defaultValues:{

        fullName:'',
        email:'',
        message:'',
       
        },
        resolver:yupResolver(ReviewPageSchema)
  })

    const [ reviewShow , setReviewShow] = useState(true)
  return (
    <Typography>
        <Typography>
            <Button>
                Description
            </Button>
            <Button>
                Reviews
            </Button>
        </Typography>

        <Typography>
            {
                ReviewList.map((review , index) => (
                    <>
                    <List>
                        <ListItem key={index}>
                            <img src={review.imgUrl} alt='' />
                        </ListItem>


                    </List>
                    <Typography>
                    {review.name}
                        </Typography>
                        <Typography>
                            {review.date}
                        </Typography>
                        <Typography>
                            {review.desc}
                        </Typography>
                        </>
                ))
            }
        </Typography>

        <Typography>
            <Typography>
                {reviwtitle}
            </Typography>
            <Typography>
            <Controller 
          control={reviewController}
          name='fullName'
          defaultValue=''
          render={({field  , formState} ) =>{
            return(
                <TextField sx={{
                  display:'flex',
                  justifyContent:'center',
                  width:'800px',
             

                }}
                // name={name}
                // type='text'
                {...field}
                onChange={(e) => {
                  field.onChange(e) 
                
                }}
                // value={searchText}
                label='Full Name'
                variant='outlined'
                
               
                />
            )
        } }
          />
             <Controller 
          control={reviewController}
          name='email'
          defaultValue=''
          render={({field  , formState} ) =>{
            return(
                <TextField sx={{
                  display:'flex',
                  justifyContent:'center',
                  width:'800px',
             

                }}
                // name={name}
                // type='text'
                {...field}
                onChange={(e) => {
                  field.onChange(e) 
                
                }}
                // value={searchText}
                label='Email'
                variant='outlined'
                
               
                />
            )
        } }
          />
             <Controller 
          control={reviewController}
          name='messages'
          defaultValue=''
          render={({field  , formState} ) =>{
            return(
                <TextField sx={{
                  display:'flex',
                  justifyContent:'center',
                  width:'800px',
             

                }}
                // name={name}
                // type='text'
                {...field}
                onChange={(e) => {
                  field.onChange(e) 
                
                }}
                // value={searchText}
                label='Type Message Here'
                variant='outlined'
                
               
                />
            )
        } }
          />
            </Typography>

            <Typography>
              <Button>
                Submit Review
              </Button>
            </Typography>
        </Typography>
      <Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum, libero quam, necessitatibus cupiditate eos aliquam itaque cumque unde temporibus! Esse molestias voluptate libero necessitatibus quasi. Hic, nobis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum, libero quam, necessitatibus cupiditate eos aliquam itaque cumque unde temporibus! Esse molestias voluptate libero necessitatibus quasi. Hic, nobis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum, libero quam, necessitatibus cupiditate eos aliquam itaque cumque unde temporibus! Esse molestias voluptate libero necessitatibus quasi. Hic, nobis.
          .

        </Typography>
        <Typography>
          <img src='/images/shop/01.jpg' alt='' />
        </Typography>
        <List>
          <ListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum, libero quam, necessitatibus cupiditate eos aliquam itaque cumque unde temporibus! Esse molestias voluptate libero necessitatibus quasi. Hic, nobis.

          </ListItem>
          <ListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum, libero quam, necessitatibus cupiditate eos aliquam itaque cumque unde temporibus! Esse molestias voluptate libero necessitatibus quasi. Hic, nobis.
          
          </ListItem>
          <ListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum, libero quam, necessitatibus cupiditate eos aliquam itaque cumque unde temporibus! Esse molestias voluptate libero necessitatibus quasi. Hic, nobis.
          
          </ListItem>
          <ListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum, libero quam, necessitatibus cupiditate eos aliquam itaque cumque unde temporibus! Esse molestias voluptate libero necessitatibus quasi. Hic, nobis.
          
          </ListItem>
          <ListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum, libero quam, necessitatibus cupiditate eos aliquam itaque cumque unde temporibus! Esse molestias voluptate libero necessitatibus quasi. Hic, nobis.
          
          </ListItem>
          <ListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum, libero quam, necessitatibus cupiditate eos aliquam itaque cumque unde temporibus! Esse molestias voluptate libero necessitatibus quasi. Hic, nobis.
          
          </ListItem>
        </List>
      </Typography>
      <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum, libero quam, necessitatibus cupiditate eos aliquam itaque cumque unde temporibus! Esse molestias voluptate libero necessitatibus quasi. Hic, nobis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum, libero quam, necessitatibus cupiditate eos aliquam itaque cumque unde temporibus! Esse molestias voluptate libero necessitatibus quasi. Hic, nobis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum, libero quam, necessitatibus cupiditate eos aliquam itaque cumque unde temporibus! Esse molestias voluptate libero necessitatibus quasi. Hic, nobis.
          .

        </Typography>
        <Typography>
          <Typography>
            <PopularPost />
          </Typography>
          <Typography>
            <PopularTags />
          </Typography>
        </Typography>
    </Typography>
  )
}
