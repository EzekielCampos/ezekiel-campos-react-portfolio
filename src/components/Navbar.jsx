import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Grid2 as Grid } from "@mui/material";

export const Nav = () => {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            }} // No indicator for "Resume"
          >
            <Tab
              value="one"
              label="About Me"
              onClick={() => console.log("test")}
              sx={{ minWidth: 80, padding: "6px 12px", fontSize: ".850rem" }} // Adjust the size
            />
            <Tab
              value="two"
              label="My Projects"
              onClick={() => console.log("test 2")}
              sx={{ minWidth: 80, padding: "6px 12px", fontSize: ".850rem" }} // Adjust the size
            />
            <Tab
              value="three"
              label="Contact Me"
              onClick={() => console.log("test 3")}
              sx={{ minWidth: 80, padding: "6px 12px", fontSize: ".850rem" }} // Adjust the size
            />
            <Tab
              value="resume"
              label="Resume"
              onClick={() => console.log("test 4")}
              sx={{ minWidth: 80, padding: "6px 12px", fontSize: ".850rem" }} // Adjust the size
            />
          </Tabs>
        </Grid>
      </Grid>
    </Grid>
  );
};
