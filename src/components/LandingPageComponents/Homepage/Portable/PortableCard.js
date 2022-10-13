import React from 'react'
import { Col } from 'react-bootstrap'
import { PortableMiniImg, PortableMiniImgContainer } from './PortableStyles';
import { AddToCartBtn, PriceBtn } from '../../Globals/Globals';
const PortableCard = ({ img }) => {
  return (
    <Col xs={6}>
      <PortableMiniImgContainer>
        <div className="overlay">
        </div>
        <div className='inner-overlay'>
          <div className='mb-3'>
            <PriceBtn>$540</PriceBtn>
          </div>
          <AddToCartBtn>Add to Cart</AddToCartBtn>
        </div>
        <PortableMiniImg src={img} alt={img} />
      </PortableMiniImgContainer>
      

    </Col>


  )
}

export default PortableCard