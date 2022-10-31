import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  PortableImg1,
  PortableImg1Container,
  PortableMainContainer,
  PortableMoreBtn,
} from "./PortableStyles";
import portable from "../../../../assets/landingImages/portable.jpg";
import PortableSlick from "./PortableSlick";
import { PrimaryHeading } from "../../Globals/Globals";
import PlayBtn from "../../Globals/PlayBtn";
import VideoModal from "../VideoModal/VideoModal";
import Popup from "../Popup/Popup";

const Portable = ({ id }) => {
  const [modalShow, setModalShow] = React.useState(false);

  const data = localStorage.getItem("ageGateActive");

  const OpenModalHandler = (index) => {
    setModalShow(true);
  };

  return (
    <PortableMainContainer>
      <VideoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
        children={
          data !== "active" ? (
            <Popup setModalShow={setModalShow} />
          ) : (
            <div>
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/658072539?h=13173e8754"
                width="100%"
                height="550px"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          )
        }
      />
      <div className='bscontainer-fluid' id={id}>
        <Row>
          <Col xs={12} md={6} >
            <div className="px-3">
              <h2 className="text-[30px] leading-none" >PORTABLES</h2>
              <p className="leading-none">"You can take it with you"</p>
              <p className="mini-title  leading-none">Under Legal prescription</p>
              <PortableMoreBtn>View More</PortableMoreBtn>
            </div>
            <PortableSlick />
          </Col>
          <Col xs={12} md={6}>
            <PortableImg1Container>
              <div className="inner-overlay">
                <PlayBtn clicked={() => OpenModalHandler()} />
              </div>
              <PortableImg1
                className="img-fluid"
                src={portable}
                alt={portable}
              />
            </PortableImg1Container>
          </Col>
        </Row>
      </div >
    </PortableMainContainer>
  );
};

export default Portable;
