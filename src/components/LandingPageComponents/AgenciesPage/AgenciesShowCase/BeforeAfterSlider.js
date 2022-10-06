import React from 'react';
import './AgenciesShowCaseStyle.css';
import ReactCompareImage from "react-compare-image";

import {Placeholder} from 'react-bootstrap';


const BeforeAfterSlider = ({imagesData}) => {
  return (
    
      <ReactCompareImage  aspectRatio='taller' skeleton={<Placeholder as="p" animation="glow">
      <Placeholder xs={12} />
    </Placeholder>}  sliderLineColor='#E84025' style={{borderRadius:'1rem !important'}} leftImage={imagesData.img1} rightImage={imagesData.img2} />
   
  )
}

export default BeforeAfterSlider