import React from 'react'
import Logo from '../../images/logo.png'
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io'

const Terms = ({ toggle, prev }) => {
    return (
        <div className='bscontainer'>
            <div className='lg:flex justify-between'>
                <div className='pt-[6px]'>
                    <div className='flex text-[9px]'>
                        Copyright © 2021
                        <span> <img src={Logo} className="w-9" alt="logo" /> </span> . All Rights Reserved. Accessibility, User Agreement, Privacy, Cookies, Do not sell my personal information.
                    </div>
                </div>
                <div >
                    <div className='text-[9px] flex items-center'>
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