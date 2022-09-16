import React from 'react'
import Logo from '../../images/logo.png'
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io'

const Terms = ({ toggle, prev }) => {
    return (
        <div className='bscontainer'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                    <div className='text-[10px] flex'>
                        Copyright © 2021
                        <span> <img src={Logo} className="w-9" alt="logo" /> </span> . All Rights Reserved. Accessibility, User Agreement, Privacy, Cookies, Do not sell my personal information.
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12 '>
                    <div className='text-[10px] flex'>
                        RELIEF FROM CHRONIC PAIN IS A HUMAN RIGHT UNDER THE UNITED NATION CHARTER RESPECTED BY ALL UN COUNTRIES
                        <span onClick={() => toggle(!prev)}>
                            {
                                prev === true ?

                                    <IoIosArrowDropup className='text-[27px] cursor-pointer' />
                                    :
                                    <IoIosArrowDropdown className='text-[27px] cursor-pointer' />
                            }
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Terms