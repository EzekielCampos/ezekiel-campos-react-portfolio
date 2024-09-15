import { useState } from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
// import RestoreIcon from "@mui/icons-material/Restore";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import HandshakeIcon from "@mui/icons-material/Handshake";
import githubIcon from "../assets/github-mark.svg";
export const Footer = () => {
  const [value, setValue] = useState(0);
  const handleGitHubClick = () => {
    window.location.href = "https://github.com/EzekielCampos"; // Replace with your GitHub URL
  };

  return (
    <Box
    sx={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      background: "linear-gradient(90deg, #f5f7fa, #c3cfe2)",
      padding: '8px',
      boxShadow: '0 -1px 4px rgba(0,0,0,0.2)',
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
      <BottomNavigationAction
        label="Contact Me"
        icon={<HandshakeIcon style={{ width: 35, height: 35 }} />}
      />
    </BottomNavigation>
  </Box>

  );
};
