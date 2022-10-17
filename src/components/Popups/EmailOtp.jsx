import React, { useState, } from 'react'
import { Modal } from 'react-responsive-modal';
import { toast } from 'react-toastify';
import { callPublicApi } from '../../utils/CallApi';
import OTPInput from "otp-input-react";
import { useNavigate } from 'react-router-dom';
// import OtpInput from 'react-otp-input';

const EmailOtp = ({ permition, Toggle, email }) => {
    const [otp, setOtp] = useState("");
    // const [otps, setOtps] = useState("");
    // const [activeOtp, setActiveOtp] = useState(0);

    // const optRef = useRef(null)

    let navigate = useNavigate()



    // const handleChange = (e, index) => {
    //     const { value } = e.target
    //     const newOtp = [...otp]
    //     newOtp[index] = value.substring(value.length - 1)
    //     if (!value) setActiveOtp(index - 1)
    //     else setActiveOtp(index + 1)
    //     let Otp = newOtp.join('')
    //     setOtps(Otp)
    //     setOtp(newOtp)
    // }

    // const handleKeyDown = (key, index) => {
    //     if (key === "Backspace") setActiveOtp(index - 1)

    // }



    const handleClose = () => {
        Toggle(false)

    }
    const Verification = async (e) => {
        e.preventDefault()
        try {
            let payload = {
                email: email,
                verification_code: otp
            }
            const response = await callPublicApi("/users/verify-code", "post", payload)
            if (response.status === "Success") {
                toast.success(response.message)
                setTimeout(() => {
                    navigate("/adminsignin");

                }, 1000);
            }
            else {
                toast.error(response.message)

            }

        } catch (error) {

        }
    }


    return (
        <>

            <Modal open={permition} onClose={handleClose} center>
                <div>
                    <div className="max-w-sm mx-auto md:max-w-lg">
                        <div className="w-full">
                            <div className="bg-white h-64 py-3 rounded text-center">
                                <h1 className="text-2xl font-bold">Email Verification</h1>
                                <div className="flex flex-col mt-4">
                                    <span>we have sent you a code on your Email please verify</span>
                                </div>
                                <div className='text-center'>

                                    <OTPInput
                                        value={otp}
                                        onChange={setOtp}
                                        autoFocus
                                        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', width: '100%' }}
                                        OTPLength={4}
                                        otpType="number"
                                        disabled={false}
                                        inputStyles={{ padding: '0px', border: '1pt solid' }}
                                        secure={false}

                                    />
                                </div>
                                {/* {otp.map((_, index) => {
                                    return (
                                        <React.Fragment key={index} >
                                            <input
                                                ref={index === activeOtp ? optRef : null}
                                                className="m-2 mt-10 border h-10 w-10 text-center form-control rounded"
                                                type="number"
                                                value={otp[index]}
                                                onChange={(e) => handleChange(e, index)}
                                                onKeyDown={(e) => handleKeyDown(e, index)}
                                                id="first" maxlength="1" />
                                         
                                            {index === otp.length - 1 ? null : (
                                                <span className="w-2 py-0.5 bg-gray-400" />
                                            )}
                                        </React.Fragment>
                                    );
                                })} */}

                                <div className="flex justify-center text-center mt-5">
                                    <button className="p-2 bg-red-500 hover:bg-green-600 text-white" onClick={Verification}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>
        </>

    )
}

export default EmailOtp