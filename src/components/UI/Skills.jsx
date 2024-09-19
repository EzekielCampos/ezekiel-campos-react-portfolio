import {
    ListItem,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";


  export const Skills = ()=>{

    return(
        <ListItem>
        <ListItemIcon style={{ minWidth: "auto", marginRight: "8px" }}>
          •
        </ListItemIcon>
        <ListItemText>
          second Item
         <ListItemIcon>{mongoIcon}</ListItemIcon>
        </ListItemText>
      </ListItem>
    )



  }