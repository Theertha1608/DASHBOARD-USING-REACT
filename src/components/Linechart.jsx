import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  // Dummy data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sample Data',
        data: [12, 19, 3, 5, 2],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      y: {
        type: 'linear', // Use 'linear' for a linear scale on the y-axis
        title: {
          display: true,
          text: 'Y-Axis Title',
        },
      },
    },
  };

  return 
    //<div>
    //  <Line data={data} options={options} />
    //</div>
  //);
};

export default LineChart;

