import React, { useRef } from "react";
import { StyleTrending } from "./StyleTrendingNow";
import iconNext from '../../../../assets/landingImages/iconNext.svg';
import iconPrev from '../../../../assets/landingImages/iconPrev.svg';
import TrendingNows from '../../../../assets/landingImages/TrendingNows.svg';

import { Card, Col, Row } from "react-bootstrap";
import Slider from "react-slick";

function TrendingNow(){
    const sliderRef=useRef(null);
    console.log(sliderRef.current,'Slider');
    return(
        <StyleTrending>
            <div className="container">
             <div className="main-section">
             <h1 className='main-heading'>Trending Now</h1>
             <div className="icons">
                 <div className="" onClick={()=>sliderRef.current.slickPrev()}>
                 <img src={iconPrev} alt='iconNext' className="icon-images" />
                 </div>
                 <div className="" onClick={()=>sliderRef.current.slickNext()}>
                     <img src={iconNext} alt='iconNext' className="icon-images"  />
                 </div>
                 </div>
             </div>
               <Row className="mt-5" >
               <Slider ref={sliderRef} slidesToShow={4}>
               {[...Array(7)].map((_,index)=>
                   <Col key={index} className="d-inline-block">
                  
                      <div>
                       <h5 className="outside-card-text">Fairman Online</h5>
                          <Card>
                            <div className="card-body">
                                <img className="main-img" src={TrendingNows} alt="Trending Now Image"/>
                                <p>Hempz Pomegranate Herbal Body Moisturizer,</p>
                                <h4>From $ 35</h4>
                            </div>
                          </Card> 
                       </div> 
                   </Col>
                   )}
                   </Slider>
               </Row>
            </div>
        </StyleTrending>)
   
}
export default TrendingNow;