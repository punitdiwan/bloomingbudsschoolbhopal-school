import React from "react";
import { NavLink } from "react-router-dom";

const NobleSidebar = () => {
  return (
    <>
      <div className="rightbad">
        <div className="searchbox">
          <input type="search" style={{ border: "1px solid #D1D5DB" }} />
          <button className="btn btn-lg">
            <i className="ri-search-line"></i>
          </button>
        </div>

        <div
          className="btn btn-light nobaa text-center nobaaa1 mt-4"
          style={{
            border: "1px solid #797A7B",
            color: "white",
            borderRadius: "2px",
          }}
        >
          <span className="text-center hogbtn">BLOOMING BUDS PLAY SCHOOL</span>
        </div>

        <div className="nobaa nobaaa">
          <div className="btn btn-light nobaaa1">
            <NavLink to="/">HOME</NavLink>
          </div>

          {/* ABOUT US dropdown */}
          <div
            className="btn btn-light nobaaa1 dropdown-toggle"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            ABOUT US
          </div>

          <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton">
            <NavLink className="dropdown-item" to="/ourschool">
              OUR SCHOOL
            </NavLink>

            <NavLink className="dropdown-item" to="/boarddirector">
              BOARD OF DIRECTOR
            </NavLink>

            <NavLink className="dropdown-item" to="/principal">
              PRINCIPAL
            </NavLink>
          </div>

          <div className="btn btn-light nobaaa1">
            <NavLink to="/academicprocedure">ACADEMIC</NavLink>
          </div>

          <div className="btn btn-light nobaaa1">
            <NavLink to="/gallery">GALLERY</NavLink>
          </div>

          <div className="btn btn-light nobaaa1">
            <NavLink to="/contactus">CONTACT US</NavLink>
          </div>

          <div className="btn btn-light text-center hogbtn nobaaa1 mt-4">
            Did You Know?
          </div>

          <div className="btn btn-sm p-3 didyou">
            The Blooming Buds Play School was the first educational institute in
            Bhopal, M.P. to offer play school education.
          </div>
        </div>
      </div>
    </>
  );
};

export default NobleSidebar;