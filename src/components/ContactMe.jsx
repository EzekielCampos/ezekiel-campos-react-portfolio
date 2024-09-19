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

import { verifyEmail } from "./verification";

export const Contact = () => {
  const requiredMail = (value) => {
    if (!value) {
      return "This field is required"; // Check if the field is empty
    }
    if (!verifyEmail(value)) {
      return "Invalid Email"; // Check if the value is a valid email
    }
    return undefined; // No error
  };

  const required = (value) => (value ? undefined : "This field is required");

  const [loading, setLoading] = useState(false);


  return (
    <Form
      onSubmit={(values, form) => {
        setLoading(true);

        setTimeout(() => {
          setLoading(false);
        }, 2000);
        // form.reset();
        form.restart();
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
              background:"#B7B7B7"
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
                      validate={requiredMail}
                      render={({ input, meta }) => {
                        return (
                          <TextField
                            {...input}
                            variant="outlined"
                            label="john@mail.com"
                            placedholder="Email"
                            fullWidth
                            error={meta.touched && meta.error ? true : false} // Handle TextField error state
                            helperText={
                              meta.touched && !input.error ? meta.error : null
                            } // Display error message
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
                      validate={required}
                      render={({ input, meta }) => {
                        return (
                          <TextField
                            {...input}
                            variant="outlined"
                            label="Write your message"
                            placedholder="Message"
                            fullWidth
                            multiline
                            error={meta.touched && !input.value ? true : false} // Handle TextField error state
                            helperText={
                              meta.touched && !input.value ? meta.error : null
                            } // Display error message
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
