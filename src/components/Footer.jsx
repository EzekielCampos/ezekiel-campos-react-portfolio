import { useState } from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import githubIcon from "../assets/github-mark.svg";
import linkedinIcon from '../assets/linkedin-mark.svg'
export const Footer = () => {
  const [value, setValue] = useState(0);
  const handleGitHubClick = () => {
    window.location.href = "https://github.com/EzekielCampos"; // Replace with your GitHub URL
  };
  const handleLinkedinClick = () => {
    window.location.href = "https://www.linkedin.com/"; // Replace with your GitHub URL
  };

  return (
//     <Box
//     sx={{
//       position: 'fixed',
//       bottom: 0,
//       left: 0,
//       width: '100%',
//       background: "linear-gradient(90deg, #f5f7fa, #c3cfe2)",
//       padding: '8px',
//       boxShadow: '0 -1px 4px rgba(0,0,0,0.2)',
//       marginTop: '20px',
//     }}
//   >
//     <BottomNavigation
//       showLabels
//       value={value}
//       onChange={(event, newValue) => {
//         setValue(newValue);
//       }}
//     >
//       <BottomNavigationAction
//         label="GitHub"
//         icon={
//           <img
//             src={githubIcon}
//             alt="GitHub Icon"
//             style={{ width: 35, height: 35 }}
//             onClick={handleGitHubClick}
            
//           />
//         }
//       />
//       <BottomNavigationAction
//         label="Contact Me"
//         icon={<HandshakeIcon style={{ width: 35, height: 35 }} />}
//       />
//     </BottomNavigation>
//   </Box>
<Box
    sx={{
      // position: 'fixed',
      // bottom: 0,
      // left: 0,
      width: '100%',
      background: 'linear-gradient(90deg, #f5f7fa, #c3cfe2)',
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
            
          />
        }
        sx={{
          '&:hover': {
            color: 'primary.main', // Change color on hover
            backgroundColor: 'rgba(0,0,0,0.1)', // Optional: add background color on hover
          },
        }}
        onClick={handleGitHubClick}
      />
      <BottomNavigationAction
        label="Linkedin"
        icon={<img src={linkedinIcon} style={{width: 35, height: 35, color:"black"}}/>}
        sx={{
          '&:hover': {
            color: 'primary.main', // Change color on hover
            backgroundColor: 'rgba(0,0,0,0.1)', // Optional: add background color on hover
          },
        }}
        onClick={handleLinkedinClick}
      />
    </BottomNavigation>
  </Box>

  );
};
