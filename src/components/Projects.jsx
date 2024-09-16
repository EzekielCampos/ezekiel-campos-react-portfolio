// import { useState } from "react";
import { ProjectCard } from "./UI/Card";

import { Grid2 as Grid } from "@mui/material";


import { projectData } from "../assets/js/projects";

export const Projects = () => {
  //   const [project, setProject] = useState([]);

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      sx={{
        minHeight: "50vh",
        paddingTop: "50px", // Padding around content
        paddingBottom: "175px", // Adjust this value to ensure there's space for the footer
      }}
    >
      <ProjectCard data={projectData}></ProjectCard>
      {/* <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard> */}
    </Grid>
  );
};
