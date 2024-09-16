import {
  Grid2 as Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
// import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language"; // For deployed page icon
import PropTypes from 'prop-types';

// import image from "../../assets/img/profile.jpg";

export const ProjectCard = ({ data }) => {
  console.log(data);
  return (
    <Grid size={{ xs: 12, md: 6, s: 4 }}>
      <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <CardMedia
          sx={{ height: 600, objectFit: "cover" }}
          image={data.pic}
          title="green iguana"
        />

        {/* Card Content */}
        <CardContent>
          <Grid container justifyContent={"center"}>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
          </Grid>
          <Grid container justifyContent={"center"}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {data.description}
            </Typography>
          </Grid>
        </CardContent>

        {/* Card Actions */}
        <CardActions sx={{ justifyContent: "center", marginTop: "auto" }}>
          {/* GitHub Icon */}
          <IconButton
            sx={{ color: "skyBlue" }}
              onClick={() => window.open(data.github)}
          >
            <GitHubIcon style={{ width: 35, height: 35 }} />
          </IconButton>

          {/* Deployed Page Icon */}
          <IconButton
            sx={{ color: "#000" }}
            //   onClick={() => window.open(deployedUrl, "_blank")}
          >
            <LanguageIcon style={{ width: 35, height: 35 }} />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

ProjectCard.propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string,      // `title` should be a string
      description: PropTypes.string, // `description` should be a string
      github:PropTypes.string,
      pic:PropTypes.string,
    }).isRequired,
  };