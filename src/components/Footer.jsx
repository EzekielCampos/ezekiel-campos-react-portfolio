import { useState } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
// These icons will be used in the footer to indicate which website they will be
// redirected to
import githubIcon from "../assets/github-mark.svg";
import linkedinIcon from "../assets/linkedin-mark.svg";
export const Footer = () => {
  // This will handle the selection of the tab at the bottom
  const [value, setValue] = useState(0);
  const handleGitHubClick = () => {
    window.location.href = "https://github.com/EzekielCampos";
  };
  const handleLinkedinClick = () => {
    window.location.href = "https://www.linkedin.com/in/ezekiel-campos-170b11332/";
  };

  return (
    <Box
      sx={{
        width: "100%",
        background: "linear-gradient(90deg, #f5f7fa, #c3cfe2)",
        padding: "12px",
        boxShadow: "0 -1px 4px rgba(0,0,0,0.2)",
      }}
    >
      {/* Component from Material UI that handles the navigation of the footer */}
      <BottomNavigation
        showLabels
        // This value indicates which icon was selected
        value={value}
        // Updates the state when one of the items are selected
        // in footer
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {/* Using a GitHubSVG the log will redirect to GitHubpage */}
        <BottomNavigationAction
          label="GitHub"
          icon={
            <img
              src={githubIcon}
              alt="GitHub Icon"
              style={{ width: 35, height: 35 }}
            />
          }
          // When the cursor hovers over icons it will indicate with slight background change
          sx={{
            "&:hover": {
              color: "primary.main", // Change color on hover
              backgroundColor: "rgba(0,0,0,0.1)", // Optional: add background color on hover
            },
          }}
          // redirects to github page when clicked on
          onClick={handleGitHubClick}
        />
        {/* Linkedin svg is used as an icon to redirect user to linkedin profile */}
        <BottomNavigationAction
          label="Linkedin"
          icon={
            <img
              src={linkedinIcon}
              style={{ width: 35, height: 35, color: "black" }}
            />
          }
          // When the cursor hovers over icons it will indicate with slight background change
          sx={{
            "&:hover": {
              color: "primary.main", // Change color on hover
              backgroundColor: "rgba(0,0,0,0.1)", // Optional: add background color on hover
            },
          }}
          onClick={handleLinkedinClick}
        />
      </BottomNavigation>
    </Box>
  );
};
