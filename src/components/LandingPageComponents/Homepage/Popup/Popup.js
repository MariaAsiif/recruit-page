import React, { useState  } from "react";
import { StylePopup } from "./StylePopup";
import Logo1 from "../../../../assets/landingImages/Logo1.svg";
import { Row, Col, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";

function Popup(props) {
  const [dob, setDob] = useState("");
  const [msg, setMsg] = useState("");
  const [cookies, setCookie] = useCookies(["access_token"]);
  
  



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
        localStorage.setItem('ageGateActive' , 'active')
        props.setModalShow(false)
        // setCookie("access_token", dob, { path: "/", expires });
        // setMsg("Congratulation You can accces this website" , 'one');
      } else {
        setMsg("Sorry you cannot acces this website.");
      }
    } else {
      if (age >= 18) {
        localStorage.setItem('ageGateActive' , 'active')
        props.setModalShow(false)
        // setMsg("Congratulation You can accces this website");
      } else {
        console.log("two birthdaty");
        setMsg("Sorry you cannot acces this website.");
      }
    }
  }

  return (
    <StylePopup>
      <div className="logo">
        <img src={Logo1} alt="Logo" />
      </div>
      {/* <Button
        onClick={() => props.setModalShow(false)}
        className="btn-close"
      ></Button> */}
      <Row className="row align-items-center">
        <Col lg={6} xs={12} className="borders text-center">
          <div className="local-prize-container">
            <h5 className="win-text">Win</h5>
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
        <Col lg={6} xs={12}>
          <div className="dateofbirth mb-5 text-center">
            Please Select your Date of birth
          </div>
          <form onSubmit={(e) => submitform(e)}>
            <div class="form-group">
              <label for="country" className="mb-2 fw-5 labels">
                Your Country <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                class="form-control  inputs"
                id="country"
                name="country"
                value={props.country}
               />
            </div>
            <div class="form-group">
              <label for="country" className="mb-2 fw-5 labels">
                Your State <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                class="form-control  inputs"
                id="country"
                name="state"
                value={props.state}
              />
            </div>
            <div class="form-group">
              <label for="Dob" className="mb-2 fw-5 labels">
                DOB <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                class="form-control  inputs"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                name="dob"
                id="Dob"
                placeholder="dd/mm/year"
                required
              />
            </div>
            <div className="msg">{msg}</div>
            <Button
                type="submit"
                className="btns d-grid col-2 mx-auto btn-lg clo-3"
              >
                Confirm
              </Button>
          </form>
        </Col>
      </Row>
    </StylePopup>
  );
}

export default Popup;
