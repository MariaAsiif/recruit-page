import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { FiFacebook } from 'react-icons/fi'
import { AiFillYoutube } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { FaSnapchatGhost  , FaTiktok} from 'react-icons/fa'
import { BsLinkedin , BsInstagram } from 'react-icons/bs'

let Icons = [
    {icons : <FiFacebook /> , link: "https://www.facebook.com"},
    {icons : <AiFillYoutube /> , link: "https://www.youtube.com"},
    {icons : <BsTwitter /> , link: "https://www.twitter.com"},
    {icons : <FaSnapchatGhost /> , link: "https://www.snapchat.com"},
    {icons : <BsLinkedin /> , link: "https://www.linkedin.com"},
    {icons : <BsInstagram /> , link: "https://www.instagram.com"},
    {icons : <FaTiktok /> , link: "https://www.tiktok.com"},
   
]

const FollowUs = () => {
    var settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        
    };
    return (



        <Slider {...settings} >
            {Icons.map((icon, index) => {
                const { icons , link } = icon
                return (
                    <span className='mx-2 icons ' key={index} >
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            {icons}
                        </a>
                    </span>
                )
            }
            )
            }
        </Slider>

    )
}

export default FollowUs

