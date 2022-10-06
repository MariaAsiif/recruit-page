import React from "react";
import emptyLocation from "../../../../../assets/landingImages/landingImages";
import { Card } from "react-bootstrap";
import Flag1 from "../../../../../assets/landingImages/Flag1.svg";
import Star1 from "../../../../../assets/landingImages/Star1.svg";
import Like from "../../../../../assets/landingImages/Like.svg";

const LocationInfoBox = ({ selectedAddress }) => {
  return selectedAddress ? (
    <>
      <Card className="cards">
        {/* <div >
                          <img
                            src={emptyLocation}
                            className="img-section"
                            alt="img"
                          />
                        </div> */}
        <div className="card-data">
          <h6>{selectedAddress.Title}</h6>
          <p className="para">{selectedAddress._address}</p>
          <div className="d-flex pt-1 text1">
            <div>
              <img src={Flag1} className="icon " alt="icon" />
              <span className="icon-text">
                {selectedAddress.LocatorCountries}
              </span>
            </div>
            <div>
              <img src={Star1} className="icon " alt="icon" />
              <span className="icon-text">0.0</span>
            </div>
            <div>
              <img src={Like} className="icon " alt="icon" />
              <span className="icon-text">Likes 0</span>
            </div>
          </div>
        </div>
      </Card>
    </>
  ) : (
    <div className="current-location-card">Your current Location....!</div>
  );
};

export default LocationInfoBox;
