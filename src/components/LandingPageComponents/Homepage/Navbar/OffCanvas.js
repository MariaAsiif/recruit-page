
import React, { useContext, useEffect, useState } from "react";
// import { Offcanvas } from "react-bootstrap";
import LeftArrow from "../../../../assets/landingImages/right-slider-arrow.svg";
import searchIcon from "../../../../assets/landingImages/searchIcon.svg";
import person from "../../../../assets/landingImages/person.jpeg";
import "./offCanvas.css";
import { ViewMoreBtn } from '../../Globals/Globals'
import { VolumeContext } from "../Homepage";
// import { BsFillVolumeUpFill, BsFillVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";
import Quote from "../sidebarQuotes/Quote";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../../../Redux/RecruitAuthSlice/RecruitAuthSlice";
// import { BsQuestionLg } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { HOSTNAME } from "../../../../utils/CallApi";
import { MdEdit } from "react-icons/md";
// import Popup from "../Popup/Popup";
// import DevelopmentNotesPopup from "./DevelopmentNotesPopup";

const OffCanvas = ({ show, profile, setShow, value, state, children }) => {
    const data = new Date();
    // const [data, changeData] = useState();
    // const handleVolume = useContext(VolumeContext);
    const [volumeValue, setVolumeValue] = useState(false);
    const [devNotePopup, setdevNotePopup] = useState(false)

    const { token } = useSelector((state) => state.recruitAuth.loginInfo)
    const  user  = useSelector((state) => state.recruitAuth.userInfo)

    // console.log("USER", user )

    const dispatch = useDispatch()

    useEffect(() => {
        if (show === true) {
            if (typeof window != 'undefined' && window.document) {
                document.body.style.overflow = 'hidden';
            }

        }
        else {
            document.body.style.overflow = 'auto';

        }


    }, [show])



    const handleVolumes = (value) => {
        setVolumeValue(value);
    };


    const logout = () => {
        dispatch(signout())
    }

    return (
        <>
            <main
                className={
                    " fixed overflow-hidden overflow-y-hidden z-[9999] bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                    (show
                        ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                        : " transition-all delay-500 opacity-0 translate-x-full  ")
                }
            >
                <section
                    className={
                        " lg:w-[50%] w-screen overflow-y-hidden max-w-lg overflow-x-hidden right-0 fixed bg-white h-full  shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                        (show ? " translate-x-0 " : " translate-x-full ")
                    }
                >
                    {
                        !token ?
                            (

                                <article className="relative overflow-y-hidden w-screen max-w-lg pb-10 flex flex-col space-y-6  h-full">
                                    <header>
                                        <div className="offcanvas-main-header" >
                                            <div className="canvas-title-section">
                                                <img onClick={() => setShow(false)} src={LeftArrow} alt="LeftArrow" />

                                            </div>
                                            <div className="" >
                                                <h1 className="text-center text-[20px]">Please <Link to="/signin" className='hover:underline text-[#42946C] text-[20px] pl-1'>Login</Link> First</h1>
                                                {/* <div className="offcanvas-header-profile-image" >
                                                <img src={person} alt="img" />
                                            </div> */}
                                            </div>

                                        </div>
                                    </header>

                                </article>
                            )
                            :
                            <article className="relative overflow-y-hidden w-screen max-w-lg pb-10 flex flex-col space-y-6  h-full">
                                <header>
                                    <div className="offcanvas-main-header" >
                                        <div className="canvas-title-section">
                                            <img onClick={() => setShow(false)} src={LeftArrow} alt="LeftArrow" />
                                            <p>Alpha  v8.1.7.22 React Release Candidate</p>
                                        </div>

                                        <div className="offcanvas-header-profile " >
                                            <div className="offcanvas-header-profile-name" >
                                                <p>Salam</p>
                                                <h1>{user?.first_name}</h1>
                                            </div>
                                            <div className="offcanvas-header-profile-image " >
                                                <img src={ `https://hporxadminbackend.herokuapp.com${user?.profile_picture_url}` } alt="img" />

                                            </div>
                                            <div className=" absolute top-4 bg-green-500 cursor-pointer p-1 rounded-full z-50 right-0" onClick={() => { return profile(true), setShow(false) }}>
                                                <MdEdit className="text-white" />
                                            </div>
                                        </div>

                                    </div>
                                </header>
                                <div className="body-content-div">
                                    <ul className="list-unstyled pb-10 p-6 max-h-[500px] overflow-y-auto" id="user-pf-list">
                                        <li>
                                            <div className="flex justify-between">
                                                <div>
                                                    <h3 className="off_text">A to Z site Index</h3>
                                                </div>
                                                <div>
                                                    <img className="canvas-icon" src={searchIcon} alt="searchIcon" />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h3 className="off_text">Accessability</h3>
                                                </div>
                                                <div>
                                                    <div className="flex">
                                                        <div>
                                                            <input name="dis" className="radio-check-selector" type="radio" id="chair" />
                                                            <label className="radio-label" for="chair">
                                                                <div className="radio-selector">
                                                                    <img src="https://hporx.com/wp-content/themes/astra-child/assets/images/wheelchair.svg" alt="" />
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="ms-2">
                                                            <input name="dis" className="radio-check-selector" type="radio" id="eye" />
                                                            <label className="radio-label" for="eye">
                                                                <div className="radio-selector">
                                                                    <img src="https://hporx.com/wp-content/themes/astra-child/assets/images/eyes.svg" alt="" />
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="ms-2">
                                                            <input name="dis" className="radio-check-selector" type="radio" id="ear" />
                                                            <label className="radio-label" for="ear">
                                                                <div className="radio-selector">
                                                                    <img src="https://hporx.com/wp-content/themes/astra-child/assets/images/ear'.svg" alt="" />
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h3 className="off_text">Audio Mute</h3>
                                                </div>
                                                <div>
                                                    <div className="slider-div">
                                                        <div className="flex items-center justify-between pt-1">
                                                            <img src="https://hporx.com/wp-content/themes/astra-child/assets/images/sound.svg" alt="" />
                                                            {/* <div className="switcher">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" aria-checked={value} type="checkbox" role="switch"
                                                            onChange={(event) => handleVolume(!value)}
                                                            id="sound-witch" />
                                                        <label className="form-check-label" for="sound-witch">
                                                            <div className="slide-switcher"></div>
                                                        </label>
                                                    </div>
                                                </div> */}
                                                            <label
                                                                htmlFor="checked-toggle"
                                                                className="inline-flex relative items-center cursor-pointer"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    defaultValue=""
                                                                    id="checked-toggle"
                                                                    className="sr-only peer"
                                                                    defaultChecked=""
                                                                />
                                                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />

                                                            </label>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h3 className="off_text">Audio</h3>
                                                </div>
                                                <div>

                                                    <audio controls autoplay>
                                                        <source src="https://hporx.com/wp-content/themes/astra-child/assets/images/audio.mp3" type="audio/ogg" />
                                                        <source src="https://hporx.com/wp-content/themes/astra-child/assets/images/audio.mp3" type="audio/mpeg" />
                                                    </audio>



                                                    <div className="flex items-center" id="audio-controller">
                                                        <div>
                                                            <button className="btn">
                                                                <img src="./assets/images/back-fast.svg" alt="" />
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <button className="btn">
                                                                <img src="./assets/images/back-slow.svg" alt="" />
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <button className="btn">
                                                                <img src="./assets/images/pause.svg" alt="" />
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <button className="btn">
                                                                <img src="./assets/images/next-slow.svg" alt="" />
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <button className="btn">
                                                                <img src="./assets/images/next-farword.svg" alt="" />
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-fl justify-conween items-center">
                                                <div>
                                                    <h3 className="off_text">Country</h3>
                                                </div>
                                                <div className="ms-2">
                                                    <span>{user?.country}</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-fl justify-conween items-center">
                                                <div>
                                                    <h3 className="off_text">{user?.city}</h3>
                                                </div>
                                                <div className="ms-2">
                                                    <span>{user?.country}</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-fl justify-conween items-center">
                                                <div>
                                                    <h3 className="off_text">Local Time</h3>
                                                </div>
                                                <div className="d-flex items-center">
                                                    <div>
                                                        <img src="./assets/images/clock 2.svg" alt="" />
                                                    </div>
                                                    <div className="ms-2">
                                                        <span>{data.toDateString()}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-fl justify-conween items-center">
                                                <div>
                                                    <h3 className="off_text">Weather</h3>
                                                </div>
                                                <div>
                                                    <img src="./assets/images/wether.svg" alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex justify-between items-center">
                                                <div onClick={() => logout()}>
                                                    <h3 className="off_text">Sign out</h3>
                                                </div>
                                                <div>
                                                    <button className="btn btn-warning logout_btn text-sm p-1">Logout</button>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <ul className="list-unstyled" id="settings-ul">
                                                <li>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="logged-in" checked />
                                                        <label className="form-check-label off_text" for="logged-in">
                                                            Keep me signed in for 30 days
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="terms" checked />
                                                        <label className="form-check-label off_text" for="terms">
                                                            By signed in I agree to all the turns & conditions
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="age" checked />
                                                        <label className="form-check-label off_text" for="age">
                                                            I am 21 + year old
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>

                                            <div className="flex justify-center mt-2">
                                                {/* <button className="btn quotation-btn rounded-pill">Quotation</button> */}
                                                <ViewMoreBtn>
                                                    Appointment
                                                </ViewMoreBtn>
                                            </div>
                                        </li>
                                        <li>

                                            <div className="flex justify-center mt-2">
                                                <VolumeContext.Provider value={handleVolumes}>
                                                    <Quote value={volumeValue} />
                                                </VolumeContext.Provider>

                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex justify-end mt-2">
                                                <div role="button" onClick={() => setdevNotePopup(true)} className="canvas-title-section  " style={{ width: "auto" }}>
                                                    <p>Development Notes</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                    }

                </section>
                <section
                    className=" w-screen h-full cursor-pointer"
                    onClick={() => {
                        setShow(false);
                    }}
                ></section>
            </main>
        </>


    );
};

export default OffCanvas;
