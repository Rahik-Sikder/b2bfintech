import React from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const StyledTable = ({ numRows, numColumns }) => {
  const rowsArray = Array.from({ length: numRows }, (_, index) => index + 1);
  const columnsArray = Array.from({ length: numColumns }, (_, index) => index + 1);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead style={{ backgroundColor: "#C8FFEB", borderBottom: "1px solid #C8FFEB" }}>
          <TableRow>
            {columnsArray.map((columnNumber) => (
              <TableCell key={columnNumber} style={{ borderBottom: "1px solid #00B981", borderLeft: "1px solid #00B981", borderRight: "1px solid #00B981" }}>Column {columnNumber}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody style={{ borderTop: "none" }}>
          {rowsArray.map((rowNumber) => (
            <TableRow key={rowNumber}>
              {columnsArray.map((columnNumber) => (
                <TableCell key={columnNumber} style={{ borderBottom: "1px solid #00B981", borderRight: "1px solid #00B981" }}></TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StyledTable;
