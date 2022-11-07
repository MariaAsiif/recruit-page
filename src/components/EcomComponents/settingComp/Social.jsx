import React from 'react'
import facebook from '../../../assets/ecome/facebook.svg'
const Socialprofile = () => {

    
    return (
        <>
            <div className='mb-2 mt-7 w-full'>
                <div className="tranding-heading relative">
                    <h1 className=" font-medium text-[20px] pl-2">Social Profiles</h1>
                    <hr className="mt-2 " />
                    <hr className="border-[2px] -bottom-[1px] absolute z-99 rounded-sm border-[#24D29F] w-[14%]" />
                </div>
            </div>

            <div className='w-full' >
                <ul>
                    {Array(5).fill(5).map((item, _) => (
                        <li >
                            <div className='flex items-center w-full p-4'>
                                <div className='w-[15%]'>
                                    <img src={facebook} className="w-[40%] ml-5" alt="social" />
                                </div>
                                <div className='w-full'>
                                    <input
                                        autoComplete='off'
                                        className={`border p-2 h-[50px] focus:outline-blue-500  w-[98%] rounded-md  `}
                                        name='compname'
                                        id='compname'
                                        type='text'
                                        placeholder='Facebook profile link'
                                    />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default Socialprofile