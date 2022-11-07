import React from "react";

import { FiFacebook } from "react-icons/fi";
// import { AiFillYoutube } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
// import { FaSnapchatGhost, FaTiktok } from "react-icons/fa";
// import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay, Navigation } from "swiper";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

// let Icons = [
//     { icons: <FiFacebook />, link: "https://www.facebook.com", text: "Facebook" },
//     { icons: <AiFillYoutube />, link: "https://www.youtube.com", text: "Youtube" },
//     { icons: <BsTwitter />, link: "https://www.twitter.com", text: "Twitter" },
//     { icons: <FaSnapchatGhost />, link: "https://www.snapchat.com", text: "Snapchat" },
//     { icons: <BsLinkedin />, link: "https://www.linkedin.com", text: "Linkedin" },
//     { icons: <BsInstagram />, link: "https://www.instagram.com", text: "Instagram" },
//     { icons: <FaTiktok />, link: "https://www.tiktok.com", text: "Tiktok" },

// ]

const FollowUs = () => {
  return (
    <div className="bg-[#D9D9D9] h-full p-3">
      <div className="bscontainer">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h2 className="text-[30px] font-bold">Follow Us</h2>
            <div className="flex items-center mt-3">
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <span className="lg:mx-2 sm:mx-1 md:mx-2 ">
                    <FacebookShareButton url={"https://hporx.eu/"}>
                      <div className="border border-red-500 text-center flex justify-center   rounded-full pt-2 text-[22px] text-red-500 w-[40px] h-[40px]">
                        <FiFacebook />
                      </div>
                      <p className="text-[14px] text-left  text-red-500">
                        Facebook
                      </p>
                    </FacebookShareButton>
                  </span>
                </SwiperSlide>

                <SwiperSlide>
                  <span className="lg:mx-2 sm:mx-1 md:mx-2 ">
                    <LinkedinShareButton url={"https://hporx.eu/"}>
                      <div className="border border-red-500 text-center flex justify-center   rounded-full pt-2 text-[22px] text-red-500 w-[40px] h-[40px]">
                        <BsLinkedin />
                      </div>
                      <p className="text-[14px] text-left  text-red-500">
                        Linkedin
                      </p>
                    </LinkedinShareButton>
                  </span>
                </SwiperSlide>
                <SwiperSlide>
                  <span className="lg:mx-2 sm:mx-1 md:mx-2 ">
                    <TwitterShareButton url={"https://hporx.eu/"}>
                      <div className="border border-red-500 text-center flex justify-center   rounded-full pt-2 text-[22px] text-red-500 w-[40px] h-[40px]">
                        <BsTwitter />
                      </div>
                      <p className="text-[14px] text-left  text-red-500">
                        Twitter
                      </p>
                    </TwitterShareButton>
                  </span>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <h2 className="text-[30px] font-bold">Hygieia Apothecary</h2>
            <div className="flex items-center mt-3">
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
              >
                {/* {Icons.map((icon, index) => {
                                    const { icons, link } = icon
                                    return ( */}
                <SwiperSlide>
                  <span className="mx-2">
                    <FacebookShareButton url={"https://hporx.eu/"}>
                      <div className="border border-black text-center flex justify-center ml-2 rounded-full pt-2 text-[22px]  w-[40px] h-[40px]">
                        <BsLinkedin />
                      </div>
                    </FacebookShareButton>
                  </span>
                </SwiperSlide>
                <SwiperSlide>
                  <span className="mx-2">
                    <LinkedinShareButton url={"https://hporx.eu/"}>
                      <div className="border border-black text-center flex justify-center ml-2 rounded-full pt-2 text-[22px]  w-[40px] h-[40px]">
                        <FiFacebook />
                      </div>
                    </LinkedinShareButton>
                  </span>
                </SwiperSlide>
                <SwiperSlide>
                  <span className="mx-2">
                    <TwitterShareButton url={"https://hporx.eu/"}>
                      <div className="border border-black text-center flex justify-center ml-2 rounded-full pt-2 text-[22px]  w-[40px] h-[40px]">
                        <BsLinkedin />
                      </div>
                    </TwitterShareButton>
                  </span>
                </SwiperSlide>
                {/* )
                                }
                                )
                                } */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
