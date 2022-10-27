import React from 'react'
import SingleService from './SmallComponents/SingleService'

const NewServices = () => {
    const services = ["Graphics & Design", "Digital Marketing", "Translation", "Video & Animation", "Music & Audio", "Programming & Tech", "Business", "Lifestyle", "Trending"]
    return (
        <div style={{ boxShadow: "0px 3px 6px #0000000D" }} className='h-[84vh] overflow-y-auto p-5 bg-white rounded-2xl'>

            <div className='flex items-center gap-4 pb-1 mb-5 overflow-x-auto gray_scroll'>
                {services.map((service) => {
                    return (
                        <div key={service} className='text-[#92929D] flex-none font-medium cursor-pointer'>{service}</div>
                    )
                })}
            </div>
            <div className='grid grid-cols-12 gap-5 mb-5'>
                <div className='col-span-4 bg-[#F2F2F2] p-5 rounded-xl flex flex-col items-center justify-center'>
                    <h1 className='text-[#626973] text-lg font-semibold mb-2 '>Hi AB,</h1>
                    <p className='text-[#92929D] text-xs font-normal leading-5 text-center mb-2'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</p>
                    <button className='block bg-[#42946C] rounded-md px-5 py-2 font-medium text-white'>Post a request</button>
                </div>
                <div className='col-span-8 bg-[#42946C] rounded-xl p-5 flex justify-between '>
                    <div>
                        <h1 className='mb-3 text-lg font-semibold text-white'>Start Your Dropshipping Business Now…!!</h1>
                        <p className='mb-2 text-xs font-normal leading-5 text-center text-white'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
                    </div>
                    <div>
                        <img alt="test" src="http://placekitten.com/200/200" />
                    </div>
                </div>
            </div>
            <div className='grid gap-0 lg:gap-5 gap-y-5 grid-cols-24'>
                {Array(10).fill("").map(() => {
                    return (
                        <SingleService />
                    )
                })}


            </div>

        </div>
    )
}

export default NewServices