import * as React from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Grid2 as Grid,
} from "@mui/material";
// import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import githubIcon from "../assets/github-mark.svg";
export const Footer = () => {
  const [value, setValue] = React.useState(0);
  const handleGitHubClick = () => {
    window.location.href = "https://github.com/EzekielCampos"; // Replace with your GitHub URL
  };

  return (
    <Grid container>
      <Box sx={{ width: 1000 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Recents"
            icon={
              <img
                src={githubIcon}
                alt="GitHub Icon"
                style={{ width: 24, height: 24 }}
                onClick={handleGitHubClick}
              />
            }
          />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
    </Grid>
  );
};
