import React, { useState } from 'react'
import loginImage from '../images/login/Login.png'
import logoImage from '../images/logo.png'
import OtpInput from "react-otp-input";
const Verify = () => {
    const [code, setCode] = useState("");

    const handleChange = (code) => setCode(code);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 left_img'>
                    <img src={loginImage} className="h-[625px]" alt="login_image" />
                </div>
                <div className='col-lg-8 mb-3 '>
                    <div className=' max-w-[400px] m-auto mt-[5rem] '>
                        <img src={logoImage} className="ml-[7rem] w-[40%]" alt="logo" />
                        <div className='mt-[4rem] text-center'>
                            <h2 className='text-[25px] font-semibold'>Verify Account</h2>
                            <span className='text-[11px] text-gray-400'>check your email and phone for OTP</span>
                            <div className='flex justify-center mt-3'>
                                <OtpInput
                                    value={code}
                                    onChange={handleChange}
                                    placeholder="----"
                                    numInputs={4}
                                    separator={<span style={{ width: "8px" }}></span>}
                                    isInputNum={true}
                                    shouldAutoFocus={true}
                                    inputStyle={{
                                        border: "1px solid gray",
                                        textAlign: 'center',
                                        borderRadius: "8px",
                                        width: "40px",
                                        height: "40px",
                                        fontSize: "12px",
                                        color: "#000",
                                        fontWeight: "400",
                                        caretColor: "blue"
                                    }}
                                    focusStyle={{
                                        border: "1px solid #CFD3DB",
                                        outline: "none"
                                    }}
                                />
                            </div>
                            <div className='mt-4'>
                                <span className='text-gray-400 text-[12px] '>Code Expire in : <span className='text-[#E84025] font-semibold '>00 : 56</span></span>
                            </div>
                            <div>
                                <span className='text-gray-400 text-[12px]'>Don't recienve Code? <span className='text-[#E84025] font-semibold cursor-pointer hover:underline'>Resend Code</span></span>
                            </div>
                            <div className='text-center mt-4' >
                                <button className='border w-[50%] h-[45px] rounded-md text-white hover:bg-[#93C234] bg-[#E84025] '>Verify</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Verify