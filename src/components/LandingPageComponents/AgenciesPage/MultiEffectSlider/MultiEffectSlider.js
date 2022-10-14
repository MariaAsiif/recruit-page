import React from "react";
import "./MultiEffectSlider.css";
import modalImg from "../../../../assets/landingImages/model-img.png";
import modalImg1 from "../../../../assets/landingImages/model-img1.png";
import modalImg2 from "../../../../assets/landingImages/model-img2.png";

import modelMini1 from "../../../../assets/landingImages/modalMini1.jpg";
import modelMini2 from "../../../../assets/landingImages/modalMini2.jpg";
import modelMini3 from "../../../../assets/landingImages/modalMini3.jpg";
import modelMini4 from "../../../../assets/landingImages/modalMini4.jpg";
import modelMini5 from "../../../../assets/landingImages/left-side.jpg";
import modelMini6 from "../../../../assets/landingImages/right-side.jpg";


import bgmain from "../../../../assets/landingImages/Model-bg.png";

import { Modal, Button } from "react-bootstrap";
import BeforeAfterSlider from "../AgenciesShowCase/BeforeAfterSlider";

function MyVerticallyCenteredModal(props) {
  console.log(props.name, "name is ")
  return (
    <div className="pop-before-model">
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div class="modal-body">
          <button onClick={props.onHide} type="button" class="beforeAfterModalButton" ></button>

          <img class="main-img" src={bgmain} alt="background-img" />
          <div class="outer-div">
            <div class="beforeAfter">
              <BeforeAfterSlider imagesData={props.imagesData} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

const MultiEffectSlider = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [imagesData, setimagesData] = React.useState('')
  const multiImgs = [
    {
      laptop: modalImg1,
      img1: modelMini1, img2: modelMini3
    },
    {
      laptop: modalImg2,
      img1: modelMini2, img2: modelMini4
    },
    {
      laptop: modalImg,
      img1: modelMini5, img2: modelMini6
    },
    {
      laptop: modalImg,
      img1: modelMini5, img2: modelMini6
    },
    {
      laptop: modalImg1,
      img1: modelMini1, img2: modelMini3
    },
    {
      laptop: modalImg2,
      img1: modelMini2, img2: modelMini4
    },

  ]

  const modalHandler = (data) => {
    setModalShow(true)
    setimagesData(data)
  }
  return (
    <div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        name='Hello'
        imagesData={imagesData}
      />
      <div className="mt-11-8">
        <div class="model-before-afters">
          <div class="container">
            <div class="row">
              {
                multiImgs.map((data, index) => (
                  <div key={index} class="col-lg-4 col-md-6 mod-img">
                    <a onClick={() => modalHandler(data)}>
                      <img src={data.laptop} alt="modalImg" />
                    </a>
                  </div>
                ))
              }
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiEffectSlider;
