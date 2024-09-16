import {
  Grid2 as Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";

import { Form, Field } from "react-final-form";

export const Contact = () => {
  return (
    <Form
      onSubmit={(values, form) => {
        console.log(values);
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
            sx={{ paddingTop: "50px", paddingBottom:'150px' }}
          >
            <Grid size={{ md: 8, sm: 6 }}>
              <Paper sx={{ paddingTop: "50px", paddingBottom: "50px" }}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid size={12}>
                    <Typography variant="h5" style={{ textAlign: "center" }}>
                      Let's Connect
                    </Typography>
                  </Grid>
                  {/*Render Field Combined with Final Form Here Make sure it's the one with Material UI */}
                  <Grid size={8}>
                    <Typography>Name:</Typography>
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
                    <Typography>Email:</Typography>
                    <Field
                      name="emailInput"
                      render={({ input }) => {
                        return (
                          <TextField
                            {...input}
                            variant="outlined"
                            label="john@mail.com"
                            placedholder="email"
                            fullWidth
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid size={8}>
                    <Typography>Message:</Typography>
                    <Field
                      name="messageInput"
                      render={({ input }) => {
                        return (
                          <TextField
                            {...input}
                            variant="outlined"
                            label="Message"
                            placedholder="Write your message"
                            fullWidth
                            sx={{
                                "& .MuiInputBase-root": {
                                  height: 200, // Adjust the overall height of the TextField
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
                        Add Todo
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
