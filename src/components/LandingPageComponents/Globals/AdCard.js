import React from "react";
import { AddCardContainer } from "./Globals";
import { IMAGE_URL } from "../../../utils/config";
import usa from "../../../assets/landingImages/usa.png";
import { BsHeartFill , BsShareFill } from 'react-icons/bs'
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

      
      <div className='inner-overlay'>
        <div className=" h-[40px] bg-green-600 w-full">
           <div className="flex items-center justify-center pt-2 ">
           <BsHeartFill className="text-[25px] cursor-pointer hover:text-red-600"/>
           <BsShareFill className="text-[25px] cursor-pointer hover:text-red-600 ml-3"/>
           </div>
        </div>
      </div>





    </AddCardContainer>
  );
};

export default AdCard;
