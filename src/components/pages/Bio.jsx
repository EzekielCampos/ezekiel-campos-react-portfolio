import { Grid2 as Grid, Typography, Avatar } from "@mui/material";
import portrait from "../../assets/img/profile.jpg";

export const Bio = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        minHeight: "750px",
        paddingTop: "50px", // Padding around content
        paddingBottom: "175px", // Adjust this value to ensure there's space for the footer
        background:"#B7B7B7"
      }}
    >
      <Grid
        size={{ xs: 12, md: 5 }}
        display="flex"
        justifyContent="center"
        alignItems={"center"}
      >
        {/* The Avatar component is where the image is placed in a portrait like 
        setting */}
        <Avatar
          alt="Ezekiel Campos"
          src={portrait}
          sx={{ width: 400, height: 400 }}
        />
      </Grid>
      <Grid
        size={{ xs: 12, md: 7 }}
        sx={{ paddingRight: "20px", paddingLeft: "20px" }}
      >
        {/* The bio text will be placed next to the image */}
        <Grid display="flex" justifyContent="center">
          {/* Name header */}
          <Typography variant="h3" component="h1" gutterBottom>
            Ezekiel Campos
          </Typography>
        </Grid>
        {/* Positon subheader */}
        <Grid display="flex" justifyContent="center">
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            style={{ fontWeight: "bold", paddingBottom: "10px" }}
          >
            Full-Stack Developer
          </Typography>
        </Grid>
        {/* Short summary of developer */}
        <Typography variant="body1">
          Welcome to my portfolio page! My journey in programming began little
          over a year ago when I began learning to code in C/C++. I took a
          certficate course through UCSD extension and immediately fell in love
          with it. I was so fascinated about the capabilities that one could do
          with coding that I was hooked! I wanted learn more to feed my passion
          for software development. I am currently attending a coding bootcamp
          through UC Berkeley Extension to improve my skills to be competitive
          and land a position as a full stack developer. My goal is to find an
          entry level position as software engineer, and to find a company that
          wants to invest in me so that I can continue to build on my skills as
          a programmer and a leader. Take a look at some of my work below, and
          if you would like to connect wtih me me all my contact information is
          in the footer.
        </Typography>
      </Grid>
    </Grid>
  );
};
