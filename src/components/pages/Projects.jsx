// This component will display all the projects in a card
import { ProjectCard } from "../UI/Card";

import { Grid2 as Grid } from "@mui/material";

// This will be the information that will be displayed in the cards
import { projectData } from "../../assets/js/projects";

export const Projects = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      sx={{
        minHeight: "50vh",
        paddingTop: "50px", // Padding around content
        paddingBottom: "100px", // Adjust this value to ensure there's space for the footer
        background:"#CED3DC",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      {/* Use the component to display all the projects in a card passing
      the data to the data prop */}
      <ProjectCard data={projectData}></ProjectCard>
    </Grid>
  );
};
