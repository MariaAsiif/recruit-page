import React from "react";
import { Modal, Button } from "react-bootstrap";
import ModalChildren from "./ModalChildren";
import { StylePopup , VideoModalContainer } from "./VideoModalStyle";

const VideoModal = (props) => {
  return (
    <VideoModalContainer>
      <Modal
        className="videoModalContainer"
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <StylePopup>
          <Button
            onClick={() => props.setModalShow(false)}
            className="btn-close"
          ></Button>
          {props.children}
        </StylePopup>
      </Modal>
    </VideoModalContainer>
  );
};

export default VideoModal;
