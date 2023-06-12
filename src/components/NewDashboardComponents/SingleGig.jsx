import React from 'react'
import { BiHeart } from 'react-icons/bi';
import { FaChevronDown, FaShareAlt } from 'react-icons/fa';
import { GoCheck, GoThreeBars } from 'react-icons/go';
import { RiFlagFill } from 'react-icons/ri';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineClockCircle, AiOutlineReload } from 'react-icons/ai';
const SingleGig = () => {
    const services = ["Graphics & Design", "Digital Marketing", "Translation", "Video & Animation", "Music & Audio", "Programming & Tech", "Business", "Lifestyle", "Trending"]

    const settings = {
        customPaging: function (i) {
            return (
                <div className='w-full h-16 bg-center bg-no-repeat bg-cover ' style={{ backgroundImage: "url('https://placekitten.com/g/1080/700')" }}></div>
            );
        },
        dotsClass: "gig_dots",

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };

    return (
        <div style={{ boxShadow: "0px 3px 6px #0000000D" }} className='mb-5 bg-white rounded-2xl'>
            <div className='flex items-center gap-4 px-5 pt-5 pb-3 overflow-x-auto border-b-2 scroll '>
                {services.map((service) => {
                    return (
                        <div key={service} className='text-[#92929D] flex-none font-medium cursor-pointer'>{service}</div>
                    )
                })}
            </div>

            <div className='border-b-2 row g-0'>
                <div className='col-lg-8'>
                    <div className='flex items-center gap-4 px-5 pt-5 pb-3 overflow-x-auto scroll '>
                        {services.map((service) => {
                            return (
                                <div key={service} className='text-[#92929D] flex-none font-medium cursor-pointer'>{service}</div>
                            )
                        })}
                    </div>
                </div>
                <div className='flex items-center justify-center gap-2 px-3 lg:justify-end col-lg-4'>
                    <GoThreeBars size={33} className='border-2 border-[#cac8c8] text-[#cac8c8] p-1 rounded' />
                    <BiHeart size={33} className='border-2 border-[#cac8c8] text-[#cac8c8] p-1 rounded' />
                    <RiFlagFill size={33} className='border-2 border-[#cac8c8] text-[#cac8c8] p-1 rounded' />
                    <FaShareAlt size={33} className='border-2 border-[#cac8c8] text-[#4DA676] p-1 rounded' />
                </div>

            </div>
            <div className='p-5'>
                <div className='row g-0'>
                    <div className='lg:pl-8 lg:pr-20 col-lg-7'>
                        <h1 className='text-2xl font-bold text-[#626973] font-sans mb-4'>I will develop your business profile</h1>
                        <div className='mb-5 border-4 rounded-md'>
                            <Slider {...settings}>
                                {Array(5).fill("").map(() => {
                                    return (
                                        <div >
                                            <div className={` gigwrapper  bg-red-500  `}>
                                                <img src="https://placekitten.com/g/1080/700" className='rounded' alt="gigpic" />
                                            </div>
                                        </div>
                                    )
                                })}

                            </Slider>
                        </div>
                        <div className='flex flex-col justify-between gap-3 mb-5 lg:flex-row'>
                            <h1 className='text-lg font-bold text-[#626973] font-sans'>What people loved about this seller</h1>
                            <h1 className='text-sm  font-semibold text-[#4DA676] font-sans'>See all reviews</h1>
                        </div>
                        <div className='px-8 py-3 border-2 row g-0'>
                            <div className='col-lg-12'>
                                <div className='flex items-center gap-3 mb-3'>
                                    <img className='  w-full h-auto max-w-[40px] rounded-full' src="https://placekitten.com/g/200/200" alt="ppp" />
                                    <h1 className='mr-4 text-[#626973] font-bold'>Abdullah</h1>
                                    <img className=' w-full h-auto max-w-[40px] rounded-full' src="https://placekitten.com/g/200/200" alt="ppp" />
                                    <h1 className='mr-4 text-[#626973] '>Germany</h1>
                                </div>
                                <p className='pl-14 text-sm  text-[#707070]'>Lo numy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</p>

                            </div>

                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <div>
                            <div className='text-center row g-0'>
                                <div className='border-2 col-4'>
                                    <h1 className='lg:text-xl font-semibold text-[#626973] bg-[#F2F2F2] py-4'>Basic</h1>
                                </div>
                                <div className='border col-4'>
                                    <h1 className='lg:text-xl font-semibold text-[#4DA676] bg-white py-4'>Standard</h1>
                                </div>
                                <div className='border-2 col-4'>
                                    <h1 className='lg:text-xl  font-semibold text-[#626973] bg-[#F2F2F2] py-4'>Premium</h1>
                                </div>
                            </div>
                            <div className='p-4 mb-5 border-2 border-t-0'>
                                <div className='flex flex-col justify-between gap-3 mb-5 lg:flex-row'>
                                    <h1 className='text-2xl font-bold text-[#626973] font-sans'>I will develop your business profile</h1>
                                    <h1 className='text-2xl  font-bold text-[#4DA676] font-sans'>US$500</h1>
                                </div>
                                <p className='text-[#707070] italic mb-5'>Lore ren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</p>
                                <div className='grid grid-cols-12 gap-4 mb-5 text-sm lg:text-xl lg:px-5'>
                                    <div className='col-span-6 text-[#626973] font-bold'>
                                        <AiOutlineClockCircle size={23} className='inline mr-2 lg:mr-5' />30 Days Delivery
                                    </div>
                                    <div className='col-span-6 text-[#626973]  font-bold'>
                                        <AiOutlineReload size={23} className='inline mr-2 lg:mr-5' />7 Revisions
                                    </div>
                                </div>
                                <ul className='mb-5 lg:px-5'>
                                    {Array(5).fill("").map(() => {
                                        return (
                                            <li className='text-[#707070] text-sm mb-2 last:mb-0'>
                                                <GoCheck size={33} className="inline mr-5 text-[#4DA676]" /> Lorem ipsu it amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            </li>
                                        )
                                    })}
                                </ul>
                                <div className='text-center'>
                                    <button style={{ boxShadow: "0px 3px 6px #00000053" }} className='bg-[#42946C] px-8 mb-1 py-4 text-lg font-medium rounded text-white'>Continue (US$350)</button>
                                    <small className="text-[#4DA676] block font-bold">Compare Packages</small>
                                </div>
                            </div>
                            <div className='p-4 mb-5 text-2xl font-bold text-center border-2 text-[#626973] '>
                                Contact Seller <FaChevronDown className='inline ml-4' size={34} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-5'>

            </div>



        </div>
    )
}

export default SingleGig