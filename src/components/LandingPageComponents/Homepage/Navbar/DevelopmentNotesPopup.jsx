import React from 'react'
import { ImCross } from "react-icons/im";
import Modal from 'react-bootstrap/Modal';
const DevelopmentNotesPopup = (props) => {
    return (
        <Modal show={props.show} onHide={props.onClose} size="xl"  >
            <Modal.Header  >
                <Modal.Title>Development Notes</Modal.Title>
                <button onClick={props.onClose} className='btn float-left'><ImCross /></button>
            </Modal.Header>
            <Modal.Body style={{ height: "100%" }}>
                <div className='text-center flex align-items-center ' style={{ height: 400, display: "flex" }}>
                    <h2 className='w-100'>This is a public beta, we are working on improving UI and features.<br />
                        Do share your feedback</h2>
                </div>

            </Modal.Body>
        </Modal>
    )
}

export default DevelopmentNotesPopup