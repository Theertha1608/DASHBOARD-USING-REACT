import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Card } from "@mui/material";

const PieChart = () => {
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/pie-chart")
      .then((response) => setPieChartData(response.data))
      .catch((error) => console.error("Error fetching pie chart data:", error));
  }, []);

  const data = {
    labels: pieChartData.map((item) => item.label),
    datasets: [
      {
        data: pieChartData.map((item) => item.value),
        backgroundColor: [
          "rgba(136, 194, 140)",
          "rgba(216, 240, 217)",
          "rgba(193, 227, 194)",
          "rgba(184, 245, 185)",
          "rgba(160, 250, 161)",
        ],
        radius: "70%", // Set the radius to control the size of circles
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom", // or "top", "left", "right" for other positions
        align: "start", // or "start", "end" for alignment within the position

        labels: {
          usePointStyle: true,
          boxWidth: 12,
          font: {
            size: 14, // set the font size for legend labels
            weight: "bold",
          },
          padding: 6, // set the padding for legend labels
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Set to false to allow chart resizing
  };

  return (
    <>
      <Card
        sx={{
          marginLeft: 44,
          height: 290,
          width: 350,
          mt: 6,
          boxShadow: 6,
          borderRadius: 3,
        }}
      >
        {" "}
        <Pie data={data} options={options} />
      </Card>
    </>
  );
};

export default PieChart;
