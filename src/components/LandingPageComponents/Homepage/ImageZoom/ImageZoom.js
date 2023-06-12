import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { ImCross } from 'react-icons/im';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom'
const ImageZoom = ({ data, permission, toggle }) => {


    const Close = () => {
        toggle(false)
    }


    return (
        <div>
            <Modal show={permission} size="xl">
                <Modal.Header  >
                    <Modal.Title>Add Service</Modal.Title>
                    <button onClick={() => Close()} className='btn float-left'><ImCross /></button>
                </Modal.Header>
                <Modal.Body style={{ height: "100%" }}>
                    <InnerImageZoom  src={'https://t3.ftcdn.net/jpg/01/13/89/04/360_F_113890424_RStf0yEkxzCid8Kf1HMIvKAIku1fgP3y.webp'}  />
                    {/* <img src={data} width="100%" height="100%" alt="image_zomm" /> */}
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ImageZoom