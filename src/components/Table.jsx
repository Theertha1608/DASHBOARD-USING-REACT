
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Table = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:3001/api/table')
      .then((response) => {
        console.log("response", response);
        setTableData(response.data);
      })
      .catch(error => console.error('Error fetching table data:', error));
  }, []);

  const tableStyle = {
    width: '500px', 
    height: '175px', 
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    bottom: '100px',
    left: '400px', 
    borderRadius: '10px',
    
    padding: '10px', 
  };
  const headingStyle = {
   
    color: '#000000',
    padding: '10px',
  };

 

  return (
    <div style={tableStyle}>
     
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th style={headingStyle}>ID</th>
            <th style={headingStyle}>Name</th>
            <th style={headingStyle}>Quantity</th>
            <th style={headingStyle}>Price</th>
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
    </div>
  );
};

export default Table;
