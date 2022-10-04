import React from 'react'
import { FiEdit } from "react-icons/fi";
const MainProfile = () => {
    return (
        <div className='bg-white rounded-xl p-4 text-center'>
            <span className='p-[2px] border-2 border-[#65A33A] inline-block rounded-full relative'>
                <img className=' w-full h-auto max-w-[136px] rounded-full' alt="profile" src='http://placekitten.com/136/136' />
                <label className='absolute cursor-pointer bottom-3 right-0 bg-[#42946C] text-white p-[7px] rounded-full'>
                    <FiEdit size={15} />
                    <input type="file" hidden />
                </label>
            </span>
            <h1 className='font-sans font-bold text-[#65A33A] text-xs'>Eddie Chris</h1>
            <h1 className='font-light text-[#626973] text-[8px]'>UI/UX Designer at Google</h1>
        </div>
    )
}

export default MainProfile