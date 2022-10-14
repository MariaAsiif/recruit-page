import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import { Modal } from 'react-responsive-modal';
import ReactStars from "react-rating-stars-component";
import { StylePopup, StyleClose, StyleSuccess } from './StylePopup'
function Popup({ permission, toggle, }) {
  const [show, setShow] = useState("defaultModal");
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
      {/* <Modal open={permission} > */}
      <div id={show} tabindex="-1" aria-hidden="true" className="bg-black bg-opacity-25 overflow-y-auto overflow-x-hidden fixed flex justify-center top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative bg-white  shadow dark:bg-gray-700">
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Reviews
              </h3>
              <button type="button" onClick={handleClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900  text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div
                className="p-field"
                style={{ display: "flex", flexDirection: "column", justifyContent: 'center', fontSize: '20px' }}
              >
               <label for="message" className="block mb-2 text-red-500 text-sm font-medium dark:text-gray-400">Your Rating</label>
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

                  <label for="message" className="block mb-2 text-red-500 text-sm font-medium dark:text-gray-400">Your Review</label>
                  <textarea id="message" rows="4" className="block p-2.5 w-full text-sm bg-gray-50  border  focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>

                  {/* <label style={{ fontSize: '18px', marginBottom: '10px', color: 'red' }}>Review</label>
                  <textarea
                    style={{ fontSize: '16px' }}
                    name="short_desc "
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="form-control"
                    placeholder="Write Here ...">

                  </textarea> */}
                </div>

                <label for="message" className="block mb-2 mt-2 text-red-500 text-sm font-medium dark:text-gray-400">Image </label>
                <div className="flex justify-center w-full">
                  <div className=" shadow-xl bg-gray-50 w-full ">
                    <div className="m-4">
                      <div className="flex items-center justify-center  h-20 w-full">
                        <label className="flex flex-col w-full h-20 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                          <div className="flex flex-col items-center justify-center ">
                            <svg xmlns="http://www.w3.org/2000/svg"
                              className="w-12 h-12  group-hover:text-gray-600" viewBox="0 0 20 20"
                              fill="currentColor">
                              <path fill-rule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clip-rule="evenodd" />
                            </svg>
                            <p className="pt-1 text-sm tracking-wider  group-hover:text-gray-600">
                              Select a photo</p>
                          </div>
                          <input type="file" className="opacity-0" />
                        </label>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
              <button data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300  border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* </Modal> */}
    </StylePopup>
  );
}

export default Popup;
