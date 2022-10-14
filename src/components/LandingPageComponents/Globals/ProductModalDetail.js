import React from "react";
import { Modal, Button } from "react-bootstrap";
import { ProductModalContainer } from "./ProductModalStyle";
// import prescribe2 from "../../../../assets/landingImages/prescribe2.jpg";
import star from "../../../assets/landingImages/icons/star.png";
import { IMAGE_URL } from "../../../utils/config";

const ProductModalDetail = ({desc, img, title, price }) => {
  return (
    <ProductModalContainer>
      <div className="productDetail">
        <div className="productDetail-content">
          <div className="productDetail-content-title">
            <h1>{title}</h1>
            <div className="productDetail-content-title-rating">
              <div className="productDetail-content-title-rating-stars">
                <img src={star} alt='star' />
                <img src={star} alt='star' />
                <img src={star} alt='star' />
                <img src={star} alt='star' />
                <img src={star} alt='star' />
              </div>
              <div className="productDetail-content-title-rating-review">(43 Reviews)</div>
            </div>
          </div>
          <div className="productDetail-content-subtitle">
            <h1>${price}</h1>
          </div>
          <div className="productDetail-content-description">
            <p>{desc}</p>
          </div>
          <div className="productDetail-content-buttons">
            <button className="productDetail-content-buttons-addtocart">
              <span className="cartIcon"></span>Add to Cart
            </button>
            <button className="productDetail-content-buttons-checkout">
              <span className="cartIcon"></span>Checkout
            </button>
          </div>
        </div>
        <div className="productDetail-image">
          <img  src={IMAGE_URL + img} alt="prescribe2" />
        </div>
      </div>
    </ProductModalContainer>
  );
};

export default ProductModalDetail;
