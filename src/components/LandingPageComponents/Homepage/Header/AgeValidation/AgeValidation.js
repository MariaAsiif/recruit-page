import React from 'react';
import { Row , Col, Button } from 'react-bootstrap';
import {AgeValidationContainer , AgeValidationFirst} from './StylesAgeValidation';
import logo from '../../../../../assets/landingImages/logo.svg';

const AgeValidation = () => {
  return (
    <AgeValidationContainer>
        <Row>
            <Col>
            <AgeValidationFirst>
                <div className='modal-first-logo' >
                    <img src={logo} alt='logo' />
                </div>
                <div className='modal-first-content' >
                    <div className='modal-first-content-price' >
                        <p>Win</p>
                        <h3>1000$</h3>
                        <h2>Gift Card or Cash Prize</h2>
                    </div>
                    <div className='modal-first-content-detail' >
                        <p>You have opportunity to do is submit a short 15-30 second testimonials video on how cannbis has helped you </p>
                    </div>
                    <div className='modal-first-content-button' >
                        <Button>Choose File</Button>
                    </div>
                </div>
            </AgeValidationFirst>
            </Col>
            <Col>section second</Col>
        </Row>
    </AgeValidationContainer>
  )
}

export default AgeValidation