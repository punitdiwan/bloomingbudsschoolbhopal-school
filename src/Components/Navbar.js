import React from "react";
import "./css/Navbar.css";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid navmain">
        <div className="navleft">
          <div className="logo">
            <img src="./images/logo1.jpg" alt="" />
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
            <a
              href="https://www.facebook.com/profile.php?id=100081782228072"
              target="_blank"
            >
              {" "}
              <i className="ri-facebook-fill"></i>
            </a>
            <span>
              {" "}
              <a
                href="https://instagram.com/bloomingbudsplayschool?igshid=ZmZhODViOGI="
                target="_blank"
              >
                <BsInstagram />
              </a>
            </span>
            <span>
            <AiOutlineYoutube />
            </span>
           
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
