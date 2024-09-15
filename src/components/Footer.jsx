import * as React from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Grid2 as Grid,
} from "@mui/material";
// import RestoreIcon from "@mui/icons-material/Restore";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import githubIcon from "../assets/github-mark.svg";
export const Footer = () => {
  const [value, setValue] = React.useState(0);
  const handleGitHubClick = () => {
    window.location.href = "https://github.com/EzekielCampos"; // Replace with your GitHub URL
  };

  return (
    <Grid container >
      <Box
        sx={{
            height:"100%",
          width: "150%",
          marginTop: "100%",
          padding: "8px",
          background: "linear-gradient(90deg, #f5f7fa, #c3cfe2)",
    
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="GitHub"
            icon={
              <img
                src={githubIcon}
                alt="GitHub Icon"
                style={{ width: 35, height: 35 }}
                onClick={handleGitHubClick}
              />
            }
          />
          {/* <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
        </BottomNavigation>
      </Box>
    </Grid>
  );
};
