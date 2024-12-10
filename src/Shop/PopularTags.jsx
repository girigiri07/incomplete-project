import { ListItem, Typography ,List} from '@mui/material';
import React from 'react'
const title = "Our Popular Tags";

const tagsList = [ { link: "#", text: "envato", }, { link: "#", text: "themeforest", }, { link: "#", text: "codecanyon", }, { link: "#", text: "videohive", }, { link: "#", text: "audiojungle", }, { link: "#", text: "3docean", }, { link: "#", text: "envato", }, { link: "#", text: "themeforest", }, { link: "#", text: "codecanyon", }, ];

export const PopularTags = () => {
  return (
   <Typography>
    <Typography>
        {title}
    </Typography>
    <Typography>
    <List>
    {
            tagsList.map((tag,index)=>(
                <ListItem key={index}>
                    <a href={tag.link}>
                        {tag.text}
                    </a>

                </ListItem>
            ))
        }
    </List>
    </Typography>
   </Typography>
  )
}
