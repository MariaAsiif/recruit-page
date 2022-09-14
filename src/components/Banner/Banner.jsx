import React from 'react'
const Banner = () => {
    return (
        <div style={{ background: "radial-gradient(50% 117.72% at 50% 50%, #EEEBEB 0%, #FFFFFF 100%) " }} className='h-[650px]'>
            <div className='row h-full g-0'>
                <div className='col-lg-7 flex items-center'>
                    <div className='pl-12 pr-32'>
                        <h1 className='font-sans font-bold text-4xl mb-5 leading-[50px] text-[#323232]'>The standard Lorem Ipsum passage</h1>
                        <p className='text-[#646464] font-sans text-base font-normal leading-7 mb-16 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <button className='bg-gradient-to-r from-[#e84025] to-[#d78072] hover:from-red-500 hover:to-red-500 mr-7 rounded-xl border border-[#E84025] px-6 py-4 text-white font-oxygen font-bold'>Hire Talent</button>
                        <button className='bg-white rounded-xl border border-[#E84025] px-6 py-4 text-[#E84025] font-oxygen font-bold'>Browse Job</button>

                    </div>
                </div>
                <div className='col-lg-5   '>
                    <div className='bg-top-background h-full bg-bottom bg-no-repeat bg-cover'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner