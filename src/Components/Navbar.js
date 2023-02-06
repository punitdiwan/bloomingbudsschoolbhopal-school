import React from "react";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid navmain">
        <div className="navleft">
          <div className="logo">
            <img src="./images/Blooming_Logo_1.png" alt="" />
          </div>
        </div>
        <div className="navmid">
          <h1>
            <span id="firsth">B</span>LOOMING <span id="firsth">B</span>UDS{" "}
            <span id="firsth">P</span>LAY <span id="firsth">S</span>CHOOL
          </h1>
          <p>Learning today. Leading tomorrow. Inspired Forever.</p>
        </div>
        <div className="navright">
          <div className="socialmedia">
            <i className="ri-facebook-fill"></i>
            <i className="ri-linkedin-box-fill"></i>
            <i className="ri-youtube-line"></i>
          </div>
          <div className="seacrch">
            <input className="aa" type="search" />
            <div className="btn" style={{ backgroundColor: "#F8D34D" }}>
              Search
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
