import React from "react";

import { Paper } from "@mui/material";
import { Container, Stack, IconButton, Grid, Typography } from "@mui/material";

import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DeleteIcon from "@mui/icons-material/Delete";

const SimplePaper = ({ orderNumber, onConfirm, onReject }) => {
  return (
    <Paper
      sx={{
        maxWidth: "100%",
        backgroundColor: "white",
        // justifyContent: "center",
        alignItems: "center",
        padding: 1,
      }}
    >
      <Grid container>
        <Grid item xs={9}>
          <Container>
            <Typography variant="h6" color="primary.dark">
              Order #{orderNumber}
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={1}>
          <Stack direction="row">
            <IconButton aria-label="Confirm" onClick={onConfirm}>
              <TaskAltIcon color="success" />
            </IconButton>
            <IconButton aria-label="Enter" onClick={onReject}>
              <DeleteIcon color="error" />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SimplePaper;
