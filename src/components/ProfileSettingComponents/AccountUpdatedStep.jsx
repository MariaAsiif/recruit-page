import React from 'react'
import confirmation_animation from "../../confirmation.json"
import Lottie from "lottie-react"
const AccountUpdatedStep = ({handleNext}) => {
    return (
        <>
            <div className='col-lg-12 mb-10 text-center  pt-11'>
                <h1 className='text-[#65A33A] font-sans font-semibold text-lg mb-2'>Account Updated</h1>
                <h1 className='text-[#999FA9] text-[10px] font-light mb-2'>Click on verify and get OTP code to verify your account</h1>
                <div className='w-56 m-auto'>
                    <Lottie animationData={confirmation_animation} />
                </div>

                <div className='text-right'>
                    <button onClick={handleNext} className='bg-[#42946C] text-right  font-semibold font-sans rounded-md px-9 py-3 text-white '>Finish</button>
                </div>

            </div>
        </>
    )
}

export default AccountUpdatedStep