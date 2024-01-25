// src/components/Profile.js
import React from 'react';
import rectangle10Image from '../Assets/Rectangle 10.png';

const Profile = () => {
  const profileContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    top: '20px',
    right: '20px',
  };

  const profileTextContainerStyle = {
    marginRight: '10px',
    alignItems: 'center',
  };

  const profileImageStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  };

  const profileNameStyle = {
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const profileEmailStyle = {
    color: '#000000',
    marginBottom: '5px',
  };

  return (
    <div style={profileContainerStyle}>
      <div style={profileTextContainerStyle}>
        <div style={profileNameStyle}>John Doe</div>
        <div style={profileEmailStyle}>johndoe@gmail.com</div>
      </div>
      <img src={rectangle10Image} alt="Profile" style={profileImageStyle} />
    </div>
  );
};

export default Profile;
