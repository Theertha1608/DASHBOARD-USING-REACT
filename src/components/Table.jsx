// src/components/DataVisualization.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataVisualization = () => {
  const [tableData, setTableData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    // Fetch data for the table
    axios.get('http://localhost:3001/api/table')
      .then(response => setTableData(response.data))
      .catch(error => console.error('Error fetching table data:', error));

    // Fetch data for the pie chart
    axios.get('http://localhost:3001/api/pie-chart')
      .then(response => setPieChartData(response.data))
      .catch(error => console.error('Error fetching pie chart data:', error));

    // Fetch data for the graph
    axios.get('http://localhost:3001/api/graph')
      .then(response => setGraphData(response.data))
      .catch(error => console.error('Error fetching graph data:', error));
  }, []);

  return (
    <div>
      <h2>Table Data</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Implement components for pie chart and graph using the corresponding libraries (e.g., react-chartjs-2, recharts) */}
    </div>
  );
};

export default DataVisualization;
