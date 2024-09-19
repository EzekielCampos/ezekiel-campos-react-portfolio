import { Grid2 as Grid, Typography, Link } from "@mui/material";

export const Resume = () => {
 
        
    
  return <Grid container sx={{ background: "#B7B7B7" }}>
    <Grid size={12}>
      <Typography variant="h4" gutterBottom>
        Resume
      </Typography>
    </Grid>
    <Grid size={12}>
      <Typography variant="body1">
        Download my <Link underline="hover">resume</Link>
      </Typography>
    </Grid>
    <Grid size={12}>
    <Typography variant="h2" gutterBottom>
        Proficiencies
      </Typography>
    </Grid>
  </Grid>;
};
