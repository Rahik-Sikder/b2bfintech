import { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Stack,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  IconButton,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

import PageContainer from "../components/PageContainer";
import Popup from "../components/Popup";
import { getDeliveryData } from "../api/get-data";

const Delivery = () => {
  const [numRows, setNumRows] = useState(20);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [deliveryData, setDeliveryData] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [popupInfo, setPopupInfo] = useState({});

  useEffect(() => {
    async function fetchData() {
      getDeliveryData(setDeliveryData);
    }
    fetchData();
  }, []);

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      const newSelecteds = deliveryData.map((n, i) => i);
      setSelectedRows(newSelecteds);
    } else {
      setSelectedRows([]);
    }
    setSelectAll(event.target.checked);
  };

  const handleSelectRow = (event, rowNumber) => {
    const selectedIndex = selectedRows.indexOf(rowNumber);
    let newSelected = selectedRows.slice();
    if (selectedIndex === -1) {
      newSelected.push(rowNumber);
    } else {
      newSelected.splice(selectedIndex, 1);
    }
    setSelectedRows(newSelected);
  };

  const handleClosePopup = () => {
    setShowPopUp(false);
  };

  const isSelected = (rowNumber) => selectedRows.includes(rowNumber);

  const generateRows = () => {
    return deliveryData.map((order, i) => (
      <TableRow key={i} selected={isSelected(i)} onClick={(event) => handleSelectRow(event, i)}>
        <TableCell padding="checkbox">
          <Checkbox
            checked={isSelected(i)}
            onClick={(event) => event.stopPropagation()}
            onChange={(event) => handleSelectRow(event, i)}
          />
        </TableCell>
        <TableCell>Order #{order.id}</TableCell>
        <TableCell>{order.item_name}</TableCell>

        <TableCell align="right"> {order.return_req_date}</TableCell>
        <TableCell align="right">{order.refund_amount}</TableCell>
        <TableCell align="right">
          <IconButton
            onClick={() => {
              setPopupInfo(order);
              setShowPopUp(true);
            }}
          >
            <InfoIcon color="primary" />
          </IconButton>
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <PageContainer>
      <Box
        sx={{
          marginTop: 5,
          paddingX: 4,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          color="primary.dark"
          sx={{ marginRight: "auto" }}
        >
          Requested Returns
        </Typography>
        {/* Approve Selected Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{ backgroundColor: "#320083", marginLeft: "auto" }}
        >
          Approve Selected
        </Button>
      </Box>
      <Stack spacing={2} marginTop={2} position="relative">
        {/* Select All Checkbox */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "24px",
          }}
        ></Box>

        {/* Row Selector */}
        <Stack
          spacing={2}
          direction="row"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ marginRight: "10px" }}
            >
              Rows:{" "}
            </Typography>
            <Select value={numRows} onChange={(event) => setNumRows(event.target.value)}>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingRight: 2,
            }}
          >
            <Checkbox checked={selectAll} onChange={handleSelectAll} />
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ fontSize: 20, fontFamily: "Rubik", marginLeft: 1 }}
            >
              Select All
            </Typography>
          </Box>
        </Stack>
        <Box bgcolor="white" borderRadius="4px" overflow="hidden">
          {" "}
          {/* Set background color to white */}
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  {/* Placeholder for checkbox */}
                </TableCell>
                <TableCell>
                  <Typography variant="body1" color="text.primary">
                    Order #
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" color="text.primary">
                    Item Name
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body1" color="text.primary">
                    Date of Return
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body1" color="text.primary">
                    Refund Amount
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body1" color="text.primary"></Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{generateRows()}</TableBody>
          </Table>
        </Box>
        {showPopUp && (
          <Popup order={popupInfo} onClose={handleClosePopup} />
        )}
      </Stack>
    </PageContainer>
  );
};

export default Delivery;
