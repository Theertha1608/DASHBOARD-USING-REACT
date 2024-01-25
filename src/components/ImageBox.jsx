import React from 'react';
import mediaImage from '../Assets/media.png';
import facebookImage from '../Assets/facebook.png';
import instagramImage from '../Assets/instagram.png';
import twitterImage from '../Assets/twitter.png';

const ImageBox = () => {
  const boxStyle = {
    width: '200px',
    height: '300px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    bottom: '10px',
    right: '0px',
    borderRadius: '10px',
    backgroundImage: `url(${'./'})`,
    backgroundSize: 'cover',
  };

  const nameStyle = {
    color: 'black',
    marginTop: '10px',
    textAlign: 'center',
  };

  const positionStyle = {
    textAlign: 'center',
  };

  const socialMediaStyle = {
    position: 'absolute',
    bottom: '5px',
    width: '100%',
    textAlign: 'center',
  };

  const socialMediaIconStyle = {
    width: '15px',
    height: '15px', 
    margin: '0 10px', 
  };

  return (
    <div style={boxStyle}>
      <img src={mediaImage} alt="media.png" />
      <div style={nameStyle}>John Doe</div>
      <div style={positionStyle}>CEO</div>
      <div style={socialMediaStyle}>
        <img src={facebookImage} alt="Facebook" style={socialMediaIconStyle} />
        <img src={instagramImage} alt="Instagram" style={socialMediaIconStyle} />
        <img src={twitterImage} alt="Twitter" style={socialMediaIconStyle} />
      </div>
    </div>
  );
};

export default ImageBox;
