import React from 'react'

const PasswordSecurityStep = () => {
    return (
        <>
            <div className='col-lg-6 mb-10'>
                <label className='text-[#999FA9] text-xs mb-2 font-light block'>Enter New Password</label>
                <input type="password" value="asdfasfasdf" className='border-b border-[#d4d5d6] focus:outline-none w-full text-[#626973] font-sans text-xl font-medium' />
            </div>
            <div className='col-lg-6 mb-10'>
                <label className='text-[#999FA9] text-xs mb-2 font-light block'>Confirm New Password</label>
                <input type="password" value="asdfasfasdf" className='border-b border-[#d4d5d6] focus:outline-none w-full text-[#626973] font-sans text-xl font-medium' />
            </div>
            <div className='col-lg-12 mb-10'>
                <h1 className='text-[#626973] font-sans font-semibold'>Security Question</h1>
            </div>
            <div className='col-lg-6 mb-10'>
                <label className='text-[#999FA9] text-xs mb-2 font-light block'>Which team play well in game?</label>
                <input type="text" className='border-b border-[#d4d5d6] focus:outline-none w-full text-[#626973] font-sans text-xl font-medium' />
            </div>
            <div className='col-lg-6 mb-10'>
                <label className='text-[#999FA9] text-xs mb-2 font-light block'>Place where your parent born?</label>
                <input type="text" value="" className='border-b border-[#d4d5d6] focus:outline-none w-full text-[#626973] font-sans text-xl font-medium' />
            </div>
        </>
    )
}

export default PasswordSecurityStep