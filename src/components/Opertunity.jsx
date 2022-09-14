import React from 'react'
import RightImg from '../images/whole seller.jpg'
const Opertunity = () => {
    return (
        <div className='mt-[5rem] '>
            <div className=' flex justify-between'>
                <div className=' bg-gradient-to-r  from-[#E84025] to-[#68423B] lg:px-[110px] p-[20px] w-full '>
                    <h2 className='text-[43px] font-bold text-white'>Searching for Better Oppertunity</h2>
                    <span className=' text-[14px] text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sunt recusandae impedit atque harum debitis.</span><br/>
                    <button className='w-[120px] text-white hover:bg-[#93C234] mt-[20px] bg-red-300  h-[40px] rounded-md'>Take a Tour</button>

                </div>
                <div className='border w-full'>
                    <img src={RightImg} className="h-[320px] w-full" alt="user" />
                </div>
            </div>

           

        </div >
    )
}

export default Opertunity