import React, { useContext, useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import LeftArrow from "../../../../assets/landingImages/right-slider-arrow.svg";
import searchIcon from "../../../../assets/landingImages/searchIcon.svg";
import person from "../../../../assets/landingImages/person.jpeg";
import "./offCanvas.css";
import { ViewMoreBtn } from '../../Globals/Globals'
import { VolumeContext } from "../Homepage";
import { BsFillVolumeUpFill, BsFillVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";
import Quote from "../sidebarQuotes/Quote";
import DevelopmentNotesPopup from "./DevelopmentNotesPopup";

const OffCanvas = ({ show, handleClose, setShow, value, country, state }) => {
    const data = new Date();
    //    const [data,changeData]=useState();
    const handleVolume = useContext(VolumeContext);
    const [volumeValue, setVolumeValue] = useState(false);
    const [devNotePopup, setdevNotePopup] = useState(false)



    const handleVolumes = (value) => {
        setVolumeValue(value);
    };
    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header>
                <div className="offcanvas-main-header" >
                    <div className="canvas-title-section">
                        <img onClick={() => setShow(false)} src={LeftArrow} alt="LeftArrow" />
                        <p>Alpha  v8.1.7.22 React Release Candidate</p>
                    </div>
                    <div className="offcanvas-header-profile" >
                        <div className="offcanvas-header-profile-name" >
                            <p>Salam</p>
                            <h1>Johen Marks</h1>
                        </div>
                        <div className="offcanvas-header-profile-image" >
                            <img src={person} alt="img" />
                        </div>
                    </div>
                </div>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {
                    devNotePopup ? <DevelopmentNotesPopup show={devNotePopup} onClose={() => setdevNotePopup(false)} /> : null
                }
                <div className="offCanvas-body-section">
                    <div class="body-content-div">
                        <ul class="list-unstyled" id="user-pf-list">
                            <li>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <h3 class="off_text">A to Z site Index</h3>
                                    </div>
                                    <div>
                                        <img className="canvas-icon" src={searchIcon} alt="searchIcon" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h3 class="off_text">Accessability</h3>
                                    </div>
                                    <div>
                                        <div class="d-flex">
                                            <div>
                                                <input name="dis" class="radio-check-selector" type="radio" id="chair" />
                                                <label class="radio-label" for="chair">
                                                    <div class="radio-selector">
                                                        <img src="https://hporx.com/wp-content/themes/astra-child/assets/images/wheelchair.svg" alt="" />
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="ms-2">
                                                <input name="dis" class="radio-check-selector" type="radio" id="eye" />
                                                <label class="radio-label" for="eye">
                                                    <div class="radio-selector">
                                                        <img src="https://hporx.com/wp-content/themes/astra-child/assets/images/eyes.svg" alt="" />
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="ms-2">
                                                <input name="dis" class="radio-check-selector" type="radio" id="ear" />
                                                <label class="radio-label" for="ear">
                                                    <div class="radio-selector">
                                                        <img src="https://hporx.com/wp-content/themes/astra-child/assets/images/ear'.svg" alt="" />
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h3 class="off_text">Audio Mute</h3>
                                    </div>
                                    <div>
                                        <div class="slider-div">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <img src="https://hporx.com/wp-content/themes/astra-child/assets/images/sound.svg" alt="" />
                                                <div class="switcher">
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" aria-checked={value} type="checkbox" role="switch"
                                                            onChange={(event) => handleVolume(!value)}
                                                            id="sound-witch" />
                                                        <label class="form-check-label" for="sound-witch">
                                                            <div class="slide-switcher"></div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h3 class="off_text">Audio</h3>
                                    </div>
                                    <div>

                                        <audio controls autoplay>
                                            <source src="https://hporx.com/wp-content/themes/astra-child/assets/images/audio.mp3" type="audio/ogg" />
                                            <source src="https://hporx.com/wp-content/themes/astra-child/assets/images/audio.mp3" type="audio/mpeg" />
                                        </audio>



                                        {/* <div class="d-flex align-items-center" id="audio-controller">
                                    <div>
                                        <button class="btn">
                                            <img src="./assets/images/back-fast.svg" alt=""/>
                                        </button>
                                    </div>
                                    <div>
                                        <button class="btn">
                                            <img src="./assets/images/back-slow.svg" alt=""/>
                                        </button>
                                    </div>
                                    <div>
                                        <button class="btn">
                                            <img src="./assets/images/pause.svg" alt=""/>
                                        </button>
                                    </div>
                                    <div>
                                        <button class="btn">
                                            <img src="./assets/images/next-slow.svg" alt=""/>
                                        </button>
                                    </div>
                                    <div>
                                        <button class="btn">
                                            <img src="./assets/images/next-farword.svg" alt=""/>
                                        </button>
                                    </div>
                                </div> */}

                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h3 class="off_text">Country</h3>
                                    </div>
                                    <div class="ms-2">
                                        <span>{country}</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h3 class="off_text">City</h3>
                                    </div>
                                    <div class="ms-2">
                                        <span>{country}</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h3 class="off_text">Local Time</h3>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div>
                                            <img src="./assets/images/clock 2.svg" alt="" />
                                        </div>
                                        <div class="ms-2">
                                            <span>{data.toDateString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h3 class="off_text">Weather</h3>
                                    </div>
                                    <div>
                                        <img src="./assets/images/wether.svg" alt="" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h3 class="off_text">Sign out</h3>
                                    </div>
                                    <div>
                                        <button class="btn btn-warning logout_btn">Logout</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <ul class="list-unstyled" id="settings-ul">
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="logged-in" checked />
                                            <label class="form-check-label off_text" for="logged-in">
                                                Keep me signed in for 30 days
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="terms" checked />
                                            <label class="form-check-label off_text" for="terms">
                                                By signed in I agree to all the turns & conditions
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="age" checked />
                                            <label class="form-check-label off_text" for="age">
                                                I am 21 + year old
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>

                                <div class="d-flex justify-content-center mt-2">
                                    {/* <button class="btn quotation-btn rounded-pill">Quotation</button> */}
                                    <ViewMoreBtn>
                                        Appointment
                                    </ViewMoreBtn>
                                </div>
                            </li>
                            <li>

                                <div class="d-flex justify-content-center mt-2">
                                    <VolumeContext.Provider value={handleVolumes}>
                                        <Quote value={volumeValue} />
                                    </VolumeContext.Provider>

                                </div>
                            </li>
                            <li>
                                <div class="d-flex justify-content-end mt-2">
                                    <div role="button" onClick={() => setdevNotePopup(true)} className="canvas-title-section  " style={{ width: "auto" }}>
                                        <p>Development Notes</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default OffCanvas;
