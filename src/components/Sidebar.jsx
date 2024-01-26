import React from "react";
import { useLocation } from "react-router-dom";
import CircledMenuImage from "../Assets/Circled Menu.png";
import HelpImage from "../Assets/Help.png";
import PuzzleImage from "../Assets/Puzzle.png";
import SupportImage from "../Assets/Support.png";
import BriefcaseImage from "../Assets/Briefcase.png";
import StatBoardImage from "../Assets/StatBoard.png";
import LogoutIcon from "../Assets/Shutdown.png";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const location = useLocation();

  const sidebarStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  const ulStyle = {
    marginLeft: "50px", 
    marginTop: "76px", 
  };

  const logoutButtonStyle = {
    padding: "20px",
    backgroundColor: "white",
    borderTop: "1px solid #ccc",
    cursor: "pointer",
    textAlign: "center",
    bottom: "0px",
    marginTop: "70px",
    color: "black",
  };

  const whiteTextStyle = {
    color: "white",
    textDecoration: "none",
  };

  const activeLinkStyle = {
    color: "black",
    backgroundColor: "white",
    textDecoration: "none",
  };

  const sidebarItemStyle = {
    backgroundColor: "rgb(33, 38, 56)",
    padding: "16px",
    borderRadius: "12px",
    marginBottom: "8px",
    color: "white",
    marginBottom: "36px",
    transition: "background-color 0.3s", 
  };

  const hoverStyle = {
    backgroundColor: "white", 
    
  };

  return (
    <aside
      id="sidebar"
      style={sidebarStyle}
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img
            src={BriefcaseImage}
            alt="Briefcase"
            className="icon_header"
            style={{ marginLeft: "40px" }}
          />
          <img
            src={StatBoardImage}
            alt=""
            className="icon_header"
            style={{ marginLeft: "34px" }}
          />
        </div>
      </div>

      <ul className="sidebar-list" style={ulStyle}>
        <li
          className={`sidebar-list-item ${
            location.pathname === "/" ? "active" : ""
          }`}
          style={{
            ...sidebarItemStyle,
            ...(location.pathname === "/" && activeLinkStyle),
            ...(location.pathname === "/" && hoverStyle), 
          }}
        >
          <a
            href="/"
            style={location.pathname === "/" ? activeLinkStyle : whiteTextStyle}
          >
            <img src={CircledMenuImage} alt="Dashboard" className="icon" />{" "}
            Dashboard
          </a>
        </li>
        <li
          className={`sidebar-list-item ${
            location.pathname === "/support" ? "active" : ""
          }`}
          style={{
            ...sidebarItemStyle,
            ...(location.pathname === "/support" && activeLinkStyle),
            ...(location.pathname === "/support" && hoverStyle), 
          }}
        >
          <a
            href="/support"
            style={
              location.pathname === "/support"
                ? activeLinkStyle
                : whiteTextStyle
            }
          >
            <img src={SupportImage} alt="Support" className="icon" /> Support
          </a>
        </li>
        <li
          className={`sidebar-list-item ${
            location.pathname === "/plugins" ? "active" : ""
          }`}
          style={{
            ...sidebarItemStyle,
            ...(location.pathname === "/plugins" && activeLinkStyle),
            ...(location.pathname === "/plugins" && hoverStyle), 
          }}
        >
          <a
            href="/plugins"
            style={
              location.pathname === "/plugins"
                ? activeLinkStyle
                : whiteTextStyle
            }
          >
            <img src={PuzzleImage} alt="Plugins" className="icon" /> Plugins
          </a>
        </li>
        <li
          className={`sidebar-list-item ${
            location.pathname === "/help" ? "active" : ""
          }`}
          style={{
            ...sidebarItemStyle,
            ...(location.pathname === "/help" && activeLinkStyle),
            ...(location.pathname === "/help" && hoverStyle), 
          }}
        >
          <a
            href="/help"
            style={
              location.pathname === "/help" ? activeLinkStyle : whiteTextStyle
            }
          >
            <img src={HelpImage} alt="Help" className="icon" /> Help
          </a>
        </li>
      </ul>

      <div style={logoutButtonStyle}>
        <a href="/" style={{ color: "red", textDecoration: "none" }}>
          Logout
        </a>
        <img
          src={LogoutIcon}
          style={{ marginLeft: "5px", marginTop: "1px" }}
          alt="logout"
        />
      </div>
    </aside>
  );
}

export default Sidebar;
