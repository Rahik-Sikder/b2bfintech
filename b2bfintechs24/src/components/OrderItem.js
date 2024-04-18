import React from "react";

import { Paper } from "@mui/material";
import { Container, Stack, IconButton, Grid, Typography } from "@mui/material";

import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DeleteIcon from "@mui/icons-material/Delete";

const SimplePaper = ({ orderNumber, onConfirm, onReject, backgroundColor="white" }) => {
  return (
    <Paper
      sx={{
        maxWidth: "100%",
        backgroundColor: backgroundColor,
        // justifyContent: "center",
        alignItems: "center",
        paddingY: 1,
        paddingRight: 5,

      }}
    >
      <Grid container>
        <Grid item xs={10}>
          <Container>
            <Typography variant="h6" color="primary.dark">
              Order #{orderNumber}
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={2}>
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
