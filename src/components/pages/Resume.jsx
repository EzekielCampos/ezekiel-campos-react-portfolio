import { Grid2 as Grid, Typography, Link, List } from "@mui/material";
// Data that will be displayed on the page and added as a prop to Skills component
import { skills, libraries } from "../../assets/js/skillsItems";

// Skills component will display all the items to the page
import { Skills } from "../UI/Skills";

export const Resume = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        paddingTop: "50px",
        paddingBottom: "100px",
        background: "#CED3DC",
      }}
    >
      <Grid
        container
        size={12}
        justifyContent={"center"}
        sx={{ background: "white", border: "2px, black,solid" }}
      >
        {/* Title and below is a link to a download for the resume */}
        <Grid size={12}>
          <Typography textAlign="center" variant="h3">
            Resume
          </Typography>
        </Grid>
        <Grid size={12} sx={{ paddingBottom: "40px" }}>
          <Typography textAlign="center" variant="body1">
            Download my{" "}
            {/* This link will allow the user to download resume with a click */}
            <Link
              href="/pdf/ezekiel-campos-resume.pdf"
              download="ezekiel-campos-resume.pdf"
              underline="hover"
            >
              Resume
            </Link>
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        size={12}
        sx={{
          paddingLeft: "60px",
          paddingRight: "60px",
        }}
      >
        {/* Below the title and download is a list of Proficiencies and Libraries */}
        <Grid size={6} sx={{ border: "1px black dotted", paddingLeft: "10px" }}>
          <Typography variant="h5">Proficiencies:</Typography>

          <List>
            {/* Use the skills components to display all the skills to the page */}
            <Skills data={skills} />
          </List>
        </Grid>
        <Grid size={6} sx={{ border: "1px black dotted", paddingLeft: "10px" }}>
          <Typography variant="h5">Libraries:</Typography>

          <List>
            {/* Use the skills components to display all the different libraries
            that I have worked with */}
            <Skills data={libraries} />
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};
