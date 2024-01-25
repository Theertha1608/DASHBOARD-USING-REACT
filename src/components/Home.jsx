import React from 'react';
import Linechart from './Linechart';
import PieChart from './PieChart';
import Table from './Table';
import ImageBox from './ImageBox';
import Profile from './Profile';
import Pagination from './Pagination'; // Import the Pagination component

const Home = () => {
  const homeContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'justifyContent',
    justifyContent: 'space-between',
    height: '100vh',
    padding: '20px',
  };

  const greetingStyle = {
    color: '#000000',
    fontSize: '1.2em',
    fontWeight: 'bold',
  };

  const sunEmojiStyle = {
    marginRight: '0.5em',
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

  const handlePageChange = (newPage) => {
    // Handle page change logic here (e.g., fetching data for the new page)
    console.log(`Page changed to ${newPage}`);
  };

  return (
    <div style={homeContainerStyle}>
      <Profile />
      <div style={greetingStyle}>
        Good Morning!
        <span role="img" aria-label="sun emoji" style={sunEmojiStyle}>
          ☀️
        </span>
      </div>
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
      <Pagination totalPages={10} currentPage={1} onPageChange={handlePageChange} />
    </div>
  );
};

export default Home;
