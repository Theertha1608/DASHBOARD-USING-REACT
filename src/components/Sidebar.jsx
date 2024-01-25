import React from 'react';
import CircledMenuImage from '../Assets/Circled Menu.png';
import HelpImage from '../Assets/Help.png';
import PuzzleImage from '../Assets/Puzzle.png';
import SupportImage from '../Assets/Support.png';
import BriefcaseImage from '../Assets/Briefcase.png';
import StatBoardImage from '../Assets/StatBoard.png';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const sidebarStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%', // Set the sidebar height to 100% of the viewport height
  };

  const logoutButtonStyle = {
    padding: '20px',
    backgroundColor: 'white',
    borderTop: '1px solid #ccc',
    cursor: 'pointer',
    textAlign: 'center',
    borderRadius: '10px 10px 10px 10px',
    bottom: '0px',
    top:'20px',
  };

  const whiteTextStyle = {
    color: 'black',
    textDecoration: 'none',
  };

  return (
    <aside id="sidebar" style={sidebarStyle} className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <img src={BriefcaseImage} alt="Briefcase" className='icon_header'/>
          <img src={StatBoardImage} alt="" className='icon_header'/>
        </div>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="/">
            <img src={CircledMenuImage} alt="Dashboard" className='icon' /> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/">
            <img src={SupportImage} alt="Support" className='icon' /> Support
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/">
            <img src={PuzzleImage} alt="Plugins" className='icon' /> Plugins
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/">
            <img src={HelpImage} alt="Help" className='icon' /> Help
          </a>
        </li>
      </ul>

      <div style={logoutButtonStyle}>
        <a href="/" style={whiteTextStyle}>Logout</a>
      </div>
    </aside>
  );
}

export default Sidebar;
