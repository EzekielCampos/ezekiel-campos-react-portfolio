import {
  Grid2 as Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language"; // For deployed page icon
import PropTypes from "prop-types";

export const ProjectCard = ({ data }) => {
  // Maps through the data props and displays cards of the different projects i
  return data.map((data) => {
    return (
      <Grid className="card" size={{ xs: 12, md: 6, s: 4 }} key={data.id}>
        <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <CardMedia sx={{ height: 400 }}>
            {/* The card will either display a photo or a video which is why there
            is a ternary operator */}
            {data.video ? (
              <iframe
                src={data.video}
                width="100%"
                height="100%"
                allow="autoplay"
              ></iframe>
            ) : (
              // Displays image if there is no video
              <img
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src={data.pic}
                alt={data.name}
              />
            )}
          </CardMedia>

          {/* Card Content */}
          <CardContent>
            <Grid container justifyContent={"center"}>
              <Typography gutterBottom variant="h5" component="div">
                {/* Displays the name of the project */}
                {data.name}
              </Typography>
            </Grid>
            <Grid container justifyContent={"center"}>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {/* Displays a description of the project */}
                {data.description}
              </Typography>
            </Grid>
          </CardContent>

          {/* Card Actions will display two icons that will redirect
          user to the github repo and the deployed page*/}
          <CardActions sx={{ justifyContent: "center", marginTop: "auto" }}>
            {/* GitHub Icon */}
            {/* When clicked on redirects to github repo */}
            <IconButton
              sx={{ color: "skyBlue" }}
              onClick={() => window.open(data.github)}
            >
              <GitHubIcon style={{ width: 35, height: 35 }} />
            </IconButton>

            {/* Deployed Page Icon */}
            <IconButton
              sx={{ color: "#000" }}
              onClick={() => window.open(data.deployed)}
            >
              <LanguageIcon style={{ width: 35, height: 35 }} />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    );
  });
};

// This is the props validators which verify that each item that comes in
// is the correct data type
ProjectCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string, // `title` should be a string
      description: PropTypes.string, // `description` should be a string
      github: PropTypes.string,
      pic: PropTypes.string,
    })
  ).isRequired,
};
