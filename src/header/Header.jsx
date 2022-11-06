import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Travel Blog</span>
      </div>
      <div className="headerImg-container">
        <div className="overlay"></div>
        <img
          src="https://images.pexels.com/photos/3373053/pexels-photo-3373053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="headerImg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
