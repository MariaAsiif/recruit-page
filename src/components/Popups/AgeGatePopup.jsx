import React, { useState } from 'react'
import CountryState from './CountryState'
import Email from './Email'
import EmailVerify from './EmailVerify'
import PhoneVerification from './PhoneVerify'
import logo from '../../images/Logo1.svg'

const AgeGatePopup = (props) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const handleIndex = () => {
        let index = activeIndex + 1
        setActiveIndex(index)

    }



    return (
        <div style={{ display: props.isOpen ? "block" : "", background: "#00000091" }} className="modal fade show fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog  modal-xl relative w-auto pointer-events-none">
                <div className="modal-content   border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">

                    <div className='bscontainer-fluid bg-[#00492C] rounded-md'>
                        <div className='row h-16 '>
                            <div className='col-lg-6'>
                               <img src={logo} className="w-[20%] mt-3" alt="logo_img"/>
                            </div>
                            <div className='col-lg-6 '>

                                <div className='flex flex-wrap justify-center lg:mt-4 lg:pt-3 items-center lg:px-14 px-1 lg:mb-12 mb-5'>

                                    <div className={`${activeIndex === 0 && 'w-[22px] h-[22px] text-center relative rounded-full border border-white'}`}>
                                    <div className={`${activeIndex === 0 ?  ' ml-1 rounded-full border bg-[white] mt-[4px] text-sm  w-[12px] h-[12px] ' :  'rounded-full border bg-[white] mt-[2px] text-sm  w-[12px] h-[12px]'}`}></div>
                                    </div>

                                    <div className=' border border-white md:w-[25%] md:-ml-2 h-[2px] lg:w-[28%] w-[22.6%]' ></div>
                                    <div className={`${activeIndex === 1 && 'w-[22px] h-[22px]  text-center relative rounded-full border border-white'} 'w-[22px] h-[22px]  mt-[4px] '`}>
                                    <div className={`${activeIndex === 1 ?  ' ml-1 rounded-full border bg-[white] mt-[3px]  text-sm  w-[12px] h-[12px] ' :  'rounded-full border bg-[white] mt-[2px] text-sm  w-[12px] h-[12px]'}`}></div>
                                    </div>
                                    {/* <div className=' border border-white md:w-[25%] md:-ml-2 h-[2px] lg:w-[28%] w-[22.6%]' ></div>
                                    <div className={`${activeIndex === 2 && 'w-[22px] h-[22px] text-center relative rounded-full border border-white'} 'w-[22px] h-[22px]  mt-[4px] '`}>
                                    <div className={`${activeIndex === 2 ?  ' ml-1 rounded-full border bg-[white] mt-[3px] text-sm  w-[12px] h-[12px] ' :  'rounded-full border bg-[white] mt-[2px] text-sm  w-[12px] h-[12px]'}`}></div>
                                    </div> */}
                                    {/* <div className=' border border-white md:w-[25%] md:-ml-2 h-[2px] lg:w-[28%] w-[22.6%]' ></div>
                                    <div className={`${activeIndex === 3 && 'w-[22px] h-[22px] text-center relative rounded-full border border-white'} 'w-[22px] h-[22px]'`}>
                                    <div className={`${activeIndex === 3 ?  ' ml-1 rounded-full border bg-[white] mt-[4px] text-sm  w-[12px] h-[12px] ' :  'rounded-full border bg-[white] mt-[2px] text-sm  w-[12px] h-[12px]'}`}></div>
                                    </div> */}

                                </div>

                                {/* <button type="button"
                                    onClick={props.onClose}
                                    class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal" aria-label="Close"></button> */}
                            </div>
                        </div>
                        <div className='row  '>
                            <div className='col-lg-6 flex items-center lg:py-14 '>
                                <div className='w-full lg:border-r-2 lg:border-b-0 border-b-2'>
                                    <div className='flex flex-wrap g-0 mb-9'>
                                        <div className='lg:w-[24%] w-[10%] text-right'>
                                            <h1 className='text-white text-xl font-light'>Win</h1>
                                        </div>
                                        <div className='lg:w-[53%] w-[80%] text-center pt-5'>
                                            <div>
                                                <h1 className='text-white text-9xl font-medium -m-3'>1000</h1>
                                                <h1 className='text-white text-2xl font-light'>Gift Card or Cash Prize</h1>
                                            </div>
                                        </div>
                                        <div className='lg:w-[23%] w-[10%]  flex items-end'>
                                            <h1 className='text-white text-5xl font-medium mb-5'>$</h1>
                                        </div>
                                    </div>
                                    <h1 className='text-center text-[#b4b4b4] lg:px-12 px-2 leading-5 mb-10 lg:text-xs text-base font-light'>You have oppertunity to do is submit a short 15-30 second testimonials video on how cannabis has helped you</h1>
                                    <div className='text-center mb-10'>
                                        <label className='bg-green-800 cursor-pointer text-white font-light text-xs px-9 py-3 rounded-md  '>
                                            Choose file
                                            <input type="file" hidden />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 flex items-center'>
                                {/* {activeIndex === 0 && <CountryState handleNext={handleIndex} />} */}
                                {activeIndex === 0 && <Email handleNext={handleIndex} />}
                                {activeIndex === 1 && <EmailVerify handleNext={handleIndex}  handleClose={props.onClose} />}
                                {/* {activeIndex === 3 && <PhoneVerification handleClose={props.onClose} handleNext={handleIndex} />} */}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default AgeGatePopup