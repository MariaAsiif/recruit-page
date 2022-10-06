import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactStars from "react-rating-stars-component";
import { StylePopup, StyleClose, StyleSuccess } from './StylePopup'
function Popup({ permission, toggle, }) {
  const [show, setShow] = useState(permission);
  const [desc, setDesc] = useState('')
  const [state, setState] = useState(0)

  const handleClose = () => {
    toggle(false)
  };
  // const handleShow = () => setShow(true);


  const ratingChanged = (newRating) => {
    setState(newRating)
  };



  return (
    <StylePopup>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: '2rem', fontWeight: 'bold' }}>Reviews</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="p-field"
            style={{ display: "flex", flexDirection: "column", justifyContent: 'center', fontSize: '20px' }}
          >
            <label style={{ fontSize: '18px', color: 'red' }}>Rating</label>
            <div style={{ paddingLeft: '10rem' }}>

              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={50}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#d0565c"
              />
            </div>
            <div className="w-100">
              <label style={{ fontSize: '18px', marginBottom: '10px', color: 'red' }}>Review</label>
              <textarea
                style={{ fontSize: '16px' }}
                name="short_desc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="form-control"
                placeholder="Write Here ...">

              </textarea>
            </div>
            <div className="w-100">
              <label style={{ fontSize: '18px', marginTop: '10px', marginBottom: '10px', color: 'red' }}>Image</label>
              <input type="file" style={{ fontSize: '1.5rem' }} className="form-control" />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <StyleClose className="close" variant="info" onClick={handleClose}>
            Close
          </StyleClose>
          <StyleSuccess className="save" variant="primary" onClick={handleClose}>
            Save
          </StyleSuccess>
        </Modal.Footer>
      </Modal>
    </StylePopup>
  );
}

export default Popup;
