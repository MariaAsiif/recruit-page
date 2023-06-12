import React, { useState } from 'react'
import accountRegister from '../../images/accountRegister.png'
import searchJob from '../../images/searchJob.png'
import applyJob from '../../images/applyJob.png'
const HowItWorks = () => {
    const [steps] = useState([
        {
            heading: "Register an account",
            pic: accountRegister,
        },
        {
            heading: "Specify & search your job",
            pic: searchJob,
        },
        {
            heading: "Apply for job",
            pic: applyJob,
        },
    ])
    return (
        <div className='bscontainer py-14'>
            <div className='row'>
                <div className='col-12 mb-6'>
                    <h1 className='text-center text-[#323232] font-sans lg:text-4xl text-3xl font-bold'>How it Works</h1>
                </div>
                {steps.map((step, i) => {
                    return (
                        <div key={i} className='col-lg-4 col-md-6 mb-4 text-center text-[#323232]'>
                            <div className='px-5'>
                                <div>
                                    <img className='m-auto w-full h-auto max-w-[80px] mb-6' src={step.pic} alt='workimg1' />
                                    <p className='font-sans font-semibold mb-2'>{step.heading}</p>
                                    <p className='  text-[#969696] text-xs font-light leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HowItWorks