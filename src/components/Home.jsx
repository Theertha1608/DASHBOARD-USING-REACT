import React from "react";
import { Grid } from "@mui/material";
import Linechart from "./Linechart";
import PieChart from "./PieChart";
import Table from "./Table";
import ImageBox from "./ImageBox";
import Profile from "./Profile";
import Pagination from "./Pagination";

const Home = () => {
  const handlePageChange = (newPage) => {
    console.log(`Page changed to ${newPage}`);
  };

  return (
    <div>
      <Profile />
      <h2 style={{ color: "black", marginLeft: "24px" }}>Good Morning! ☀️</h2>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Linechart />
        </Grid>
        <Grid item xs={12} md={6}>
          <PieChart />
        </Grid>

        <Grid item xs={12} md={6}>
          <Table />
        </Grid>
        <Grid item xs={12} md={6}>
          <ImageBox />
        </Grid>
      </Grid>

      {/* <Pagination
        totalPages={10}
        currentPage={1}
        onPageChange={handlePageChange}
      /> */}
    </div>
  );
};

export default Home;
