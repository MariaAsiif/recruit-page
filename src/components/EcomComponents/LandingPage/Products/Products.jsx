import React from 'react'

import dp_img from "../../../assets/images/Botanist.jpg";
import product_2 from "../../../assets/ecome/watch.jpg";
import product_1 from "../../../assets/ecome/women-cloth.jpg";
import product_3 from "../../../assets/ecome/bag.jpg";
import { TfiWorld } from 'react-icons/tfi'
import { GiReceiveMoney } from 'react-icons/gi'
import { FaShippingFast } from 'react-icons/fa'
const Products = () => {

    const product = [
        { title: "Mens Shopping", desc: "Lorem ipsum dolor sit amet..." , img:product_1 },
        { title: "Mens Shopping", desc: "Lorem ipsum dolor sit amet...", img:product_2 },
        { title: "Mens Shopping", desc: "Lorem ipsum dolor sit amet...", img:product_3 }]
    const support = [
        { icon: <TfiWorld />, title: "24x7 Support", desc: "We at 24x7 Support specilizationin providing support to individual consumer" },
        { icon: <GiReceiveMoney />, title: "24x7 Support", desc: "We at 24x7 Support specilizationin providing support to individual consumer" },
        { icon: <FaShippingFast />, title: "24x7 Support", desc: "We at 24x7 Support specilizationin providing support to individual consumer" }]
    return (
        <>
            <div className='bscontainer mb-2'>
                <div className='row'>
                    {
                        product?.map((p, index) => (
                            <div className='col-lg-4 ' key={index}>
                                <div className=' bg-[#F5F5F5]  p-2 pb-6'>
                                    <div className='flex bg-[#F5F5F5]  flex-col justify-center text-center   '>
                                        <div className='flex justify-center pt-4 bg-[#F5F5F5]'>
                                            <img src={p?.img} className=" object-cover w-[80%]  h-full" alt="img_pro" />
                                        </div>
                                        <div className='pt-5'>
                                            <h2 className='text-[20px] text-black  font-bold'>{p.title}</h2>
                                            <p className='text-[12px]'>{p?.desc}</p>
                                            <button className=' hover:bg-[#EEEEEE] hover:text-black bg-[#313131] text-white text-[14px] h-[45px] w-[40%] mt-5'>Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>

                <div className='row mt-4'>
                    {
                        support?.map((p, index) => (
                            <div className='col-lg-4 ' key={index}>
                                <div className='  p-2 pb-6'>
                                    <div className='flex   flex-col justify-center text-center   '>
                                        <div className='flex justify-center pt-4 '>

                                            <span className='text-[30px]'>{p?.icon}</span>
                                        </div>
                                        <div className='pt-2'>
                                            <h2 className='text-[20px] text-black  font-bold'>{p.title}</h2>
                                            <p className='text-[12px] text-gray-400 max-w-[300px] m-auto text-center'>{p?.desc}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>

            </div>

        </>
    )
}

export default Products