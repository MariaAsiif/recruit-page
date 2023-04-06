import React from 'react'
import check from '../../images/Check.svg'
import greenRight from '../../images/greenImg.svg'
import circle from '../../images/circle.png'
import lady from '../../images/lady.png'
import client from '../../images/02.png'
import award from '../../images/01.png'
import users from '../../images/03.png'
import graphic from '../../images/Graphic Designer.svg'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Banner = () => {
    let checkList = ["Quality Work", "100% Guarantee", "Safe Payment", "24/7 Support"]
    return (
        <>
            <div className='flex justify-between pt-[2rem] px-10'>
                <div classNam="w-full">
                    <div className="flex items-center" >
                        {
                            checkList.map((item, i) => (
                                <div className='flex items-center' key={i}>
                                    <img src={check} alt="check" />
                                    <h2 className='px-2'>{item}</h2>
                                </div>

                            ))
                        }
                    </div>
                    <div className='pt-[66px]'>
                        <h2 className='text-[40px] font-semibold text-[#3D4A59]'>Top Qualities to Look for When Hiring a Freelancer for Your Project</h2>
                    </div>
                    <div className='pt-[44px]'>
                        <p className='text-[16px] max-w-[430px] '>Part-timer, full-timer or contracted freelancer, you can find them all here.</p>
                    </div>
                    <div className="flex items-center pt-[40px]">
                        <button className='rounded-full w-[25%] py-3 bg-[#24D29F] text-white'>Hire Talent</button>
                        <div className='mx-5'>
                            <h1 className='text-[#0D1829]  font-semibold flex items-center'>Learn More
                                <span className='ml-2'><HiArrowNarrowRight /></span>
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center pt-[40px]">
                        {
                            Array(5).fill(5).map((_, i) => (
                                <div className='bg-[#CDCFD326] rounded-xl flex px-2 py-2 w-[180px] my-2 mx-2 '>
                                    <div className='flex  w-full '>
                                        <div className='flex justify-center items-center'>
                                            <img src={graphic} alt="pic" className='object-cover w-[65%] mt-2' />

                                        </div>
                                        <div className='pl-2'>
                                            <h2 className='font-bold text-[20px]'>635</h2>
                                            <p className='text-[#ABABAB] text-[14px] pt-2'>Designer</p>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
                <div className='relative w-[80%] '>
                    <div className="w-full relative">
                        <img src={greenRight} alt={greenRight} className='object-contain h-[500px] w-full' />
                        <div className='absolute top-[3rem] -left-5   flex justify-center items-center'>
                            <img src={lady} alt={lady} className='object-contain w-[57.8%]' />
                        </div>
                    </div>

                    <div className='absolute top-[5rem]  left-[6rem]'>
                        <img src={circle} alt={circle} className='object-contain w-[60%]' />
                    </div>
                    <div className='absolute top-[6rem] left-[20rem] ' >
                        <img src={users} alt={users} className='object-cover w-[500px] h-[150px]  ' />
                    </div>
                    <div className='absolute bottom-[8rem] -left-8 '>
                    <img src={client} alt={client} className='object-contain w-[57.8%]' />

                    </div>
                    <div className='absolute bottom-[6rem] left-[17rem] '>
                    <img src={award} alt={client} className='object-contain ' />

                    </div>
                </div>


            </div>
            <div className=' px-10 pt-8'>
                <hr />
            </div>
        </>
    )
}

export default Banner