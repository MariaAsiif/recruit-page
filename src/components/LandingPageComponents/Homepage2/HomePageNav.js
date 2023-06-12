import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { SubBarContainer } from "../Homepage/Navbar/StyledNavbar";
import { Link, animateScroll as scroll } from "react-scroll";
// import { useHistory } from "react-router-dom";
import "./homePageNav.css";

const SubBar = ({ setShow }) => {
  // const history = useHistory();

  return (
    <div className="homeNav bscontainer-fluid">
      <div className="nav-content">
        <ul className="nav-items">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="HOME"
              spy={true}
              smooth={true}
              duration={500}
              // onClick={() => history.push("/home")}
            >
              {" "}
              Clothing {" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="INHALATE"
              spy={true}
              smooth={true}
              duration={500}
            >
              Health & Beauty
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="VAPORIZE"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Hygiene & Body
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="PORTABLES"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              House & Decor
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="CHILLUMS"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Organic Nutrition
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="CULTIVATE"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Seeds & Flowers
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="DIAGNOSE"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Cultivate & Grow{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="PRESCRIBE"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Paraphernalia{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="MARKETPLACE"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Taste of Home{" "}
            </Link>
          </li>
     
     
        </ul>
      </div>
    </div>
  );
};

export default SubBar;
