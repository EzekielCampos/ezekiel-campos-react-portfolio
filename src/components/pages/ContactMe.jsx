import { useState } from "react";

import {
  Grid2 as Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Backdrop,
  Snackbar,
} from "@mui/material";
// This is a loader that will be used during the submittal of the form
import RiseLoader from "react-spinners/RiseLoader";

// React FInal Form will handle the state changes and has intuitve form submittal usage
import { Form, Field } from "react-final-form";

// This function verifies if the input is an email
import { verifyEmail } from "../helpers";

export const Contact = () => {
  // These are the different options for the email input field if
  // user does not enter in the correct information
  const requiredMail = (value) => {
    // Checks if it empty
    if (!value) {
      return "This field is required"; // Check if the field is empty
    }
    // verifies that it's an email
    if (!verifyEmail(value)) {
      return "Invalid Email"; // Check if the value is a valid email
    }
    return undefined; // No error
  };

  // This is for the message box to ensure that it is not empty
  const required = (value) => (value ? undefined : "This field is required");

  // The loading state will be used to run the loader
  const [loading, setLoading] = useState(false);
  // These two states will be so that the snackbar opens and closes and the message it wants to display
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("Message was sent!");

  return (
    <Form
      onSubmit={(values, form) => {
        // When the form is submitted this state will turn on the loader
        setLoading(true);

        // Callback functio will allow the loader to run for a couple seconds
        setTimeout(() => {
          // Opens the snackbar
          setIsSnackbarOpen(true);
          // Sets the message on the snackbar
          setSnackbarMessage("Message was sent !");
          // turns the loader off
          setLoading(false);
        }, 2000);
        // Clears the entire form
        form.restart();
      }}
      // Statrting values are empty input areas
      initialValues={{
        nameInput: "",
        emailInput: "",
        messageInput: "",
      }}
      // This will render the form to the page
      render={({ handleSubmit }) => {
        return (
          <Grid
            container
            justifyContent="center"
            sx={{
              paddingTop: "50px",
              paddingBottom: "100px",
              background: "#CED3DC",
            }}
          >
            {/* When the loading state is true then a backdroup pops up and 
            the loader is initialized */}
            <Backdrop open={loading}>
              <RiseLoader color="lightGrey" speed={2} />
            </Backdrop>
            {/* This deals with opening positioning and duration 
            of the snackbar once the message is sent */}
            <Snackbar
              open={isSnackbarOpen}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              autoHideDuration={3000}
              onClose={() => setIsSnackbarOpen(false)}
              message={snackbarMessage}
            />

            <Grid size={{ md: 10, sm: 8 }}>
              <Paper
                elevation={3}
                sx={{
                  paddingTop: "50px",
                  paddingBottom: "50px",
                }}
              >
                {/* The form starts here */}
                <Grid container spacing={2} justifyContent="center">
                  <Grid size={12}>
                    {/* Title of the form */}
                    <Typography variant="h5" style={{ textAlign: "center" }}>
                      Connect With Me
                    </Typography>
                  </Grid>
                  {/* The name input field */}
                  <Grid size={8}>
                    <Typography sx={{ marginBottom: "20px" }}>Name:</Typography>
                    <Field
                      // This name will hold the value of the input
                      name="nameInput"
                      // Final Form handles the state change of the input field
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
                  {/* This is the email field */}
                  <Grid size={8}>
                    <Typography sx={{ marginBottom: "20px" }}>
                      Email:
                    </Typography>
                    <Field
                      name="emailInput"
                      // This validate is a set of rules for the input field
                      // that user must follow.
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
                    {/* This is the message input box */}
                    <Typography sx={{ marginBottom: "20px" }}>
                      Message:
                    </Typography>
                    <Field
                      // Final form deals with state changes
                      name="messageInput"
                      // This is the set of rules that user must follow for the message box
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
                      {/* When clicked it will call the handleSubmit function and
                      perform all the dictated actions */}
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
