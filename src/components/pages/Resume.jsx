import {
  Grid2 as Grid,
  Typography,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaReact } from "react-icons/fa"; // Import the React icon from react-icons
import JavascriptIcon from "@mui/icons-material/Javascript";
const mongoIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      style={{ width: '24px', height: '24px', fill: '#47A248' }}
    >
      <path d="M15.816 0c.204 3.211.57 5.071 1.336 6.339.799 1.321 1.731 2.586 2.689 3.858l.109.143c1.005 1.317 1.971 2.582 2.689 4.075 2.728 5.654-1.513 12.359-4.022 13.621-.271.136-.53.272-.734.408-.386.272-.842.68-.995.544-.159-.136 0-1.154 0-1.95v-.681c0-.204.023-.272 0-.318-.045-.113-.203-.158-.293-.204-.318-.068-.68.34-.885.567-.068.045-.068.045-.068.045-.068.068-.045.09-.113.158-2.564 2.814-4.656 1.881-5.453.295-1.358-2.611-1.473-6.249-1.336-8.065.136-1.541.385-3.655.271-5.882v-.068c-.044-.999-.068-1.999-.068-2.998v-.363c0-.408-.023-.749-.023-1.113.113-3.2-.408-4.699-.408-4.699-.068-.204-.68-.999-.68-1.135l-.068-.067c-.091-.159-.045-.431 0-.567.613-1.635 2.769-3.809 3.12-4.087l.068-.068c.068-.067.204-.045.25 0 .158.159.476.885.726 1.404.067.136.136.271.158.363.999 2.09 2.405 3.514 3.679 4.968zm-1.314 31.5h2.998c.022 0 .045 0 .045-.023-.023.045-.023.023-.045.023h-2.998z" />
    </svg>
  );

export const Resume = () => {
  return (
    <Grid
      container
      sx={{
        // minHeight: "100vh",
        paddingTop: "50px", // Padding around content
        paddingBottom: "200px",
        background: "lightGrey",
      }}
    >
      <Grid
        container
        size={12}
        justifyContent={"center"}
        sx={{ background: "grey" }}
      >
        <Typography variant="h3">Resume</Typography>
      </Grid>
      <Grid container size={12} sx={{ background: "skyBlue" }}>
        <Grid size={12} sx={{ background: "white" }}>
          <Typography textAlign="center" variant="body1">
            Download my{" "}
            <Link
              href="/path/to/your-file.pdf"
              download="YourFileName.pdf"
              underline="hover"
            >
              Resume
            </Link>
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography variant="h5">Proficiencies:</Typography>
        </Grid>
        <Grid size={12}>
          <List>
            <ListItem>
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
              <ListItemText>
                second Item
                <ListItemIcon>
                  {" "}
                  <FaReact
                    style={{ color: "black", width: 20, height: 20 }}
                  />{" "}
                </ListItemIcon>
                {/* React icon */}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ minWidth: "auto", marginRight: "8px" }}>
                •
              </ListItemIcon>
              <ListItemText>
                second Item
                <JavascriptIcon sx={{ width: 20, height: 20 }} />{" "}
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon style={{ minWidth: "auto", marginRight: "8px" }}>
                •
              </ListItemIcon>
              <ListItemText>
                second Item
               <ListItemIcon>{mongoIcon}</ListItemIcon>
              </ListItemText>
            </ListItem>
           
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};
