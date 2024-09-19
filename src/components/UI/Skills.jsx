import {
    ListItem,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";
  


  export const Skills = ({data})=>{

    return(data.map((item)=>{
        return(
            <ListItem key={item.id}>
            <ListItemIcon style={{ minWidth: "auto", marginRight: "8px" }}>
              •
            </ListItemIcon>
            <ListItemText>
              {item.tech}
            </ListItemText>
          </ListItem>

        )
    })
       
    )

  }



{/* <ListItem>
<ListItemIcon style={{ minWidth: "auto", marginRight: "8px" }}>
  •
</ListItemIcon>
<ListItemText>
  First Item
  <GitHubIcon
    style={{ width: 20, height: 20, paddingLeft: "5px" }}
  />
</ListItemText>
</ListItem>
<ListItem>
<ListItemIcon style={{ minWidth: "auto", marginRight: "8px" }}>
  •
</ListItemIcon>
<ListItemText fontSize={10}>
  second Item
  {/* <ListItemIcon sx={{ width: 20, height: 20, color:"black" }}>{reactIcon}</ListItemIcon> */}
  {/* React icon */}
// </ListItemText>
// </ListItem>
// <ListItem>
// <ListItemIcon style={{ minWidth: "auto", marginRight: "8px" }}>
//   •
// </ListItemIcon>
// <ListItemText>
//   second Item
//   <JavascriptIcon sx={{ width: 20, height: 20 }} />{" "}
// </ListItemText>
// </ListItem>

// <ListItem>
// <ListItemIcon style={{ minWidth: "auto", marginRight: "8px" }}>
//   •
// </ListItemIcon>
// <ListItemText>
//   second Item
//   <ListItemIcon>{mongoIcon}</ListItemIcon>
// </ListItemText>
// </ListItem> */}