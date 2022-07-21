import React from 'react'
// import { Dropdown, InputGroup, DropdownButton, Form } from 'react-bootstrap'
import '../assests/header.css'
import Forms from './forms'
const Header = () => {
    return (
        <>
            <div className='header_wrapper'>
                <div className="overlay">
                    <div className="header_box container" >
                        <div className="row ">
                            <div className="col-md-2 col-sm-2 col-2">
                                <div className="header_logo">
                                    <img src="/assets/Images/Logo-leaf.png" alt="logo" />
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-8 col-8">
                                <div className="header_text">
                                    <h1>Recruit</h1>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2 col-2">
                                <div className="langauge_logo">
                                    <img src="/assets/Images/united-states.png" alt="lagauage" />
                                    <span>English</span>
                                </div>

                            </div>
                        </div>

                        <div className="form_section_wrapper">
                            <Forms />
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Header