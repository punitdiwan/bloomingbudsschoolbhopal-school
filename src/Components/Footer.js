import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Footer.css";
import { FaInstagram,FaFacebookSquare,FaYoutube} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footermain p-2 ">
        <div className="footermid ">
          <div className="footerbottm ">
            <div className="fbleft">
              <li className="my-3">
                <NavLink to="/">Home</NavLink>
              </li>
              {/* <li className='my-3'><NavLink  to="/boarddirector">Board of Director</NavLink></li> */}
              <li className="my-3">
                <NavLink to="/principal">Principal</NavLink>
              </li>
              <li className="my-3">
                <NavLink to="/gallery">Gallery</NavLink>
              </li>
            </div>

            <div className="fbright">
              <li className="my-3">
                <NavLink to="/ourschool">About Us</NavLink>
              </li>
              <li className="my-3">
                <NavLink to="/academicprocedure">Academic</NavLink>
              </li>
              <li className="my-3">
                <NavLink to="/facilities">Facilities</NavLink>
              </li>
              {/* <li className=" my-3  ">
                <NavLink to="/contactus">Contact Us</NavLink>
              </li> */}
            </div>

            <div className="fbright">
              {/* <li className="my-3">
                <NavLink to="/ourschool">About Us</NavLink>
              </li>
              <li className="my-3">
                <NavLink to="/academicprocedure">Academic</NavLink>
              </li>
              <li className="my-3">
                <NavLink to="/facilities">Facilities</NavLink>
              </li> */}
              <li className=" my-3  ">
                <NavLink to="/contactus">Contact Us</NavLink>
              </li>
            </div>
          </div>
        </div>

        <div className="footerleft">
          <div className="logo">
            <img src="./images/logo1.jpg" alt="" />
          </div>
        </div>
        <div className="fbrightt">
          <div className="socialmedia1">
            <span>
              <a
                href="https://www.facebook.com/profile.php?id=100081782228072"
                target="_blank"
              >
                <FaFacebookSquare/>
              </a>
            </span>

           

            <span>
              <a href="">
                <FaYoutube/>
              </a>
            </span>
            <span  className="insta">
              <a 
                href="https://instagram.com/bloomingbudsplayschool?igshid=ZmZhODViOGI="
                target="_blank" 
              >
                <FaInstagram />
              </a>
            </span>
          </div>
          <div className="seacrch">
            <input className="aa" type="search" />
            <div className="btn btn-lg" style={{ backgroundColor: "white" }}>
              <i className="ri-search-line"></i>
            </div>
          </div>
          <div className="copyright mt-2">
            <p id="copyr">
              © Made with &nbsp;
              <i
                className="ri-heart-fill"
                style={{ color: "red", fontSize: "20px" }}
              >
                {" "}
              </i>{" "}
              <a
                style={{ color: "white", textDecoration: "none" }}
                target="_blank"
                href="https://maitretech.com/"
              >
                &nbsp; by Maitretech Solution
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="fbtm">
        <p>
          Address - D9, New Jail Road, Elixir Garden, Karond , Bhopal Madhya
          Pradesh 462038
        </p>
      </div>
    </>
  );
};

export default Footer;
