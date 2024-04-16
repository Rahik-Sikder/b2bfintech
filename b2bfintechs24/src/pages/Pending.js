import React, { useState } from "react";
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

const Pending = () => {
  const [numRows, setNumRows] = useState(20);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleChangeRows = (event) => {
    setNumRows(event.target.value);
  };

  const handleSelectAll = (event) => {
    setSelectAll(event.target.checked);
    if (event.target.checked) {
      const allRows = [];
      for (let i = 1; i <= numRows; i++) {
        allRows.push(i);
      }
      setSelectedRows(allRows);
    } else {
      setSelectedRows([]);
    }
  };

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
  };

  const isSelected = (rowNumber) => selectedRows.indexOf(rowNumber) !== -1;

  const generateRows = () => {
    // Generate rows based on the number of rows selected
    const rows = [];
    for (let i = numRows; i >= 1; i--) {
      rows.push(
        <TableRow key={i} selected={isSelected(i)}>
          <TableCell padding="checkbox">
            <Checkbox
              checked={isSelected(i)}
              onChange={(event) => handleSelectRow(event, i)}
            />
          </TableCell>
          <TableCell>Order {i}</TableCell>
          <TableCell>Item {i}</TableCell>
          <TableCell>Date {i}</TableCell>
          <TableCell>Amount {i}</TableCell>
        </TableRow>
      );
    }
    return rows;
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
        <Stack spacing={2} direction="row" sx={{ display: "flex", alignItems: "center" }}>
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
            <Select value={numRows} onChange={handleChangeRows}>
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
            <Checkbox
              checked={selectAll}
              onChange={handleSelectAll}
            />
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ fontSize: 20, fontFamily: "Rubik", marginLeft: 1 }}
            >
              Select All
            </Typography>
          </Box>
        </Stack>
        {/* Table */}
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
        {/* Other components */}
        <SimplePaper height={200} />
      </Stack>
    </PageContainer>
  );
};

export default Pending;
