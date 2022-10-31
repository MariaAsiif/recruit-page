import React, { useState, useEffect } from "react";
import playIcon from "../../../../assets/landingImages/play-btn.svg";
import {
  StyledHero,
  HeroHeading,
  HeroButton,
  HeroPlayIcon,
  HomePlayButtonContainer,
} from "./StyledHeader";
import SubBar from "../Navbar/SubBar";
import OffCanvas from "../Navbar/OffCanvas";
import Popup from "../Popup/Popup";
import VideoModal from "../VideoModal/VideoModal";
import HeroSlider from './HeroSlider'
const apiKey = "AIzaSyDZdA4DKTKNAm6ENnAQMnECsThGWUsUpWw";

const Header = ({ id, value }) => {
  const data = localStorage.getItem("ageGateActive");
  const locationFound = localStorage.getItem("saveCurentLocation");

  const getLocation = JSON.parse(locationFound);

  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [offNavValue, setOffNavValue] = React.useState(false);
  const [finalCountry, setfinalCountry] = useState("");
  const [finalState, setfinalState] = useState("");

  const handleClose = () => setShow(false);

  const getValue = (value) => {
    setOffNavValue(value);
  };

  useEffect(() => {
    if (getLocation) {
      const lat = getLocation.lat;
      const lng = getLocation.lng;
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
      )
        .then((response) => response.json())
        .then((result) => {
          const finalResult = result.results[0].formatted_address.split(",");
          setfinalCountry(finalResult.pop());
          setfinalState(finalResult.at(-1).split(" ").at(1));
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [getLocation]);

  return (
    <div  >
      <VideoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
        children={
          data !== "active" ? (
            <Popup
              setModalShow={setModalShow}
              country={finalCountry}
              state={finalState}
            />
          ) : (
            <iframe
              width="100%"
              height="550px"
              src="/Videos/hporx.mp4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )
        }
      />
      <StyledHero id={id}>
        <OffCanvas
          country={finalCountry}
          handleClose={handleClose}
          show={show}
          setShow={setShow}
          sendValue={getValue}
          value={value}
        />
        <SubBar setShow={setShow} />


        <HeroSlider />
        <div className="absolute bg-black opacity-[0.5] h-full m-auto border z-40 left-0 top-[1px] right-0 ">
        </div>
        <div className="hero-text-container max-w-[700px]  m-auto absolute z-40 left-0 -top-[40px] right-0 text-center">
          {/* <HomePlayButtonContainer onClick={() => setModalShow(true)}>
            <HeroPlayIcon src={playIcon} />
          </HomePlayButtonContainer> */}
          <HeroHeading>THERAPEUTICS</HeroHeading>
          <p className="home-main-header-sub-heading flex justify-center flex-col">
            <div className="border-t-2 border-red-500 max-w-[600px] m-auto">
              CULTIVATED WELLNESS
            </div>
          </p>
          <HeroButton>Appointment</HeroButton>

        </div>
      </StyledHero>
    </div>
  );
};

export default Header;
