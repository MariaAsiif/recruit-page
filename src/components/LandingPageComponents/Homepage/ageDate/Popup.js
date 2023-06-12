import React, { useState, useEffect } from "react";
import { StylePopup } from "./StylePopup";
import Logo1 from "../../../../assets/landingImages/Logo1.svg";
import { Row, Col, Button, Modal } from "react-bootstrap";
import { useCookies } from "react-cookie";
import CountryState from "./CountryState";
import Email from "./Email";
import EmailVerify from "./EmailVerify";
import PhoneVerify from "./PhoneVerify";
function Popup(props) {
  const [dob, setDob] = useState("");
  const [msg, setMsg] = useState("");
  const [cookies, setCookie] = useCookies(["access_token"]);

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [activeIndex, setActiveIndex] = useState(0)


  const handleIndex = () => {

    let index = activeIndex + 1
    setActiveIndex(index)

  }

  function submitform(e) {
    e.preventDefault();
    var today = new Date();
    var birthDate = new Date(dob);


    // expires.setTime(expires.getTime() + 60000);


    // console.log(expires.setTime(), "set");
    // console.log(expires.getTime(), "get");


    let d = new Date();
    d.setTime(d.getTime() + 30);








    // setCookie("access_token", dob, { path: "/", expires : d });





    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      if (age >= 18) {
        localStorage.setItem('ageGateActive', 'active')
        props.setModalShow(false)
        // setCookie("access_token", dob, { path: "/", expires });
        // setMsg("Congratulation You can accces this website" , 'one');
      } else {
        setMsg("Sorry you cannot acces this website.");
      }
    } else {
      if (age >= 18) {
        localStorage.setItem('ageGateActive', 'active')
        props.setModalShow(false)
        // setMsg("Congratulation You can accces this website");
      } else {
        setMsg("Sorry you cannot acces this website.");
      }
    }
  }


  return (
    <Modal show={show} onHide={handleClose} size="xl" >
      <Modal.Body>
        <StylePopup>



          <Row >
            <Col lg={6} xs={12} md={12} className="borders text-center ">
              <div className="logo">
                <img src={Logo1} alt="Logo" />
              </div>
              <div className="local-prize-container">
                <h5 className="win-text text-left">Win</h5>
                <h2 className="price-style">
                  1000 <span className="dollar-sign">$</span>
                </h2>
                <p className="win-text mt-4 mb-5">Get Card or Cash prize</p>
                <p className="paragraph text-white">
                  You have opportunity to do is submit a short 15-30
                  secondtestimonials video on how cannbis has
                  <br />
                  helped you{" "}
                </p>
                <Button className="btn choose-file">Choose file</Button>
              </div>
            </Col>
            <Col lg={6} xs={12} md={12} >

              <div className='fom-wrapper ' style={{paddingTop:'1rem'}}>

                <div className={activeIndex === 0 && "circle"}>
                  <div className={activeIndex === 0 ? "inner_circle" : "inners_circle"}></div>
                </div>

                <div className='line' ></div>
                <div className={activeIndex === 1 && "circle"}>
                  <div className={activeIndex === 1 ? "inner_circle" : "inners_circle"}></div>
                </div>
                <div className='line' ></div>
                <div className={activeIndex === 2 && "circle"}>
                  <div className={activeIndex === 2 ? "inner_circle" : "inners_circle"}></div>
                </div>
                <div className='line' ></div>
                <div className={activeIndex === 3 && "circle"}>
                  <div className={activeIndex === 3 ? "inner_circle" : "inners_circle"}></div>
                </div>


              </div>
              <div style={{paddingTop:'10rem'}}>

                {activeIndex === 0 && <CountryState handleNext={handleIndex} />}
                {activeIndex === 1 && <Email handleNext={handleIndex} />}
                {activeIndex === 2 && <EmailVerify handleNext={handleIndex} />}
                {activeIndex === 3 && <PhoneVerify handleClose={handleClose} handleNext={handleIndex} />}
              </div>
            </Col>
          </Row>
        </StylePopup>


      </Modal.Body>


    </Modal>
  );
}

export default Popup;
