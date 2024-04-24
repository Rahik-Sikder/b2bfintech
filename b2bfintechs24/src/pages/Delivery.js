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
  IconButton
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

import PageContainer from "../components/PageContainer";
import Popup from "../components/Popup"; 
import { getDeliveryData } from "../api/get-data";

const Delivery = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
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
      setSelectAll(true);
    } else {
      setSelectedRows([]);
      setSelectAll(false);
    }
  };

  const handleSelectRow = (event, rowNumber) => {
    event.stopPropagation(); 
    const selectedIndex = selectedRows.indexOf(rowNumber);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedRows, rowNumber);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelected = newSelected.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
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
            onClick={(event) => event.stopPropagation()}  // Stop propagation to avoid row selection
            onChange={(event) => handleSelectRow(event, i)}
          />
        </TableCell>
        <TableCell>Order #{order.id}</TableCell>
        <TableCell>{order.item_name}</TableCell>
        <TableCell>{order.return_req_date}</TableCell>
        <TableCell>{order.refund_amount}</TableCell>
        
        <TableCell>
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
      <Box sx={{ marginTop: 5, paddingX: 4 }}>
        <Typography variant="h1" color="primary.dark">
          Out for Delivery
        </Typography>
      </Box>
      <Stack spacing={4} marginTop={5} position="relative">
        <Box bgcolor="white" borderRadius="4px" overflow="hidden">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={selectedRows.length > 0 && selectedRows.length < deliveryData.length}
                    checked={deliveryData.length > 0 && selectedRows.length === deliveryData.length}
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Order #</TableCell>
                <TableCell>Item Name</TableCell>
                <TableCell>Date of Return</TableCell>
                <TableCell>Refund Amount</TableCell>
                <TableCell>Info</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{generateRows()}</TableBody>
          </Table>
        </Box>
        {showPopUp && (
          <OrderInfoPopup
            order={popupInfo}
            handleClosePopup={handleClosePopup}
          />
        )}
      </Stack>
    </PageContainer>
  );
};

const OrderInfoPopup = ({ order, handleClosePopup }) => {
  console.log(order);
  return (
    <Popup width={1045} height={753} order={order} onClose={handleClosePopup} />
  );
};

export default Delivery;
