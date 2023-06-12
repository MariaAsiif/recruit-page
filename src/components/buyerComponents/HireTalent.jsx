import React from 'react'
import { Link } from 'react-router-dom'

const HireTalent = () => {
    return (
        <>
            <div className="bg-joinUs-img bg-cover bg-no-repeat h-[300px]">
                <div className="flex justify-center items-center flex-col pt-[5rem] ">
                    <h2 className="text-white font-bold text-[30px]">Want to work with Us</h2>
                    <div className='pt-[40px]'>
                        <Link to="/projectBrife">
                        <button className='bg-[#DF6450] text-white text-[18px] w-[290px] py-3'>Hire Talent </button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HireTalent