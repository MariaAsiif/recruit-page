import React from 'react'

const PhoneVerification = ({ handleNext , handleClose }) => {
    return (
        <div>
            <div className='w-full lg:px-20 text-center  px-2 py-5'>
                <h1 className='text-white font-light text-center text-2xl mb-5'>Verify Number & Phone Number
                    <br/>
                    <span className='text-[13px] mt-[-20px]'>Verification Code is sent to you,Please enter that code here. </span>

                </h1>
                <div>
                    <div className='mb-5'>
                        <input type="number" placeholder='Enter Code' className='bg-transparent w-full mb-5 text-[#CCCCCC] font-sans  focus:outline-none border border-white rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' />
                    </div>

                </div>
                <button onClick={() => handleClose()} className='bg-white text-[#00492C]  px-2 py-2 rounded-full  font-medium tracking-widest mb-5 w-4/5 m-auto block'>Finish</button>
            </div>
        </div>
    )
}

export default PhoneVerification