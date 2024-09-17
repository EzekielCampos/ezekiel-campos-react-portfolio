import { useState } from "react";

import {
  Grid2 as Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Backdrop,
} from "@mui/material";

import RiseLoader from "react-spinners/RiseLoader";

import { Form, Field } from "react-final-form";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Form
      onSubmit={(values, form) => {
        setLoading(true);

        setTimeout(() => {
          console.log(values);
          setLoading(false);
        }, 2000);

        // setLoading(false);
        form.reset();
      }}
      initialValues={{
        nameInput: "",
        emailInput: "",
        messageInput: "",
      }}
      render={({ handleSubmit }) => {
        return (
          <Grid
            container
            justifyContent="center"
            sx={{
              paddingTop: "50px",
              paddingBottom: "100px",
            }}
          >
            <Backdrop open={loading}>
              <RiseLoader color="lightGrey" speed={2} />
            </Backdrop>

            <Grid size={{ md: 10, sm: 8 }}>
              <Paper
              elevation={3} 
                sx={{
                  paddingTop: "50px",
                  paddingBottom: "50px",
                }}
              >
                <Grid container spacing={2} justifyContent="center">
                  <Grid size={12}>
                    <Typography variant="h5" style={{ textAlign: "center" }}>
                      Connect With Me
                    </Typography>
                  </Grid>
                  {/*Render Field Combined with Final Form Here Make sure it's the one with Material UI */}
                  <Grid size={8}>
                    <Typography sx={{ marginBottom: "20px" }}>Name:</Typography>
                    <Field
                      name="nameInput"
                      render={({ input }) => {
                        return (
                          <TextField
                            {...input}
                            variant="outlined"
                            label="John"
                            placedholder="Name"
                            fullWidth
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid size={8}>
                    <Typography sx={{ marginBottom: "20px" }}>
                      Email:
                    </Typography>
                    <Field
                      name="emailInput"
                      render={({ input }) => {
                        return (
                          <TextField
                            {...input}
                            variant="outlined"
                            label="john@mail.com"
                            placedholder="Email"
                            fullWidth
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid size={8}>
                    <Typography sx={{ marginBottom: "20px" }}>
                      Message:
                    </Typography>
                    <Field
                      name="messageInput"
                      render={({ input }) => {
                        return (
                          <TextField
                            {...input}
                            variant="outlined"
                            label="Write your message"
                            placedholder="Message"
                            fullWidth
                            multiline
                            sx={{
                              "& .MuiInputBase-root": {
                                height: 200, // Adjust the overall height of the TextField
                                display: "flex",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              },
                              "& .MuiInputBase-input": {
                                padding: "10px", // Adjust the padding to your needs
                                textAlign: "left", // Aligns the text to the left
                              },
                            }}
                          />
                        );
                      }}
                    />
                  </Grid>

                  <Grid container justifyContent="center" size={8}>
                    <Grid>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                      >
                        Submit
                      </Button>
                    </Grid>
                    {/*Finish the on click of this button */}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        );
      }}
    />
  );
};
