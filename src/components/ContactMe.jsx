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
            sx={{
              border: "1px solid purple",
            }}
          >
            <Grid size={12}>
              <Paper>
                <Grid container spacing={2} justifyContent="center">
                  <Grid size={12}>
                    <Typography variant="h4" style={{ textAlign: "center" }}>
                      Todo App
                    </Typography>
                  </Grid>

                  {/*Render Field Combined with Final Form Here Make sure it's the one with Material UI */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography>Ezekiel</Typography>
                    <Field
                      name="todoInput"
                      render={({ input }) => {
                        return (
                          <TextField
                            {...input}
                            variant="outlined"
                            label="Todos weeee"
                            placedholder="This is hard"
                            fullWidth
                          />
                        );
                      }}
                    />
                    <Typography>Ezekiel</Typography>
                    <Field
                      name="todoInput"
                      render={({ input }) => {
                        return (
                          <TextField
                            {...input}
                            variant="outlined"
                            label="Todos weeee"
                            placedholder="This is hard"
                            fullWidth
                          />
                        );
                      }}
                    />
                    <Typography>Ezekiel</Typography>
                    <Field
                      name="todoInput"
                      render={({ input }) => {
                        return (
                          <TextField
                            {...input}
                            variant="outlined"
                            label="Todos weeee"
                            placedholder="This is hard"
                            fullWidth
                          />
                        );
                      }}
                    />
                  </Grid>

                  <Grid size={12}>
                    <Box display="flex" justifyContent="center">
                      {/*Finish the on click of this button */}
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleSubmit}
                      >
                        Add Todo
                      </Button>
                    </Box>
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
