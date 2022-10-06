import React from 'react'
import logoImage from '../images/logo.png'
const Emailverification = () => {
    return (
        <div className='h-screen bscontainer-fluid'>
            <div className='h-full border row'>
                <div className='bg-bottom bg-no-repeat bg-cover col-lg-4 bg-login-img '>  </div>
                <div className='flex items-center justify-center col-lg-8'>
                    <div className='w-full px-28'>
                        <img src={logoImage} className="w-full h-auto max-w-[120px] m-auto mb-10" alt="loginimg" />
                        <div style={{ boxShadow: "0px 3px 6px #00000029" }} className="border border-[#70707045] p-8 rounded-md">
                            <div className='justify-center row g-0'>
                                <div className='mb-3 text-center col-lg-4'>
                                    <button className='px-3 py-1 text-sm text-green-500 border-2 border-green-600 rounded-md '>Email</button>

                                </div>
                                <div className='mb-3 text-center col-lg-4'>
                                    <button className='px-3 py-1 text-sm text-green-500 border-2 border-green-600 rounded-md '>Phone</button>
                                </div>
                                <div className='col-lg-12'>
                                    <h1 className='text-[#626973] font-sans text-center'>Email Verification</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emailverification