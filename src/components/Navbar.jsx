// import { useState } from "react";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Grid2 as Grid } from "@mui/material";

export const Nav = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid>
      <Box
        sx={{ width: "100%", bgcolor: "background.paper" }}
        display="flex"
        justifyContent="space-between"
      >
        <h2>Ezekiel Campos</h2>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab
            value="one"
            label="Item One"
            onClick={() => console.log("test")}
          />
          <Tab
            value="two"
            label="Item Two"
            onClick={() => console.log("test 2")}
          />
          <Tab value="three" label="Item Three" />
        </Tabs>
      </Box>
    </Grid>
  );
};
