import React, { useState } from "react";
import { Accordion, Container } from "react-bootstrap";
import { ViewMoreBtn } from "../../Globals/Globals";
import InhalateSlick from "./InhalateSlick";
import {
  InhalateButtonContainer,
  InhalateMainContainer,
  InhalateTextContainer,
} from "./StyledInhalate";
import VideoModal from '../VideoModal/VideoModal';
import Collapse from 'react-bootstrap/Collapse';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
const Inhalate = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');


  const activeCollapes = (index) => {
    if (index === active) {
      setActive('')
    }
    else {
      setActive(index)

    }
  }

  console.log("active", active)

  return (
    <div className="bscontainer-fluid" id={id}>

      <InhalateMainContainer>
        <InhalateTextContainer>

          {/* <Accordion defaultActiveKey="0">
            <Accordion.Item onClick={() => activeCollapes(0)}>
              <Accordion.Header>Inhalate
                {
                  active === 0 ?
                    <AiOutlineMinus style={{ fontSize: '25px', marginTop: '10px', float: 'right' }} />
                    :
                    <AiOutlinePlus style={{ fontSize: '25px', marginTop: '10px', float: 'right' }} />
                }
              </Accordion.Header>
              <Accordion.Body>
                Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in
                hendrerit orci malesuada eu. Morbi feugiat et ligula maximus
                aliquet. Quisque aliquet luctus elit, in hendrerit orci malesuada
                eu. Morbi feugiat et ligula maximus aliquet
              </Accordion.Body>
            </Accordion.Item>
          </Accordion> */}
          {/* <h3  onClick={() => setOpen(!open)} aria-controls="inhalate-collapse" >Inhalate</h3>
          <Collapse in={open}>
            <p id="inhalate-collapse"  >
              Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in
              hendrerit orci malesuada eu. Morbi feugiat et ligula maximus
              aliquet. Quisque aliquet luctus elit, in hendrerit orci malesuada
              eu. Morbi feugiat et ligula maximus aliquet
            </p>
          </Collapse> */}



        </InhalateTextContainer>
        <InhalateSlick />
        <InhalateButtonContainer>
          <ViewMoreBtn  >View More</ViewMoreBtn>
        </InhalateButtonContainer>
      </InhalateMainContainer>
    </div >
  );
};

export default Inhalate;
