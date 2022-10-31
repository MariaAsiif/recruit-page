import React, { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import oil from "../../../assets/landingImages/evendor3.png";
import drop from "../../../assets/landingImages/TrendingNows.png";
import vap from "../../../assets/landingImages/vaporize2.png";
import medrel from "../../../assets/landingImages/medreleafyellow.jpeg";
import Rating from '../RatingStarts';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, Autoplay } from 'swiper'
import './deal.css'
const Deals = () => {
    const [activeThumb, setActiveThumb] = useState()
    const images = [medrel, medrel, medrel, medrel, medrel, medrel]
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
                                        <button className='border flex items-center p-2 w-[70%] bg-[#35373C] text-[14px] text-white '>
                                            <FiShoppingCart className='mr-1 text-[20px]' />
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' px-2 py-4 shadow-lg mt-3 border'>
                            <div className='flex justify-between '>
                                <img src={drop} alt="oil" className='w-[120px] h-[150px]  object-contain' />
                                <div className='pl-1' >
                                    <h2 className='text-[#313131] text-[16px] font-medium'>Hemp & argan nourishing facial oil</h2>
                                    <Rating value={3.5} />
                                    <div className='pt-2'>
                                        <h2 className='text-[#DB3C23] font-medium '>$10
                                            <span className='text-[#707070] text-[12.5px] -pt-[10px] font-medium pl-2'><del>$20</del></span>
                                        </h2>
                                    </div>
                                    <hr className='mt-2' />
                                    <div className='mt-2'>
                                        <button className='border flex items-center p-2 w-[80%] bg-[#35373C] text-[14px] text-white '>
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
                                        style={{ height: '100%' }}
                                    >
                                        {
                                            images.map((item, index) => (
                                                <SwiperSlide key={index}>
                                                    <img src={item} alt="product images" style={{ height: '100%' }} />
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                    <Swiper
                                        onSwiper={setActiveThumb}
                                        loop={true}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        modules={[Navigation, Autoplay, Thumbs]}
                                        className="mt-2"
                                    >
                                        {
                                            images.map((item, index) => (
                                                <SwiperSlide key={index} className="!border">
                                                    <div className="product-images-slider-thumbs-wrapper">
                                                        <img src={item} alt="product images" />
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='pt-4'>
                                        <h2 className='text-[#24D29F] text-[20px] font-medium'>Hamp & organ nuturation facial oil</h2>
                                        <Rating value={3.1} text={"54"} />

                                        <div className='pt-3'>
                                            <p className='text-[14px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ducimus, similique dicta nisi sit fugiat reprehenderit architecto cumque reiciendis cupiditate inventore autem iste assumenda asperiores, voluptatem libero labore doloremque itaque.</p>
                                        </div>
                                        <div>
                                            <span className='border rounded-full bg-[#DD2E44] h-[120px] w-[120px]'></span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="w-[140px]  overflow-hidden inline-block absolute top-0 z-10">
                                <div className=" h-[230px] text-white bg-[#24D29F] rotate-45 transform origin-top-right">

                                </div>
                            </div>
                            <h2 className='-rotate-45 text-white absolute top-10 left-5 z-30 font-medium text-[20px]' >-20%</h2>
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
                                        <button className='border flex items-center p-2 w-[80%] bg-[#35373C] text-[14px] text-white '>
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
                                        <button className='border flex items-center p-2 w-[80%] bg-[#35373C] text-[14px] text-white '>
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