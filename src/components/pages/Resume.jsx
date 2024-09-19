import {
  Grid2 as Grid,
  Typography,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Resume = () => {
  return (
    <Grid
      container
      sx={{
        // minHeight: "100vh",
        paddingTop: "50px", // Padding around content
        paddingBottom: "100px",
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
              <ListItemText>First Item <IconButton sx={{ color: "black" }}>
                <GitHubIcon style={{ width:20, height: 20, }} />
              </IconButton></ListItemText>
              
            </ListItem>
            <ListItem>-SOmething</ListItem>
            <ListItem>-cool</ListItem>
            <ListItem>-is </ListItem>
            <ListItem>-about</ListItem>
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};
