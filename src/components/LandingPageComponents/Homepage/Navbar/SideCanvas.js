import React from "react";
import { Offcanvas } from "react-bootstrap";
import logo from "../../../../assets/landingImages/logo.svg";
import {Link} from 'react-router-dom';
import "./SideNavCanvas.css";

const SideCanvas = ({ show, handleClose }, props) => {
  return (
    <div>
      <Offcanvas
        className="sidenavcanvas-container"
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header >
          <Offcanvas.Title>
            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
              HPO<span>Rx</span>
            </h5>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className="sidenavcanvas" >
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">INHALATE</a>
              </li>
              <li>
                <a href="#">VAPORIZE</a>
              </li>
              <li>
                <a href="#">PORTABLES</a>
              </li>
              <li>
                <a href="#">CHILLUMS</a>
              </li>
              <li>
                CULTIVATE <i class="fas fa-angle-down"></i>
              </li>
              <li>
                <a href="#">DIAGNOSE </a>
              </li>
              <li>
                PRESCRIBE <i class="fas fa-angle-down"></i>
              </li>
              <li>
                MARKETPLACE <i class="fas fa-angle-down"></i>
              </li>
              <li>
                PRODUCTS <i class="fas fa-angle-down"></i>
                <ul>
                  <li><Link to='/locator' >Locate Us</Link></li>
                  <li><Link to='/agency' >Agency</Link></li>
                </ul>
              </li>
              <li>
                <a href="#">LOCATE</a>
              </li>
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SideCanvas;
