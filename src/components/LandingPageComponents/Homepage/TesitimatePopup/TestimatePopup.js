import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card, Modal } from "react-bootstrap";
import './StylePopup.css'
import WaveSurf from "../Testimonials/WaveSurf/WaveSurf";
import { RecordingContainer } from "../Testimonials/StyleTestimonial";
import flag from '../../../../assets/landingImages/flag.svg';
import { GrClose } from 'react-icons/gr'
function TestimatePopup({ permition, Info, Toggle }) {

  return (
    <>
      <Modal show={permition} size="md" onHide={Toggle} >
        <Modal.Header closeButton onClick={Toggle}>
          <div className="close_btns">
            <GrClose className="close" />
          </div>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ border: 'none' }} >
            <div className='text-center card-body'>
              <img class src={Info.img} alt="Testimonial " className='main-image mx-auto' />
              <h3 className="nameHeading">{Info.name}</h3>
              <h6 className="profession">Marketing Agency</h6>

              <img src={flag} alt="flag" className='flag mx-auto' />
              {Info.audio &&
                <RecordingContainer className='pb-4'>
                  <WaveSurf audio={Info.audio} />
                </RecordingContainer>
              }
              {Info.subtitle &&
                <div className='lead'>{`"${Info.subtitle}"`}</div>

              }
            </div>
          </Card>
        </Modal.Body>

      </Modal>
    </>
  );
}

export default TestimatePopup;
