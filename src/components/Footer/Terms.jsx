import React from 'react'
import { FiFacebook } from 'react-icons/fi'
import { AiFillYoutube } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { FaSnapchatGhost, FaTiktok } from 'react-icons/fa'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io'

let Icons = [
    { icons: <FiFacebook />, link: "https://www.facebook.com", text: "Facebook" },
    { icons: <AiFillYoutube />, link: "https://www.youtube.com", text: "Youtube" },
    { icons: <BsTwitter />, link: "https://www.twitter.com", text: "Twitter" },
    { icons: <FaSnapchatGhost />, link: "https://www.snapchat.com", text: "Snapchat" },
    { icons: <BsLinkedin />, link: "https://www.linkedin.com", text: "Linkedin" },
    { icons: <BsInstagram />, link: "https://www.instagram.com", text: "Instagram" },
    { icons: <FaTiktok />, link: "https://www.tiktok.com", text: "Tiktok" },

]


const Terms = ({ toggle, prev }) => {
    return (
        <div className={`terms text-white ${prev === false ? 'hover:bg-red-500 text-white cursor-pointer' :  'cursor-pointer hover:text-black'} `}>
            <footer className={` ${prev === false && 'hover:text-white bscontainer  d-flex  text-xs text-center font-normal py-3 footer'} bscontainer  d-flex text-black text-xs text-center font-normal py-3 footer `}>
                <div className='lg:flex items-center justify-center'>
                    <div className="text-[10px] pt-3">
                        COPYRIGHTS © 2022 HPORX LTD, IRELAND. ALL RIGHTS RESERVED.
                        <span className='footer_text '>
                            |  <span className='hover:underline cursor-pointer'>PRIVACY POLICY </span>
                            | <span className='hover:underline cursor-pointer' >+44 1223 298541 </span>
                            | <span className='hover:underline cursor-pointer' > TERMS OF USE </span>
                            | <span className='hover:underline cursor-pointer' > DIGITAL AGENCY SERVICES </span>
                            | <span className='hover:underline cursor-pointer' >SITE DIRECTORY </span>
                        </span>
                    </div>
                    <div className='text-white'>
                        <div className='flex items-center justify-center mt-2'>
                            {Icons.map((icon, index) => {
                                const { icons, link, } = icon
                                return (

                                    <span className='lg:mx-2 sm:mx-1  md:mx-2 icons' key={index}  >
                                        <a href={link} target="_blank" className='flex flex-col items-center' rel="noopener noreferrer">
                                            <div className={`${!prev ? 'hover:border-white text-black  border border-black  text-center flex justify-center   rounded-full pt-1 text-[18px]  w-[28px] h-[28px]': 'border  border-black text-center text-black flex justify-center   rounded-full pt-1 text-[18px]  w-[28px] h-[28px]'}`}> {icons}</div>
                                        </a>
                                    </span>


                                )
                            }
                            )
                            }

                            <span onClick={() => toggle(!prev)}>
                                {
                                    prev === true ?

                                        <IoIosArrowDropup className='text-black text-[35px] cursor-pointer' />
                                        :
                                        <IoIosArrowDropdown className={"text-[35px] cursor-pointer"} />
                                }
                            </span>
                        </div>
                    </div>
                </div>


            </footer>
        </div>
    )
}

export default Terms