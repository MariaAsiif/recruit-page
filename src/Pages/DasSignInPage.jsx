import React, { useState } from 'react'
import password_icon from "../images/password_icon.svg"
import mail_icon from "../images/mail_icon.svg"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import social_group_2x from '../images/social_group_2x.png'
const DasSignInPage = (props) => {
    const [showPassword, setShowPassword] = useState(false);


    return (
        <div className='h-screen p-0 bscontainer-fluid '>
            <div className='lg:h-full row g-0 mt-20'>
                {/* <div className='h-20 bg-bottom bg-no-repeat bg-cover lg:h-auto col-lg-4 bg-login-img '>  </div> */}
                <div className='col-lg-8 ml-20'>

                    <div className='justify-center row g-0'>
                        {/* <div className='mt-2 lg:mt-6 col-lg-12'>
                            <img src={logoImage} className="w-full h-auto max-w-[120px] m-auto  lg:mb-28 mb-3 " alt="loginimg" />
                        </div> */}
                        {/* {active === "login" && ( */}
                        <div className='px-4 col-lg-7 lg:px-0'>
                            <div className='border-b-2 border-[#707070] pb-1 flex items-center'>
                                <img src={mail_icon} alt="mail icon" />
                                <input className='w-full px-2 font-sans text-lg font-semibold focus:outline-none text-[#151515]' type="email" placeholder='johndoe@gmail.com' />
                            </div>
                            <h1 className='ml-8 text-[#707070] font-normal mb-8'>Enter your validated email address</h1>
                            <div className='border-b-2 border-[#707070] pb-1 flex items-center'>
                                <img src={password_icon} alt="mail icon" />
                                <input className='w-full px-2 font-sans text-lg font-semibold focus:outline-none text-[#151515]' type={showPassword ? "text" : "password"} placeholder='abc@123' />
                                {!showPassword ? <AiFillEyeInvisible size={33} className='inline' onClick={() => setShowPassword(!showPassword)} /> :
                                    <AiFillEye size={33} className='inline' onClick={() => setShowPassword(!showPassword)} />}
                            </div>
                            <h1 className='ml-8 text-[#707070] font-normal mb-4'>Enter your chosen password…</h1>
                            <label className=' font-medium text-[#151515]'><input id="loggedin" className='mr-3' type="checkbox" name='loggedin' />Keep me logged in</label>
                            <div className='mt-5 text-center' >
                                <button onClick={() => {
                                    props.onLogin(true);
                                    props.onNext("IdentityVerification")
                                }} className='bg-white hover:bg-[#4DA676] mb-2 border-4 border-[#4DA676] text-black hover:text-white px-16 py-3 rounded text-2xl'>Login</button>
                                <h1 className='text-[#707070] font-medium mb-8 text-xs'>Don’t have an account to log in, <Link className='text-[#4DA676] underline' onClick={() => props.onNext("newAccount")}>Click to create the account!</Link></h1>
                            </div>
                            <img src={social_group_2x} alt="social" className='w-full h-auto max-w-[380px] m-auto' />

                        </div>
                        {/* )} */}
                    </div>


                    {/* {active === "otp" && <OtpVerification />} */}


                </div>
            </div>
        </div>
    )
}

export default DasSignInPage