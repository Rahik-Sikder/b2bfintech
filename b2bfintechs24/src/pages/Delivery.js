import { React, useState, useEffect } from "react";

import {
  Typography,
  Box,
  Stack,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Select,
  MenuItem,
  Checkbox,
} from "@mui/material";

import PageContainer from "../components/PageContainer";
import SimplePaper from "../components/SimplePaper";
import StyledTable from "../components/StyledTable";
import { getDeliveryData } from "../api/get-data";

const Delivery = () => {
  const [numRows, setNumRows] = useState(20);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [deliveryData, setDeliveryData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      getDeliveryData(setDeliveryData);
    }
    fetchData();

    return () => {
      // Perform any clean-up here if necessary
    };
  }, []);

  const handleSelectRow = (event, rowNumber) => {
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
    // Show popup with order number
  };

  const isSelected = (rowNumber) => selectedRows.indexOf(rowNumber) !== -1;

  const generateRows = () => {
    // Generate rows based on the number of rows selected
    const rows = [];

    deliveryData.map((order, i) => {
      rows.push(
        <TableRow key={i} selected={isSelected(i)} onClick={(event) => handleSelectRow(event, i)}>
          <TableCell padding="checkbox">
            <Checkbox
              checked={isSelected(i)}
              onChange={(event) => handleSelectRow(event, i)}
            />
          </TableCell>
          <TableCell>Order #{order.id}</TableCell>
          <TableCell>{order.item_name}</TableCell>
          <TableCell>Date {order.return_req_date}</TableCell>
          <TableCell>{order.refund_amount}</TableCell>
        </TableRow>
      );
    })
    return rows;
  };

  return (
    <PageContainer>
      <Box sx={{ marginTop: 5, paddingX: 4 }}>
        <Typography variant="h1" color="primary.dark">
          Visualization and Trends
        </Typography>
      </Box>
      <Stack spacing={4} marginTop={5} position="relative">
        {/* Spacer */}
        <Box height="40px" /> {/* Adjust height as needed */}
        {/* Table */}
        <Box border="1px solid #00B981" borderRadius="4px" overflow="hidden">
          {" "}
          {/* Added overflow:hidden to prevent double border */}
          <StyledTable numRows={7} numColumns={5} />
        </Box>
        {/* Other components */}
        <Box bgcolor="white" borderRadius="4px" overflow="hidden">
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
                <TableCell>
                  <Typography variant="body1" color="text.primary">
                    Date of Return
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" color="text.primary">
                    Refund Amount
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{generateRows()}</TableBody>
          </Table>
        </Box>
      </Stack>
    </PageContainer>
  );
};

export default Delivery;
