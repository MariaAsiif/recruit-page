import React from "react";
import { AddCardContainer } from "./Globals";
import { IMAGE_URL } from "../../../utils/config";
import usa from "../../../assets/landingImages/usa.png";

const AdCard = ({ img }) => {
  return (
    <AddCardContainer>
      <div className="inner-card">
        <div className="addCard">
          <div className="image-section">
            <img src={IMAGE_URL + img} alt="card image" />
            <span className="tag">Ad</span>
          </div>
          <div className="advertise">
            To advertise
            <img src={usa} alt="Usa Flag" />
            <span>+1 (213) 370 087 0873</span>
          </div>
        </div>
      </div>
    </AddCardContainer>
  );
};

export default AdCard;
