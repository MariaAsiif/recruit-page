import React, { useState } from 'react'
// import { FaChevronLeft } from 'react-icons/fa'
import email_verify from "../../images/email_verfication.svg"
import {  BsEye, BsEyeSlashFill } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'
import OtpInput from 'react-otp-input';
import {  callPublicApi } from '../../utils/CallApi';
// import { useSelector } from 'react-redux';
import { toast , ToastContainer} from 'react-toastify';
import { Navigate } from 'react-router-dom';
const OtpSelection = (props) => {
    const [vType, setvType] = useState("email")
    const [email, setEmail] = useState('')
    // const [phone, setPhone] = useState('')
    const [show, setShow] = useState(false)
    const [verify, setVerify] = useState(false)

    const [emailotp, setemailotp] = useState("")
    const onChangeOTP = (otp) => {
        setemailotp(otp)
    }

    const [phoneotp, setphoneotp] = useState("")
    const onChangePhoneOTP = (otp) => {
        setphoneotp(otp)
    }

    const verificationChange = (type) => {
        setvType(type)
    }


    // let user = useSelector((state) => state.recruitAuth.userInfo)


    const EmailOtp = async (e) => {
        e.preventDefault()
        // if (phone === "") {
        try {
            let payload = {
                email: email
            }
            let res = await callPublicApi('/verifications/sendCodeOnEmail', "post", payload)

            if (res.status === "Success") {
                toast.success(res.message)
                setVerify(true)
            }
            else {
                toast.error(res.message)

            }
        }
        catch (err) {
            toast.error(err)

        }
        // }
        // else {
        //     try {
        //         let payload = {

        //             "phonenumber": phone,
        //             "channel": "sms"
        //         }
        //         let res = await callPublicApi('/verifications/sendCodeOnMobile', "post", payload)

        //         if (res.status === "Success") {
        //             toast.success(res.message)
        //             setVerify(true)
        //         }
        //         else {
        //             toast.error(res.message)

        //         }
        //     }
        //     catch (err) {
        //         toast.error(err)

        //     }
        // }
    }


    const VerifyEmail = async (e) => {
        e.preventDefault()
        try {
            let payload = {
                "email": email,
                "emailverificationcode": emailotp
            }
            let res = await callPublicApi('/verifications/verifyemailCode', "post", payload)

            if (res.status === "Success") {
                toast.success(res.message)
                Navigate('/providerDashboard')
                // setVerify(false)
                // verificationChange("phone")
            }
            else {
                toast.error(res.message)

            }
        }
        catch (err) {
            toast.error(err)

        }

    }


    // const VerifyPhone = async (e) => {
    //     e.preventDefault()
    //     try {
    //         let payload = {
    //             email: email
    //         }
    //         let res = await callPublicApi('/verifications/sendCodeOnEmail', "post", payload)

    //         if (res.status === "Success") {
    //             toast.success(res.message)
    //             Navigate('/newdashboard')
    //         }
    //         else {
    //             toast.error(res.message)

    //         }
    //     }
    //     catch (err) {
    //         toast.error(err)

    //     }

    // }



    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className='w-full px-4 lg:px-52'>
                <div style={{ boxShadow: "0px 3px 6px #00000029" }} className="border border-[#70707045] py-8 lg:px-5 px-6 rounded-md font-sans">
                    {!verify ?
                        <>
                            <div className='justify-center row g-0'>
                                {/* <div className='mb-3 text-center col-lg-3'>
                        <button onClick={() => verificationChange("email")} className={`px-3 py-1 text-xs ${vType === "email" ? "bg-[#42946C] text-white " : "bg-white text-[#42946C] "}border-2 border-[#42946C] rounded-md `}>Email</button>
                    </div>
                    <div className='mb-3 text-center col-lg-3'>
                        <button onClick={() => verificationChange("phone")} className={`px-3 py-1 text-xs ${vType === "phone" ? "bg-[#42946C] text-white " : "bg-white text-[#42946C] "}border-2 border-[#42946C] rounded-md `}>Phone</button>
                    </div> */}
                                <div className='mb-1 col-lg-12'>
                                    <h1 className='text-black text-[1.5rem] font-semibold text-center'>{vType === "email" ? "Email" : "Phone"} Verification</h1>
                                    {/* <h1 className='text-black text-[1.5rem] font-semibold text-center'>
                            Email Verification</h1> */}
                                </div>
                                <div className='mb-3 col-lg-12'>
                                    <h1 className='text-[#626973] font-sans text-[10px] text-center max-w-[320px] m-auto'>
                                        If you need to update the information you will be able to verify your account. You need to verify your Phone number and Email account
                                    </h1>
                                </div>


                                <div className='p-5  col-lg-12'>
                                    <h2 className='text-center'>
                                        {vType === "email" ?
                                            "Please enter your registered email" : "Enter your Mobile number that's end with (055)"}</h2>
                                </div>
                                {
                                    vType === "email" && (
                                        <div className='mb-5 cursor-pointer text-center col-lg-12 flex justify-center items-center border-b max-w-[280px]'>
                                            <IoMdMail className='mx-2 text-[#42946C]' />
                                            <input type={show ? 'password' : 'email'} className=' text-[#42946C] focus:outline-none' name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='aw------------d@gmail.com' />
                                            {
                                                show ?
                                                    <BsEyeSlashFill onClick={() => setShow(false)} className='mx-2 text-[#42946C]' />
                                                    :
                                                    <BsEye onClick={() => setShow(true)} className='mx-2 text-[#42946C]' />
                                            }
                                        </div>
                                    )
                                    // : (
                                    //     <div className='mb-5 cursor-pointer text-center col-lg-12 flex justify-center items-center border-b max-w-[280px]'>
                                    //         <IoMdPhonePortrait className='mx-2 text-[#42946C]' />
                                    //         <input name="password" value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className=' text-[#42946C] focus:outline-none' placeholder='+31-323-323-322' />
                                    //         <BsCheckCircleFill className='mx-2 text-[#42946C]' />
                                    //     </div>
                                    // )
                                }
                                <div className='text-center col-lg-12'>
                                    <button className='border-2 border-[#4DA676] hover:bg-[#4DA676] hover:text-white text-[rgb(77,166,118)] rounded font-sans font-semibold text-lg px-10 py-1 m-10' onClick={(e) => EmailOtp(e)}> GET OTP </button>
                                    {/* <button onClick={() => props.onBack("IdentityVerification")} className='border-2 border-[#4DA676] text-[#4DA676] rounded font-sans font-semibold text-lg px-10 py-1 m-10'><FaChevronLeft className='inline' /> GET OTP </button>
                        <button onClick={() => props.onNext("SmsVerification")} className='bg-[#4DA676] text-white px-7 py-2 rounded'>GET OTP</button> */}
                                </div>
                            </div>
                        </>
                        :
                        <div className='flex justify-center flex-col items-center'>
                            <div className='mb-3 col-lg-12'>
                                <img src={email_verify} className="w-[30%] h-auto m-auto " alt="loginimg" />
                            </div>

                            {
                                vType === "email" &&
                                <>
                                    <OtpInput
                                        value={emailotp}
                                        onChange={onChangeOTP}
                                        placeholder="----"
                                        numInputs={4}
                                        separator={<span style={{ width: "8px" }}></span>}
                                        isInputNum={true}
                                        shouldAutoFocus={true}
                                        inputStyle={{
                                            border: "1px solid #42946C",
                                            textAlign: 'center',
                                            borderRadius: "8px",
                                            width: "35px",
                                            height: "35px",
                                            fontSize: "12px",
                                            color: "#000",
                                            fontWeight: "400",
                                            caretColor: "blue"
                                        }}
                                        focusStyle={{
                                            border: "1px solid #42946C",
                                            outline: "none"
                                        }}
                                    />

                                    <button className='border-2 border-[#4DA676] hover:bg-[#4DA676] hover:text-white text-[#4DA676] rounded font-sans font-semibold text-lg px-10 py-1 m-10' onClick={(e) => VerifyEmail(e)}> Verify </button>
                                </>
                                // :
                                // <>
                                //     <OtpInput
                                //         value={phoneotp}
                                //         onChange={onChangePhoneOTP}
                                //         placeholder="--------"
                                //         numInputs={8}
                                //         separator={<span style={{ width: "8px" }}></span>}
                                //         isInputNum={true}
                                //         shouldAutoFocus={true}
                                //         inputStyle={{
                                //             border: "1px solid #42946C",
                                //             textAlign: 'center',
                                //             borderRadius: "8px",
                                //             width: "35px",
                                //             height: "35px",
                                //             fontSize: "12px",
                                //             color: "#000",
                                //             fontWeight: "400",
                                //             caretColor: "blue"
                                //         }}
                                //         focusStyle={{
                                //             border: "1px solid #42946C",
                                //             outline: "none"
                                //         }}
                                //     />

                                //     <button className='border-2 border-[#4DA676] hover:bg-[#4DA676] hover:text-white text-[#4DA676] rounded font-sans font-semibold text-lg px-10 py-1 m-10' onClick={(e) => VerifyPhone(e)}> Verify </button>
                                // </>
                            }

                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default OtpSelection