import React from 'react';
import {Button , Modal} from 'react-bootstrap';
import Popup from '../Popup/Popup';
import './modal.css'
import VideoModal from './VideoModal';


const HomeModal = (props) => {
  return (
    <Modal  
    className='homeModalageGater'
    {...props}
    size="xl"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >

    {/* {props.children} */}

      <Popup country={props.country} state={props.state} setModalShow={props.setModalShow}/>
  </Modal>  
  )
}

export default HomeModal