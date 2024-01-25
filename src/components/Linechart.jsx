// src/components/LineChart.jsx
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const LineChart = () => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    // Fetch data for the graph
    axios.get('http://localhost:3001/api/graph')
      .then(response => setGraphData(response.data))
      .catch(error => console.error('Error fetching graph data:', error));
  }, []);

  const chartData = {
    labels: graphData.map(item => item.x),
    datasets: [
      {
        label: 'Graph Data',
        data: graphData.map(item => item.y),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 0.6)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
    },
  };

  return //(
    // <div>
    //   <h2>Line Chart</h2>
    //   <Line data={chartData} options={chartOptions} />
    // </div>
 // );
};

export default LineChart;
