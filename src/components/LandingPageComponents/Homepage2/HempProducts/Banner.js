import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { HempBox } from './StyleHempProduct'

const Banner = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <Container>
        <Row className="g-3">
          {[...Array(3)].map((_, index) =>
            <Col md={4} sm={6} xs={12} key={index}>
              <HempBox>
                
              </HempBox>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  )
}

export default Banner