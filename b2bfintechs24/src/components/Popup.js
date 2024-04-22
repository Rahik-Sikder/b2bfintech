import React from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SimplePaper from "./SimplePaper";

const Popup = ({ width, height, order, onClose }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "20%", // Adjust as needed
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        width: "80%",
        // height: height,
        borderRadius: 4,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 5,
      }}
    >
      {/* Close button */}
      <Box
        sx={{
          position: "absolute",
          top: "5px",
          right: "5px",
        }}
      >
        <IconButton aria-label="delete" size="large" onClick={onClose}>
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </Box>
      {/* Title */}
      <Typography
        variant="h2"
        color="text.primary"
        sx={{ fontFamily: "Rubik", fontSize: 48 }}
      >
        Order #{order.id}
      </Typography>
      {/* Additional content can be added here */}
      <Box
        sx={{
          borderRadius: 4,
          border: 1,
          borderColor: "#DFCBFF",
          marginTop: 5,
          maxWidth: "100%",

          width: width - 50,
          padding: 4,
        }}
      >
        <Box >
          <Typography variant="h5" color="text.primary" >
            <Box component="span" fontWeight="fontWeightMedium">
              Item Name:{" "}
            </Box>
            {order.item_name}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" color="text.primary" sx={{ marginTop: 1 }}>
            <Box component="span" fontWeight="fontWeightMedium">
              Date Ordered:{" "}
            </Box>{" "}
            {order.date_ordered}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" color="text.primary" sx={{ marginTop: 1 }}>
            <Box component="span" fontWeight="fontWeightMedium">
              Return Requested:{" "}
            </Box>{" "}
            {order.return_req_date}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" color="text.primary" sx={{ marginTop: 1 }}>
            <Box component="span" fontWeight="fontWeightMedium">
              Refund Amount:{" "}
            </Box>{" "}
            {order.refund_amount}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" color="text.primary" sx={{ marginTop: 1 }}>
            <Box component="span" fontWeight="fontWeightMedium">
              Item Description:{" "}
            </Box>{" "}
            {order.item_description}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" color="text.primary" sx={{ marginTop: 1 }}>
            <Box component="span" fontWeight="fontWeightMedium">
              Reason for return:{" "}
            </Box>{" "}
            {order.return_reasoning}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Popup;
