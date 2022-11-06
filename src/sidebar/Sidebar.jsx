import React from "react";
import "./sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About me</span>
        <img
          src="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eum
          dolores dicta placeat eaque! Temporibus libero illo soluta accusamus
          hic?
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style & Fashion</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow me</span>
        <ul className="sidebarSocial">
          <i className=" sidebarIcon fa-brands fa-square-facebook"></i>
          <i className=" sidebarIcon fa-brands fa-square-instagram"></i>
          <i className=" sidebarIcon fa-brands fa-youtube"></i>
          <i className=" sidebarIcon fa-brands fa-square-behance"></i>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
