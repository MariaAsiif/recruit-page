import React, { useState } from "react";
import { CustomCardContainer } from "./Globals";
import { IMAGE_URL } from "../../../utils/config";
import { Card } from "react-bootstrap";
import star from "../../../assets/landingImages/icons/star.png";
import ProductModalDetail from '../Globals/ProductModalDetail';
import VideoModal from '../Homepage/VideoModal/VideoModal'
import { BsHeart } from 'react-icons/bs'
const CustomCard = ({ desc, img, title, price }) => {
  const [modalShow, setModalShow] = useState(false);


  function add3Dots(string, limit) {
    var dots = "...";
    if (string.length > limit) {
      // you can also use substr instead of substring
      string = string.substring(0, limit) + dots;
    }

    return string;
  }


  return (
    <div>
     
      <CustomCardContainer>
        <Card className="customCard " >
          <div className="customCard-body ">
            <div className="image-section">
              <img
                onClick={() => setModalShow(true)}
                className="main-img"
                src={IMAGE_URL + img}
                alt="Trending-Now"
              />
            </div>
            <div className="content">
              <div className="title">
                <h1>{ add3Dots(title , 25)}</h1>
                <span>${price}</span>
              </div>
              <div className="rating">
                <div className="stars">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
                <div className="review">(43 Reviews)</div>
              </div>
              <div className="flex justify-between">
                <button className="add-to-cart ">
                  Add to Cart <span className="cart"></span>
                </button>
                <button className="bg-green-200 w-[20%] flex justify-center rounded-md items-center h-[50px] mt-5">
                  <BsHeart className="text-[20px] text-green-700" />
                </button>
              </div>
            </div>
          </div>
        </Card>
      </CustomCardContainer>
    </div>
  );
};

export default CustomCard;
