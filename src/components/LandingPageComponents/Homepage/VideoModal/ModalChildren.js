import React from "react";
import { StylePopup } from "./VideoModalStyle";
import {Button} from 'react-bootstrap'

const ModalChildren = (props) => {
  return (
    <StylePopup>
      <Button
        onClick={() => props.setModalShow(false)}
        className="btn-close"
      ></Button>
        {props.children}
    </StylePopup>
  );
};

export default ModalChildren;
