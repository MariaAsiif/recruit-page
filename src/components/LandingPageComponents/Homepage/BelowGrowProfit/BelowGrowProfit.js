import React from 'react'
import { Accordion, Container } from 'react-bootstrap'
import belowprofit from '../../../../assets/landingImages/belowGrowProfit.png'
import { BelowGrowProfitMainContainer, BelowGrowProfitImg, BelowGrowProfitImgContainer } from './StyledBelowProfit'
import playButton from "../../../../assets/landingImages/play-outline-button.svg";
import BelowEditIQ from '../../DesignIQ/BelowEditIQ/BelowEditIQ';
import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const BelowGrowProfit = ({ id }) => {

  const [active, setActive] = useState('');


  const activeCollapes = (index) => {
    if (index === active) {
      setActive('')
    }
    else {
      setActive(index)

    }
  }

  return (
    <BelowGrowProfitMainContainer id={id}>

      <Accordion defaultActiveKey="0">
        <Accordion.Item onClick={() => activeCollapes(0)}>
          <Accordion.Header>
            Controlled Environment Agriculture Manufacturers
            {
              active === 0 ?
                <AiOutlineMinus style={{ fontSize: '25px', marginTop: '10px', float: 'right' }} />
                :
                <AiOutlinePlus style={{ fontSize: '25px', marginTop: '10px', float: 'right' }} />
            }
          </Accordion.Header>
          <Accordion.Body>
              <BelowEditIQ />

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* <Container>
        <h2></h2>
      </Container> */}
      {/* <BelowGrowProfitImgContainer>

        <BelowEditIQ />
      </BelowGrowProfitImgContainer> */}
      {/* <BelowGrowProfitImgContainer>
        <div className="inner-overlay">
          <div className="inner-overlay-content">
            <img className='play-img' src={playButton} alt="playButton" />
          
          </div>
        </div>
        <BelowGrowProfitImg src={belowprofit} alt={belowprofit} />
      </BelowGrowProfitImgContainer> */}
    </BelowGrowProfitMainContainer>
  )
}

export default BelowGrowProfit