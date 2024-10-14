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
        background: "#CED3DC",
      }}
    >
      <Grid
        xs={12}
        md={5}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          alt="Ezekiel Campos"
          src={portrait}
          sx={{
            width: { xs: 200, sm: 250, md: 350, lg: 400 }, // Responsive sizes for different screen widths
            height: { xs: 200, sm: 250, md: 350, lg: 400 },
          }}
        />
      </Grid>

      <Grid
        alignItems={"center"}
        size={{ xs: 12, md: 7 }}
        sx={{ paddingRight: "20px", paddingLeft: "20px" }}
      >
        {/* The bio text will be placed next to the image */}
        <Grid
          sx={{
            paddingRight: "20px",
            paddingLeft: "20px",
            textAlign: { xs: "center", md: "center" }, // Center text on small screens
          }}
        >
          {/* Name header */}
          <Typography variant="h3" component="h1" gutterBottom>
            Ezekiel Campos
          </Typography>
        </Grid>
        {/* Positon subheader */}
        <Grid
          sx={{
            paddingRight: "20px",
            paddingLeft: "20px",
            textAlign: { xs: "center", md: "center" }, // Center text on small screens
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            style={{ fontWeight: "bold", paddingBottom: "10px" }}
          >
            Full-Stack Developer
          </Typography>
        </Grid>
        <Grid
          sx={{
            paddingRight: "20px",
            paddingLeft: "20px",
            textAlign: { xs: "center", md: "center" }, // Center text on small screens
          }}
        >
          {/* Short summary of developer */}
          <Typography variant="body1">
            Welcome to my portfolio page! My journey in programming began little
            over a two years ago when I began learning to code in C/C++. I took
            a certficate course through UCSD and had so much fun learning how
            code that I was eager for more! I wanted to continue feed my passion
            for software development. I just recently completed a coding
            bootcamp through UC Berkeley Extension. The program help improve my
            skills to be competitive to land a position as a full stack
            developer. My goal is to find an internship or entry level position.
            I'm looking to find a company that wants to invest in me so that I
            can continue to build on my skills as a programmer and a leader.
            Take a look at some of my work in the projects tab, and if you would
            like to connect wtih find me on LinkedIn the link is in the footer
            below.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
