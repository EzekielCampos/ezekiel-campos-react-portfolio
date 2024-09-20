import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

// This component will output all the items into a list using the data props
export const Skills = ({ data }) => {
  // Map through the array to display each item
  return data.map((item) => {
    return (
      // Provide key to list item
      <ListItem className="skill" key={item.id}>
        <ListItemIcon style={{ minWidth: "auto", marginRight: "8px" }}>
          •
        </ListItemIcon>
        {/* Display the name of the skill from the prop */}
        <ListItemText>{item.tech}</ListItemText>
      </ListItem>
    );
  });
};
