import React, { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import oil from "../../../assets/landingImages/drop.png";
import drop from "../../../assets/landingImages/drop.png";
import vap from "../../../assets/landingImages/vaporize2.png";
import medrel from "../../../assets/landingImages/box.png";
import bed from "../../../assets/landingImages/bed.png";
import Rating from '../RatingStarts';
import { BsStopwatch } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, Autoplay } from 'swiper'
import './deal.css'
const Deals = () => {
    const [activeThumb, setActiveThumb] = useState()
    const images = [bed, bed, bed, bed, bed, bed]
    return (
        <>
            <div className='bscontainer mb-2 mt-6'>
                <div className="tranding-heading relative">
                    <h1 className=" font-medium text-[20px]">Deals of the Day</h1>
                    <hr className="mt-2 " />
                    <hr className="border-[2px] -bottom-[1px] absolute z-99 rounded-sm border-[#24D29F] w-[17%]" />
                </div>
            </div>
            <div className='bscontainer-fluid mt-5'>
                <div className='row'>
                    <div className='col-lg-3 '>
                        <div className=' px-2 py-4 shadow-lg border'>
                            <div className='flex '>
                                <img src={oil} alt="oil" className='w-[120px] h-[150px] object-contain' />
                                <div className='pl-3'>
                                    <h2 className='text-[#313131] text-[16px] font-medium'>Hemp & argan nourishing facial oil</h2>
                                    <Rating value={3.5} />
                                    <div className='pt-2'>
                                        <h2 className='text-[#DB3C23] font-medium '>$10
                                            <span className='text-[#707070] text-[12.5px] -pt-[10px] font-medium pl-2'><del>$20</del></span>
                                        </h2>
                                    </div>
                                    <hr className='mt-2' />
                                    <div className='mt-2'>
                                        <button className='border flex items-center p-2  bg-[#35373C] text-[14px] text-white '>
                                            <FiShoppingCart className='mr-1 text-[20px]' />
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' px-2 py-4 shadow-lg mt-3 border'>
                            <div className='flex '>
                                <img src={drop} alt="oil" className='w-[120px] h-[150px] object-contain' />
                                <div className='pl-3'>
                                    <h2 className='text-[#313131] text-[16px] font-medium'>Hemp & argan nourishing facial oil</h2>
                                    <Rating value={3.5} />
                                    <div className='pt-2'>
                                        <h2 className='text-[#DB3C23] font-medium '>$10
                                            <span className='text-[#707070] text-[12.5px] -pt-[10px] font-medium pl-2'><del>$20</del></span>
                                        </h2>
                                    </div>
                                    <hr className='mt-2' />
                                    <div className='mt-2'>
                                        <button className='border flex items-center p-2  bg-[#35373C] text-[14px] text-white '>
                                            <FiShoppingCart className='mr-1 text-[20px]' />
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 '>
                        <div className='border h-full border-[#24D29F] relative'>

                            <div className='row'>
                                <div className='col-lg-6 '>
                                    <Swiper
                                        loop={true}
                                        spaceBetween={10}
                                        // navigation={true}
                                        modules={[Thumbs]}
                                        grabCursor={true}
                                        thumbs={{ swiper: activeThumb }}
                                        style={{ height: '87%' }}
                                    >
                                        {
                                            images.map((item, index) => (
                                                <SwiperSlide key={index}>
                                                    <img src={item} alt="product images" className='w-full h-full object-cover' />
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                    <Swiper
                                        onSwiper={setActiveThumb}
                                        loop={true}
                                        spaceBetween={6}
                                        slidesPerView={4}
                                        modules={[Navigation, Autoplay, Thumbs]}

                                    >
                                        {
                                            images.map((item, index) => (
                                                <SwiperSlide key={index} className="!border ml-[1px] ">
                                                    <div className="product-images-slider-thumbs-wrapper  ">
                                                        <img src={item} className='object-cover '  alt="product images" />
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='lg:pt-4 pt-[5rem] pl-[10px] pb-1'>
                                        <h2 className='text-[#24D29F] text-[20px] font-medium'>Hamp & organ nuturation facial oil</h2>
                                        <Rating value={3.1} text={"54"} font={""} />

                                        <div className='pt-3'>
                                            <p className='text-[13px] text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ducimus, similique dicta nisi sit fugiat reprehenderit architecto cumque reiciendis cupiditate inventore autem iste assumenda asperiores, voluptatem libero labore doloremque itaque.</p>
                                        </div>
                                        <div className='flex items-center mt-3'>
                                            <span className='w-4 h-4  rounded-full inline-block bg-[#DD2E44] mr-1 align-middle'></span>
                                            <span className='w-4 h-4  rounded-full inline-block bg-[#313131] mr-1 align-middle'></span>
                                            <span className='w-4 h-4  rounded-full inline-block bg-[#E0DFDF] mr-1 align-middle'></span>
                                        </div>
                                        <div className='flex items-center mt-2'>
                                            <h2 className='text-[#DD2E44] font-semibold'>$10.44 </h2>
                                            <p className='px-1 text-black font-bold text-[14px]'>-20%</p>
                                            <del className='px-1 text-[#E0DFDF] font-medium text-[14px]'>$20</del>
                                        </div>
                                        <div className='border w-[47%] mt-2 p-1 bg-[#EEEEEE] rounded-md flex items-center'>
                                            <BsStopwatch className='text-[18px]' />
                                            <div className='px-2'>
                                                <span className='text-[14px] font-semibold'>471 : 10 : 16 : <span className='text-[#DD2E44]'>08</span></span>

                                            </div>
                                        </div>

                                        <button className='border flex items-center p-2 mt-2 w-[50%] justify-center  bg-[#24D29F] rounded-md text-[16px] text-white '>
                                            <FiShoppingCart className='mr-1 text-[20px]' />
                                            Add to Cart
                                        </button>

                                    </div>
                                </div>
                            </div>
                            <div className="w-[140px]  overflow-hidden inline-block absolute top-0 z-10">
                                <div className=" h-[230px] text-white bg-[#24D29F] rotate-45 transform origin-top-right">

                                </div>
                            </div>
                            <h2 className='-rotate-45 text-white absolute top-6 left-5 z-30 font-medium text-[22px]' >-20%</h2>
                        </div>
                    </div>
                    <div className='col-lg-3  '>
                        <div className=' px-2 py-4 shadow-lg border'>
                            <div className='flex '>
                                <img src={vap} alt="oil" className='w-[120px] object-contain' />
                                <div className='pl-3'>
                                    <h2 className='text-[#313131] text-[16px] font-medium'>Hemp & argan nourishing facial oil</h2>
                                    <Rating value={3.5} />
                                    <div className='pt-2'>
                                        <h2 className='text-[#DB3C23] font-medium '>$10
                                            <span className='text-[#707070] text-[12.5px] -pt-[10px] font-medium pl-2'><del>$20</del></span>
                                        </h2>
                                    </div>
                                    <hr className='mt-2' />
                                    <div className='mt-2'>
                                        <button className='border flex items-center p-2  bg-[#35373C] text-[14px] text-white '>
                                            <FiShoppingCart className='mr-1 text-[20px]' />
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' px-2 py-4 shadow-lg mt-3 border'>
                            <div className='flex '>
                                <img src={medrel} alt="oil" className='w-[120px] object-contain' />
                                <div className='pl-3'>
                                    <h2 className='text-[#313131] text-[16px] font-medium'>Hemp & argan nourishing facial oil</h2>
                                    <Rating value={3.5} />
                                    <div className='pt-2'>
                                        <h2 className='text-[#DB3C23] font-medium '>$10
                                            <span className='text-[#707070] text-[12.5px] -pt-[10px] font-medium pl-2'><del>$20</del></span>
                                        </h2>
                                    </div>
                                    <hr className='mt-2' />
                                    <div className='mt-2'>
                                        <button className='border flex items-center p-2  bg-[#35373C] text-[14px] text-white '>
                                            <FiShoppingCart className='mr-1 text-[20px]' />
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Deals