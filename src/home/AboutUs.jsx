import { Icon, Typography } from '@mui/material';
import React from 'react'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom'
const subTitle = "Why Choose Us";
const title = "Become a Marchant";
const desc = "Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn";
const btnText = "Apply Now";

const countList = [
{
iconName: 'icofont-users-alt-4',
count: '12600',
text: 'Marchant Enrolled',
},
{
iconName: 'icofont-graduate-alt',
count: '30',
text: 'Certified Courses',
},
{
iconName: 'icofont-notification',
count: '100',
text: 'Rewards and GitCards',
},
]
export const AboutUs = () => {
  return (
   <Typography >
    <Typography>
        {
            countList.map((data , index)=>(
                <Typography key={index}>
                    <Icon>
                        {data.iconName}
                    </Icon>
                
                    <Typography>
                      
                            <CountUp end={data.count} />
                            <Typography>
                                +
                            </Typography>
                       
                        </Typography>
                        <Typography>
                            {data.text}
                            </Typography>

                </Typography>
            ))
        }
    </Typography>

    <Typography>
        <Typography>
            {subTitle}
        </Typography>
        <Typography>
            {title}
        </Typography>
        <Typography>
            {desc}
        </Typography>
        <Typography>
            <Link to="/sign-up">
                {btnText}
            </Link>
        </Typography>
    </Typography>

<Typography>
    <img src='images/instructor/01.png' alt='' />
</Typography>

   </Typography>
  )
}
