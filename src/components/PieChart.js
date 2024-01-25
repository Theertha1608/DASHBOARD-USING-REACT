// src/components/PieChart.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    // Fetch data for the pie chart
    axios.get('http://localhost:3001/api/pie-chart')
      .then(response => setPieChartData(response.data))
      .catch(error => console.error('Error fetching pie chart data:', error));
  }, []);

  const data = {
    labels: pieChartData.map(item => item.label),
    datasets: [
      {
        data: pieChartData.map(item => item.value),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  return //(
    // <div>
    //   <h2>Pie Chart</h2>
    //   {/* <Pie data={data} /> */}
    // </div>
  //);
};

export default PieChart;

