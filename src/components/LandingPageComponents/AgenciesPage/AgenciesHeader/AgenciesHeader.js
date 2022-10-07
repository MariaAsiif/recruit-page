import React from "react";
import { AgenciesHeaderContainer } from "./AgenciesHeaderStyle";
import agenciyCart from "../../../../assets/landingImages/agenciyCart.svg";
import agencydrop from "../../../../assets/landingImages/agency-drop-dummy.png";
import agencyLogo from "../../../../assets/landingImages/agencyLogo.png";
import agencysearch from "../../../../assets/landingImages/agency-search-icon.svg";
import agencyuser from "../../../../assets/landingImages/agency-user.svg";
// import { useHistory } from "react-router-dom";
import { BiMicrophone } from 'react-icons/bi'
const AgenciesHeader = () => {
  // const history = useHistory()
  return (
    <AgenciesHeaderContainer>
      <header className="top-bar">
        <div className="bscontainer-fluid">
          <div className="inner-content">
            <div className="logo">
              <img style={{ cursor: 'pointer' }}  src={agencyLogo} alt="agencyLogo" />
            </div>
            <div className="search-box">
              <input type="search" name="" className="focus:outline-none" placeholder="Search" />
              <button type="submit" className="flex justify-around items-center">
                <BiMicrophone className="micro" />
                <img src={agencysearch} alt="second" />
              </button>
            </div>
            <div className="right-part">
              <div className="drop-down">
                <img src={agencydrop} alt="agencydrop" />
              </div>
              <div className="icons">
                <img src={agencyuser} alt="agencyuser" />
              </div>
              <div className="icons">
                <img src={agenciyCart} alt="agenciyCart" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </AgenciesHeaderContainer>
  );
};

export default AgenciesHeader;
