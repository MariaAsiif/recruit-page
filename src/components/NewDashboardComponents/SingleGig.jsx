import React from 'react'

const SingleGig = () => {
    const services = ["Graphics & Design", "Digital Marketing", "Translation", "Video & Animation", "Music & Audio", "Programming & Tech", "Business", "Lifestyle", "Trending"]
    return (
        <div style={{ boxShadow: "0px 3px 6px #0000000D" }} className='mb-5 bg-white h-80 rounded-2xl'>
            <div className='flex items-center gap-4 px-5 pt-5 pb-3 overflow-x-auto border-b-2 scroll '>
                {services.map((service) => {
                    return (
                        <div key={service} className='text-[#92929D] flex-none font-medium cursor-pointer'>{service}</div>
                    )
                })}
            </div>

            <div className='border-b-2 row g-0'>
                <div className='col-lg-8'>
                    <div className='flex items-center gap-4 px-5 pt-5 pb-3 overflow-x-auto scroll '>
                        {services.map((service) => {
                            return (
                                <div key={service} className='text-[#92929D] flex-none font-medium cursor-pointer'>{service}</div>
                            )
                        })}
                    </div>
                </div>

            </div>
            <div className='p-5'>
                <h1 className='text-2xl font-bold text-[#626973] font-sans'>I will develop your business profile</h1>
            </div>



        </div>
    )
}

export default SingleGig