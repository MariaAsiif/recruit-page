import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import growProfit from "../../../../assets/landingImages/growProfit.png";
import { PrimaryHeading } from "../../Globals/Globals";
import {
  GrowProfitImg,
  GrowProfitImgContainer,
  GrowProfitPriceText,
  GrowProfitSlickContainer,
  GrowProfitViewMore,
  GrowProfitViewMoreBlack,
} from "./StyledGrowProfit";

const GrowProfitCard = () => {
  return (
    <div>
      <GrowProfitSlickContainer className="d-flex align-items-center ">
        <Row className="align-items-center  justify-content-center">
          <Col md={6}>
            <div className="text-container">
              <PrimaryHeading>GROW PROFITS</PrimaryHeading>
              <p>
                Are you located in a country, region, or state in which cannabis
                and marijuana consumption has been decriminalized and regulated
                by law? A Cannabis Association? A marijuana Club? A Pharmacist
                Serving a Small Rural Population? licensed therapeutic
                herbalist? A rural doctor?{" "}
              </p>
              <p>
              Can you prescribe medical-grade extract or flower from the Cannabaceae family grown in a laboratory standard contained environment agriculture? Alternatively, if you are a self-starter, a higher achiever, and gifted with entrepreneurial skills. {" "}
              </p>
              <h5>Turnkey from</h5>
              <GrowProfitPriceText>$35000</GrowProfitPriceText>
              <div className="d-flex">
                <GrowProfitViewMoreBlack>View More</GrowProfitViewMoreBlack>

                <GrowProfitViewMore>View More</GrowProfitViewMore>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <GrowProfitImgContainer className="d-flex justify-content-center align-items-center">
              <GrowProfitImg
                className="img-fluid"
                src={growProfit}
                alt={growProfit}
              />
            </GrowProfitImgContainer>
          </Col>
        </Row>
      </GrowProfitSlickContainer>
    </div>
  );
};

export default GrowProfitCard;
