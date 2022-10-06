import React from "react";
import { AgenciesHeaderContainer } from "./AgenciesHeaderStyle";
import agenciyCart from "../../../../assets/landingImages/agenciyCart.svg";
import agencydrop from "../../../../assets/landingImages/agency-drop-dummy.png";
import agencyLogo from "../../../../assets/landingImages/agencyLogo.png";
import agencysearch from "../../../../assets/landingImages/agency-search-icon.svg";
import agencyuser from "../../../../assets/landingImages/agency-user.svg";
import { useHistory } from "react-router-dom";
import { BiMicrophone } from 'react-icons/bi'
const AgenciesHeader = () => {
  const history = useHistory()
  return (
    <AgenciesHeaderContainer>
      <header class="top-bar">
        <div class="container">
          <div class="inner-content">
            <div class="logo">
              <img style={{ cursor: 'pointer' }} onClick={() => history.push('/')} src={agencyLogo} alt="agencyLogo" />
            </div>
            <div class="search-box">
              <input type="search" name="" placeholder="Search" />
              <button type="submit" >
                <BiMicrophone className="micro" />
                <img src={agencysearch} alt="second" />
              </button>
            </div>
            <div class="right-part">
              <div class="drop-down">
                <img src={agencydrop} alt="agencydrop" />
              </div>
              <div class="icons">
                <img src={agencyuser} alt="agencyuser" />
              </div>
              <div class="icons">
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
