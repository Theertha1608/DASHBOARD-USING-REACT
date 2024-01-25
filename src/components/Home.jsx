// src/components/Home.js
import React from 'react';
import Linechart from './Linechart';
import PieChart from './PieChart';
import Table from './Table';
import ImageBox from './ImageBox';

const Home = () => {
  const homeContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'justifyContent',
    justifyContent: 'space-between',
    height: '100vh',
    padding: '20px',
  };

  const chartsContainerStyle = {
    display: 'flex',
    flexGrow: 1,
    width: '100%',
  };

  const chartsLeftStyle = {
    flexGrow: 1,
  };

  const chartsRightStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  };

  const imageBoxContainerStyle = {
    alignSelf: 'flex-end',
  };

  return (
    <div style={homeContainerStyle}>
      <h1>Home</h1>
      <div style={chartsContainerStyle}>
        <div style={chartsLeftStyle}>
          <Table />
        </div>
        <div style={chartsRightStyle}>
          <Linechart />
          <PieChart />
        </div>
      </div>
      <div style={imageBoxContainerStyle}>
        <ImageBox />
      </div>
    </div>
  );
};

export default Home;
