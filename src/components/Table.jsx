import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card } from "@mui/material";
import Pagination from "./Pagination";

const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/table")
      .then((response) => {
        console.log("response", response);
        setTableData(response.data);
      })
      .catch((error) => console.error("Error fetching table data:", error));
  }, []);
  const handlePageChange = (newPage) => {
    
    console.log(`Page changed to ${newPage}`);
    setCurrentPage(newPage);
  };
  return (
    <Box sx={{ marginLeft: "62px", width: "700px" }}>
      <Card sx={{ borderRadius: 3, boxShadow: 6 }}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid #dddddd",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                ID
              </th>
              <th
                style={{
                  border: "1px solid #dddddd",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                Name
              </th>
              <th
                style={{
                  border: "1px solid #dddddd",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                Quantity
              </th>
              <th
                style={{
                  border: "1px solid #dddddd",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td
                  style={{
                    border: "1px solid #dddddd",
                    textAlign: "left",
                    padding: "8px",
                  }}
                >
                  {item.id}
                </td>
                <td
                  style={{
                    border: "1px solid #dddddd",
                    textAlign: "left",
                    padding: "8px",
                  }}
                >
                  {item.name}
                </td>
                <td
                  style={{
                    border: "1px solid #dddddd",
                    textAlign: "left",
                    padding: "8px",
                  }}
                >
                  {item.quantity}
                </td>
                <td
                  style={{
                    border: "1px solid #dddddd",
                    textAlign: "left",
                    padding: "8px",
                  }}
                >
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <Pagination
        totalPages={10}
        currentPage={1}
        onPageChange={handlePageChange}
      />
    </Box>
  );
};

export default Table;