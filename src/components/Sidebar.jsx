import React from 'react';
import CircledMenuImage from '../Assets/Circled Menu.png';
import HelpImage from '../Assets/Help.png';
import PuzzleImage from '../Assets/Puzzle.png';
import SupportImage from '../Assets/Support.png';
import BriefcaseImage from '../Assets/Briefcase.png';
import StatBoardImage from '../Assets/StatBoard.png';



function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
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
          <a href="">
            <img src={HelpImage} alt="Help" className='icon' /> Help
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;