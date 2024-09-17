import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Grid2 as Grid } from "@mui/material";
import { useNavigate,useLocation } from "react-router-dom";

export const Nav = () => {
  const [value, setValue] = useState("one");
  const navigate = useNavigate();
  const routes = {
    one: "/",
    two: "/projects",
    three: "/contact-info",
    resume: useLocation()
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(routes[newValue]);
  };

  return (
    <Grid
      container
      style={{
        width: "100%",
        padding: "20px",
        background: "linear-gradient(90deg, #f5f7fa, #c3cfe2)",
        color: "#333",
      }}
    >
      <Grid container size={12} alignItems={"center"} marginRight={"15px"}>
        <Grid size={{ xs: 6, md: 8, sm: 7 }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', sans-serif",
              fontWeight: 400,
            }}
          >
            Ezekiel Campos
          </h2>
        </Grid>
        <Grid size={{ md: 4, xs: 6, sm: 5 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            TabIndicatorProps={{
              style: { display: value === "resume" ? "none" : "block" },
            }}
          >
            <Tab
              value="one"
              label="About Me"
              sx={{ minWidth: 80, padding: "6px 12px", fontSize: ".850rem" }} // Adjust the size
            />
            <Tab
              value="two"
              label="My Projects"
              sx={{ minWidth: 80, padding: "6px 12px", fontSize: ".850rem" }} // Adjust the size
            />
            <Tab
              value="three"
              label="Contact Me"
              sx={{ minWidth: 80, padding: "6px 12px", fontSize: ".850rem" }} // Adjust the size
            />

            <Tab
              value="resume"
              label="Resume"
              sx={{ minWidth: 80, padding: "6px 12px", fontSize: ".850rem" }} // Adjust the size
              // onClick={()=>{console.log("Resume")}}
            />
          </Tabs>
        </Grid>
      </Grid>
    </Grid>
  );
};
