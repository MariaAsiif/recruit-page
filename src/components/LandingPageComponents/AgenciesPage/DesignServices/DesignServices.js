import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { StyleDesignServices } from "./StyleDesignService";
import CardData from './CardData';
import Card2 from './Card2';

function DesignServices() {
  return (<>
  <StyleDesignServices>
  <div className="bgcolor">
    <div className="container">
        <div className="main-heading ">Design Agency Services</div>
        <Row>
        {CardData.map((v  , i )=>
          <Col key={i}  lg={4} md={6} >
            <Card className="cards">
              <div className="card-body">
                <div className="heading-section d-flex">
                  <img src={v.Bimg} alt="branding" className="img-icon" />
                  <h2 className="branding-heading">{v.name}</h2>
                </div>
                <div className="paragraph">
                  {v.paragraph}
                </div>
                  <div className="main-options" >
                    <div className="main-options-option">
                      <img src={v.tick} alt="tick" className="tick" />
                      <span className="tick-option"> {v.opt1}</span>
                    </div>
                    <div className="main-options-option">
                      <img src={v.tick} alt="tick" className="tick" />
                      <span className="tick-option"> {v.opt2}</span>
                    </div>
                    <div className="main-options-option">
                      <img src={v.tick} alt="tick" className="tick" />
                      <span className="tick-option">{v.opt3} </span>
                    </div>
                    <div className="main-options-option">
                      <img src={v.tick} alt="tick" className="tick" />
                      <span className="tick-option"> {v.opt4}</span>
                    </div>
                  </div>
              <button className="card-btn">{v.btntext}</button>
              </div>
            </Card>
          </Col>
        )}
        </Row>
      </div>
    </div>   
  </StyleDesignServices>

<Card2/>
   </>  );
}

export default DesignServices;
