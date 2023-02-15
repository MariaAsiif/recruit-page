import React from 'react'

const BasicInfoStep = () => {
    return (
        <>
            <div className='col-lg-6 mb-10'>
                <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>Enter your First Name*</label>
                <input className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[14px]' placeholder='First Name' />
            </div>
            <div className='col-lg-6 mb-10'>
                <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>Enter your FAMILY NAME (Op4ional)</label>
                <input className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[16px]' placeholder='Family name' />
            </div>
            <div className='col-lg-6 mb-10'>
                <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>Enter your Second FAMILY NAME (Op4ional)</label>
                <input className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[16px]' placeholder='Second Family name' />
            </div>
            <div className='col-lg-6 mb-10'>
                <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>Enter your Third FAMILY NAME (Op4ional)</label>
                <input className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[16px]' placeholder='Third Family name' />
            </div>
            <div className='col-lg-6 mb-10'>
                <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>Mobile Number *</label>
                <input className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[14px]' placeholder='Mobile Number' />
            </div>
            <div className='col-lg-6 mb-10'>
                <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>Enter Email Address</label>
                <input className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[14px]' placeholder='Email' />
            </div>
            <div className='col-lg-6 mb-10'>
                <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>ReEnter Email Address</label>
                <input className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[14px]' placeholder='Email' />
            </div>
            <div className='col-lg-6 mb-10'>
                <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>Address</label>
                <input className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[14px]' placeholder='Address' />
            </div>
            <div className='col-lg-6 mb-10'>
                <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>Location</label>
                <input className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[14px]' placeholder='Location' />
            </div>
            <div className='col-lg-6 mb-10'>
                <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>Postal Code</label>
                <input className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[14px]' placeholder='Postal Code' />
            </div>
        </>
    )
}

export default BasicInfoStep