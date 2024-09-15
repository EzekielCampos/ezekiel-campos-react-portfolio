import { Grid2 as Grid, Typography } from "@mui/material";

export const Bio = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ minHeight: "100vh",paddingTop:"80px",// Padding around content
        paddingBottom: '100px', // Adjust this value to ensure there's space for the footer
}}
      
    >
      <Grid size={{ xs: 12, md: 7}}>
        <Typography variant="h3" component="h1" gutterBottom>
          Ezekiel Campos
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Full-Stack Developer
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          vehicula urna eu nunc consequat, a pretium lectus posuere. Integer
          eget magna nec sapien varius laoreet.
        </Typography>
        <Typography variant="body1">
          Phasellus id justo nec libero viverra dignissim. Donec vehicula est at
          dictum congue. Nulla facilisi. Mauris tristique gravida libero, sit
          amet cursus lectus pretium a.
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 5 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Ezekiel Campos
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Full-Stack Developer
        </Typography>
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
          in the footer.{" "}
        </Typography>
      </Grid>
    </Grid>
  );
};
