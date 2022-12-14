import React, { useState } from "react";

// import LightGallery from 'lightgallery/react';

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Autoplay } from "swiper";
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgZoom from 'lightgallery/plugins/zoom';
import ViewCategory from "../../Popups/ViewCategory";
export default function ImageGalleryPopup({ images, title }) {

    const [hover, setHover] = useState(true)
    const [categoryPopup, setCategoryPopup] = useState(false)
    const [categoryData, setCategoryData] = useState({})

    const openPopup = (e, data) => {
        e.stopPropagation()
        setCategoryPopup(true)
        setCategoryData(data)
    }

    function MouseOver(event) {
        setHover(true)
    }
    function MouseOut(event) {
        setHover(false)
    }

    // const images = [
    //     {
    //         src: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
    //         original: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
    //         width: 320,
    //         height: 213,
    //         caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
    //     },
    //     {
    //         "src": "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    //         "original": "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg"
    //     },
    //     {
    //         "src": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp",
    //         "original": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
    //     },
    //     {
    //         "src": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp",
    //         "original": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
    //     },
    //     {
    //         "src": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp",
    //         "original": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
    //     },
    //     {
    //         "src": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp",
    //         "original": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
    //     },
    //     {
    //         "src": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp",
    //         "original": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
    //     },
    //     {
    //         "src": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp",
    //         "original": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
    //     }
    // ]

    return (
        <>
            <div>
                {/* <div className="">
                    <LightGallery plugins={[lgZoom]} mode="lg-fade" elementClassNames="grid lg:grid-cols-4 gap-5 w-full">
                        {
                            images.map((gal, index) => (
                                <a
                                    data-lg-size="1406-1390"
                                    className="gallery-item w-full scale-90 hover:scale-110 ease-in duration-500"
                                    data-src={gal.src}
                                    // className=" "
                                >
                                    <img
                                        className="img-responsive"
                                        src={gal.src}
                                    />
                                </a>
                            ))
                        }


                    </LightGallery >
                </div> */}

                <ViewCategory id="job-modal" data={categoryData} modalOpen={categoryPopup} onClose={() => setCategoryPopup(false)} />
                <div className="px-9  overflow-hidden mb-[2rem]">
                    <h2 className='py-4 text-[2rem]'>{title}</h2>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        freeMode={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[FreeMode, Autoplay]}
                        className="mySwiper "
                    >
                        {

                            images && images.length > 0 ? images?.filter((f, i) => f.category === title)?.map((list, i) => {
                                // if (list.category === categoryList[i])
                                return (
                                    <SwiperSlide>
                                        <div className='overflow-hidden border shadow-lg' onClick={(e) => openPopup(e, list)}>
                                            <div className='relative ' onMouseEnter={MouseOver} onMouseLeave={MouseOut}>
                                                <img src={list?.pictureLink1} className="h-[300px] w-full" alt="clth" />
                                                <div className='absolute   bg-black w-full h-full top-0 opacity-[0.7] ' >
                                                   
                                                </div>
                                                <div className=" absolute right-5 top-4  ">
                                                        <div className=' rounded-full p-2 bg-white shadow-lg '>
                                                            <AiOutlineSearch />
                                                        </div>
                                                        <div className=' rounded-full p-2 bg-white shadow-lg my-2 '>
                                                            <AiOutlineHeart />
                                                        </div>
                                                    </div>

                                            </div>
                                            <h2 className='py-2 font-semibold px-2'>Textured vegan leather</h2>
                                            <span className='text-[14px]'><del className='px-2 text-[16px]'>89.00$ </del> 80.00$</span>
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                            )
                                : <h2>Loading.....</h2>
                        }
                    </Swiper>
                </div>

            </div>

        </>
        // <div>
        //     <div className="grid lg:grid-cols-4 gap-5">
        //         {
        //             images.map((gal, index) => (
        //                 <div onClick={() => handleClick(index )} className=" w-full scale-90 hover:scale-110 ease-in duration-500">
        //                     <img src={gal.original} className="w-full " alt="Louvre" />
        //                 </div>
        //             ))
        //         }
        //     </div>
        //     {currentImage && (
        //         /* @ts-ignore */
        //         <Lightbox
        //             mainSrc={currentImage.original}
        //             imageTitle={currentImage.caption}
        //             mainSrcThumbnail={currentImage.src}
        //             nextSrc={nextImage.original}
        //             nextSrcThumbnail={nextImage.src}
        //             prevSrc={prevImage.original}
        //             prevSrcThumbnail={prevImage.src}
        //             onCloseRequest={handleClose}
        //             onMovePrevRequest={handleMovePrev}
        //             onMoveNextRequest={handleMoveNext}
        //         />
        //     )}
        // </div>
    );
}
