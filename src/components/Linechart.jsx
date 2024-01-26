import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { Card } from "@mui/material";

const LineChart = () => {
  const [graphData, setGraphData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    
    axios
      .get("http://localhost:3001/api/graph")
      .then((response) => setGraphData(response.data))
      .catch((error) => console.error("Error fetching graph data:", error));
  }, []);

  useEffect(() => {
    
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById("lineChart").getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: graphData.map((item) => item.x),
        datasets: [
          {
            label: "Graph Data",
            data: graphData.map((item) => item.y),
            fill: false,
            borderColor: "rgba(75, 192, 192, 0.6)",
            tension: 0.4,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "category",
            labels: graphData.map((item) => item.x),
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [graphData]);

  return (
    <div>
      <Card
        sx={{
          width: "610px",
          height: "290px",
          mt: 6,
          marginLeft: 10,
          boxShadow: 6,
          borderRadius: 3,
        }}
      >
        <canvas id="lineChart"></canvas>
      </Card>
    </div>
  );
};

export default LineChart;
