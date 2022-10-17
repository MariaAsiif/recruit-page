import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide, } from 'swiper/react';
// import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
// import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/navigation/navigation.min.css";
import StyleDesignShowcase, { StyleDesignInner, StyleData } from './StyleDesignShowcase';
// import './StyleDesignShowcase.css'
// import SwiperCore, { EffectCoverflow, Pagination, Navigation, Keyboard, Mousewheel, Autoplay } from 'swiper/core';
import axios from "axios";
// </>
import { FaQuoteLeft , FaQuoteRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination , Autoplay } from "swiper";


// import banner1 from '../../../assets/banner1.jpg';
// import banner2 from '../../../assets/banner2.jpg';
// import banner3 from '../../../assets/banner3.jpg';
// import banner4 from '../../../assets/banner4.jpg';
// import banner5 from '../../../assets/banner5.jpg';
// import banner6 from '../../../assets/banner6.jpg';
// import banner2 from '../../../img/banner2.jpg';
// import banner7 from '../../../img/banner7.jpg';
// import banner4 from '../../../img/banner4.jpg';
// import banner5 from '../../../img/banner5.jpg';
// import banner6 from '../../../img/banner6.jpg';
// import banner8 from '../../../img/banner8.jpg';
// import banner9 from '../../../img/banner9.jpg';
// import banner10 from '../../../img/banner10.jpg';
// import banner11 from '../../../img/banner11.jpg';

// SwiperCore.use([EffectCoverflow, Pagination, Navigation, Keyboard, Mousewheel, Autoplay]);

let inspiration = [
    { text: 'Love is composed of a single soul inhabiting two bodies', date: "05/2020", writer: "Aristotle" },
    { text: 'Start by doing whats necessary; then do whats possible; and suddenly you are doing the impossible.', date: "05/2020", writer: "Francis of Assisi" },
    { text: 'If you have men who will exclude any of Gods creatures from the shelter of compassion and pity, you will have men who will deal likewise with their fellow men.', date: "05/2020", writer: "Francis of Assisi" },
    { text: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", date: "05/2020", writer: "Jimmy Dean" },
    { text: 'Keep your face always toward the sunshine - and shadows will fall behind you.', date: "05/2020", writer: "Walt Whitman" },
    { text: "You don't do things right once in a while. You do things right all the time.", date: "05/2020", writer: "Vince Lombardi" },
    { text: 'Early to bed and early to rise makes a man healthy, wealthy and wise.', date: "05/2020", writer: "Benjamin Franklin" },
    { text: 'Healing is a matter of time, but it is sometimes also a matter of opportunity.', date: "05/2020", writer: "Hippocrates" },
    { text: 'He who has health, has hope; and he who has hope, has everything.', date: "05/2020", writer: "Thomas Carlyle" },
    { text: 'We must accept finite disappointment, but never lose infinite hope.', date: "05/2020", writer: "Martin Luther King, Jr." }
]



function DesignShowcase() {

    const [allinspire, setallInspires] = useState([])



    useEffect(() => {
        (async () => {
            try {
                const payload = {
                    sortproperty: "created_at",
                    sortorder: -1,
                    offset: 0,
                    limit: 50,
                    query: {
                        critarion: { active: true, "quoteColor": "Red" },
                        addedby: "_id email first_name",
                        lastModifiedBy: "_id email first_name"
                    }
                }
                    const response = await axios.post("https://hporxadminbackend.herokuapp.com/quotes/getQuotesWithFullDetails", payload
                  
                    )
                    console.log("res", response)
                    setallInspires(response.data.data.quotes)
    } catch (error) {
        console.log(error);
    }
}) ();

    }, [])


return (
    <StyleDesignShowcase>
        <h3 className="text-[#42946C]" >Inspire</h3>
        <StyleDesignInner>
            <div className="bscontainer-fluid ">
                <Swiper navigation={false}
                    effect={"coverflow"}
                    direction={"vertical"}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    speed={2500}

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                        startOnLoad: true,
                        reverseDirection: true
                    }}

                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 6,
                        slideShadows: false
                    }}
                    mousewheel={true}
                    keyboard={true}
                    pagination={false}
                    modules={[EffectCoverflow , Autoplay ]}
                    slideToClickedSlide={true}
                    className="mySwiper"
                >
                    {allinspire.map((item, index) => (
                        <SwiperSlide key={index} >
                            
                            <StyleData>
                               <div className="border-b w-full h-[40px] bg-[#C8E0D3]"></div>
                                <p>{item.authorName}</p>
                                <small>{"CEO SpaceX"}</small>

                                <h4 className="flex justify-between">
                                    <FaQuoteLeft className="text-gray-300"/>
                                    {item.quoteText}
                                    <FaQuoteRight className="mt-4 text-gray-300"/>

                                    </h4>
                                <span>{"08-26-2022"}</span>
                            </StyleData>


                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </StyleDesignInner>

    </StyleDesignShowcase >);
}

export default DesignShowcase;