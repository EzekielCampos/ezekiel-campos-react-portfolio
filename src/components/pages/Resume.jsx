import { Grid2 as Grid, Typography, Link } from "@mui/material";

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
        <Typography variant="h4">Resume</Typography>
      </Grid>
      <Grid
        container
        size={12}
        justifyContent={"center"}
        sx={{ background: "skyBlue" }}
      >
        <Typography variant="body1">
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
     
    </Grid>
  );
};
