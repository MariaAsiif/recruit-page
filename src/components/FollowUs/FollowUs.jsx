import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FiFacebook } from 'react-icons/fi'
import { AiFillYoutube } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { FaSnapchatGhost, FaTiktok } from 'react-icons/fa'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'

let Icons = [
    { icons: <FiFacebook />, link: "https://www.facebook.com", text: "Facebook" },
    { icons: <AiFillYoutube />, link: "https://www.youtube.com", text: "Youtube" },
    { icons: <BsTwitter />, link: "https://www.twitter.com", text: "Twitter" },
    { icons: <FaSnapchatGhost />, link: "https://www.snapchat.com", text: "Snapchat" },
    { icons: <BsLinkedin />, link: "https://www.linkedin.com", text: "Linkedin" },
    { icons: <BsInstagram />, link: "https://www.instagram.com", text: "Instagram" },
    { icons: <FaTiktok />, link: "https://www.tiktok.com", text: "Tiktok" },

]



var settings = {
    arrows: false,
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                dots: false,
                autoplay: true,

            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
};


const FollowUs = () => {
    return (
        <div className='bg-[#D9D9D9] h-full p-3'>
            <div className='bscontainer'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <h2 className='text-[30px] font-bold'>Follow Us</h2>
                        <div className='flex items-center mt-3'>
                            {/* <Slider {...settings} > */}
                             
                                {Icons.map((icon, index) => {
                                    const { icons, link, text } = icon
                                    return (
                                        <span className='lg:mx-2 sm:mx-1 md:mx-2 ' key={index} >
                                            <a href={link} target="_blank" rel="noopener noreferrer">
                                                <div className='border border-red-500 text-center flex justify-center ml-2 rounded-full pt-2 text-[22px] text-red-500 w-[40px] h-[40px]' > {icons}</div>
                                                <p className='text-[13px] sm:me-2 text-center text-red-500'>{text}</p>
                                            </a>
                                        </span>
                                    )
                                }
                                )
                                }
                            {/* </Slider> */}
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 '>
                        <h2 className='text-[30px] font-bold'>Hygieia Apothecary</h2>
                        <div className='flex items-center mt-3'>
                            {Icons.map((icon, index) => {
                                const { icons, link, text } = icon
                                return (
                                    <span className='mx-2' key={index} >
                                        <a href={link} target="_blank" rel="noopener noreferrer">
                                            <div className='border border-black text-center flex justify-center ml-2 rounded-full pt-2 text-[22px]  w-[40px] h-[40px]' > {icons}</div>
                                        </a>
                                    </span>
                                )
                            }
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowUs