import { Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const title = "More Then 60,000 Customers";

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
{
imgUrl: 'images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: 'images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: 'images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: 'images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: 'images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: 'images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
]




export const Location = () => {
  return (
   <Typography >
    <Typography>
        {title}
    </Typography>
    <Typography>
        {desc}
    </Typography>
  
    <Typography>
        {
            clientsList.map((items , index)=> (
                <><Typography key={index}>
                    <Link to="/sign-up">
                        <Typography>
                            {items.text}
                        </Typography>
                    </Link>
                </Typography><Typography>
                        <img src={items.imgUrl} alt='' />
                    </Typography></>
            ))
        }
       
    </Typography>
   </Typography>
  )
}
  {/* pending sign up link mattum future la change panra mari erukum  */}
//   {
//     clientsList.map((items , index)=>(
//         <Typography key={index}>
//             <Link to="/sign-up">
//         <Typography>
//             {items.text}
//         </Typography>
//         </Link>
//         <Typography>
//             <img src={items.imgUrl} alt='' />
//         </Typography>
//     ))
// }