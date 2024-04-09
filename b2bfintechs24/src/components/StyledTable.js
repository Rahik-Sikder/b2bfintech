import React from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const StyledTable = ({ numRows, numColumns }) => {
  // Generate an array with numbers from 1 to numRows for creating empty rows
  const rowsArray = Array.from({ length: numRows }, (_, index) => index + 1);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {/* Generate table header cells based on the number of columns */}
            {Array.from({ length: numColumns }, (_, index) => (
              <TableCell key={index}></TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsArray.map((rowNumber) => (
            <TableRow key={rowNumber} style={{ backgroundColor: rowNumber === 1 ? "#C8FFEB" : "inherit" }}>
              {/* Generate empty cells based on the number of columns */}
              {Array.from({ length: numColumns }, (_, index) => (
                <TableCell key={index}></TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StyledTable;
