import { Grid2 as Grid, Typography, Link, List } from "@mui/material";

import { skills, libraries } from "../../assets/js/skillsItems";

import { Skills } from "../UI/Skills";

export const Resume = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        // minHeight: "100vh",
        paddingTop: "50px", // Padding around content
        paddingBottom: "100px",
        background: "#B7B7B7",
      }}
    >
      <Grid
        container
        size={12}
        justifyContent={"center"}
        sx={{ background: "white", border: "2px, black,solid" }}
      >
        <Grid size={12}>
          <Typography textAlign="center" variant="h3">
            Resume
          </Typography>
        </Grid>
        <Grid size={12} sx={{paddingBottom:"40px"}}>
          <Typography textAlign="center" variant="body1">
            Download my{" "}
            <Link
              href="../../../public/pdf/ezekiel-campos-resume.pdf"
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
          // minHeight: "100vh",
       
      paddingLeft:"60px",
      paddingRight:"60px"

        }}
      >
        <Grid size={6} sx={{ border: "1px black dotted", paddingLeft:"10px"}}>
          <Typography variant="h5">Proficiencies:</Typography>

          <List>
            <Skills data={skills} />
          </List>
        </Grid>
        <Grid size={6} sx={{ border: "1px black dotted",paddingLeft:"10px" }}>
          <Typography variant="h5">Libraries:</Typography>

          <List>
            <Skills data={libraries} />
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};
