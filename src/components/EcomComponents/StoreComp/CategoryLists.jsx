import React, { useEffect } from 'react'
import cloth from '../../../assets/Stocks/cloth.png'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Autoplay } from "swiper";
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { callPublicApi } from '../../../utils/CallApi';
import { useState } from 'react';


const CategoryLists = () => {
    const [category, setCategory] = useState([])
    let categoryList = ["Clothing" , "Animals", "Personal Electronics & Electric Mobility" , "Beverages"]
    useEffect(() => {
        let fetchLists = async () => {
            let option = {

                "sortproperty": "createdAt",
                "sortorder": -1,
                "offset": 0,
                "limit": 100,
                "query": {
                    "critarion": { "active": true },

                    "addedby": "_id email first_name",

                    "lastModifiedBy": "_id email first_name"
                }
            }
            try {

                let res = await callPublicApi('/productsOfStore/getProductsWithFullDetailsPublic', 'post', option)
                if (res.status === "Success") {
                    setCategory(res?.data?.productsOfProductsOfStores)
                    // let arr  
                    // let pr = category.filter((f , i) => {
                    //     if()
                    // } )
                }
            }
            catch (err) {
                console.log("err", err)
            }
        }
        fetchLists()
    }, [])

    console.log("category", category)

    return (
        <>
            {

                category.map((list, i) => {
                    if (list.category === categoryList[i])
                        return (
                            <div className="px-9 overflow-hidden mb-[2rem]">
                                <h2 className='py-4 text-[2rem]'>{list?.category}</h2>
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
                                    <SwiperSlide>
                                        <div className='overflow-hidden'>
                                            <div className='relative'>
                                                <img src={list?.pictureLink1} alt="clth" />
                                                <div className='absolute right-4 top-5'>
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
                                </Swiper>
                            </div>
                        )
                }
                )
            }




        </>
    )
}

export default CategoryLists