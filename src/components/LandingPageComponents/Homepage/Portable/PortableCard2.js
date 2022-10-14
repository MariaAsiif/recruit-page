import React from 'react'
import { Col } from 'react-bootstrap'
import { PortableMiniImg, PortableMiniImgContainer2 } from './PortableStyles';
import { AddToCartBtn, PriceBtn } from '../../Globals/Globals';
const PortableCard2 = ({ img }) => {
  return (
    <Col xs={6}>
      <PortableMiniImgContainer2>
        <div className="overlay">
        </div>
        <div className='inner-overlay'>
          <div className='mb-3'>
            <PriceBtn>$540</PriceBtn>
          </div>
          <AddToCartBtn>Add to Cart</AddToCartBtn>
        </div>
        <PortableMiniImg src={img} alt={img} />
      </PortableMiniImgContainer2>

    </Col>


  )
}

export default PortableCard2