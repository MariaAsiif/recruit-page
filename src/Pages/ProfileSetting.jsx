import React, { useEffect, useState } from 'react'
import AccountUpdatedStep from '../components/ProfileSettingComponents/AccountUpdatedStep'
import BasicInfoStep from '../components/ProfileSettingComponents/BasicInfoStep'
import MainProfile from '../components/ProfileSettingComponents/MainProfile'
import NeedHelp from '../components/ProfileSettingComponents/NeedHelp'
import OTPVerifyStep from '../components/ProfileSettingComponents/OTPVerifyStep'
import PasswordSecurityStep from '../components/ProfileSettingComponents/PasswordSecurityStep'
import ProfilerStepper from '../components/ProfileSettingComponents/ProfilerStepper'
import VerifyAccountStep from '../components/ProfileSettingComponents/VerifyAccountStep'
import { useDispatch, useSelector } from 'react-redux'
import { callApi } from '../utils/CallApi'
import { ToastContainer, toast } from 'react-toastify'
import { updateProfile } from '../Redux/RecruitAuthSlice/RecruitAuthSlice';
import { FiEdit } from 'react-icons/fi'

// import profile_animation from "../assets/images/profile_animation.gif"

let state_data = {
    one: false,
    two: false,
    three: false,
    forth: false,
    five: false

}

const ProfileSetting = () => {
    const [active, setActive] = useState(0)
    const [userinfo, setUserinfo] = useState({})
    const [isEdit, setIsedit] = useState(false)
    const [activeIndex, setActiveIndex] = useState(state_data)

    const [userEmail, setUserEmail] = useState('')


    const dispatch = useDispatch()

    const { first_name, first_family_name, second_family_name, third_family_name, email, phoneNumber } = useSelector((state) => state?.recruitAuth?.userInfo)





    const handleNext = async (data) => {
        let activeIndexs = active + 1
        setActive(activeIndexs)
        if (activeIndexs === 2) {
            setActiveIndex((perv) => ({
                ...perv,
                two: true
            }))
            // setformdata((prevdata) => ({
            //     ...prevdata,
            //     ...data

            // }))
        }
        else if (activeIndexs === 3) {


            setActiveIndex((perv) => ({
                ...perv,
                three: true
            }))
            // setformdata((prevdata) => ({
            //     ...prevdata,
            //     ...data

            // }))
        }
        else if (activeIndexs === 4) {



            setActiveIndex((perv) => ({
                ...perv,
                forth: true
            }))


        }
        else if (activeIndexs === 5) {
            setActiveIndex((perv) => ({
                ...perv,
                five: true
            }))
            // setformdata((prevdata) => ({
            //     ...prevdata,
            //     ...data

            // }))
        }
        else if (activeIndexs === 6) {

            try {
                let option = {
                    first_name: userinfo.first_name,
                    first_family_name: userinfo.first_family_name,
                    second_family_name: userinfo.second_family_name,
                    third_family_name: userinfo.third_family_name,
                    email: userinfo.email,
                    password: userinfo.password,
                    phoneNumber: userinfo.phoneNumber,
                    securityQuestions: userinfo.securityQuestions,
                    channel: "sms",
                    location: {
                        type: "Point",
                        "coordinates": [
                            74.28911289869138,
                            31.624848273644956
                        ]
                    }
                }

                const res = await callApi('/users/update-profile', 'post', option)
                if (res.status === 'Success') {
                    dispatch(updateProfile(res.data))
                    setActiveIndex(state_data)
                    setIsedit(false)
                } else {
                    toast.error(res.message);
                }
            } catch (error) {
                console.log(error);
            }




            // setformdata((prevdata) => ({
            //     ...prevdata,
            //     ...data

            // }))
        }
    }
    useEffect(() => {
        if (isEdit === true) {
            setActive(1)
            setActiveIndex((perv) => ({
                ...perv,
                one: true
            }))
        }
    }, [isEdit])

    // const onNextStep = () => {
    //     if (activeStep === 5) {
    //         setactiveStep(1)
    //     } else {
    //         setactiveStep(activeStep + 1)
    //     }

    // }
    return (
        <div className='bscontainer-fluid lg:px-6  py-6'>
            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <div className='row mb-6'>
                <div className='col-lg-12'>
                    <h1 className='font-sans font-bold text-lg mb-1'>Edit Profile</h1>
                    <h1 className='text-[#949799] font-sans font-normal text-xs'>Based on your preferences</h1>
                </div>
            </div>
            <div className='row g-sm-4 g-0 '>


                <div className='col-lg-3 lg:mb-0 mb-6 '>
                    <div className='row gy-4 gx-0 gx-sm-4'>
                        <div className='col-lg-12'>
                            <MainProfile isEdit={isEdit} setIsedit={setIsedit} />
                        </div>
                        <div className='col-lg-12'>
                            <NeedHelp />
                        </div>
                    </div>
                </div>

                <div className='col-lg-9'>
                    <div className='row gy-4 g-0 gx-sm-4'>
                        <div className='col-lg-12 '>
                            <ProfilerStepper step={activeIndex} />
                        </div>

                        <div className='col-lg-12 relative'>
                            <div>
                                {isEdit === false &&
                                    <label className='absolute cursor-pointer top-3 right-5 bg-white border rounded-md text-black items-center p-[7px] flex ' onClick={() => setIsedit(true)}>
                                        <h1 className='mx-2'>Edit</h1>
                                        <FiEdit size={15} />
                                    </label>
                                }
                            </div>
                            <div style={{ boxShadow: "0px 3px 6px #00000029" }} className='bg-white rounded-xl px-4 py-8'>
                                <div className='max-h-[430px]'>
                                    {
                                        isEdit ?
                                            <div className='row'>
                                                {active === 1 ?
                                                    < BasicInfoStep userInfo={setUserinfo} handleNext={handleNext} /> :
                                                    active === 2 ?
                                                        <PasswordSecurityStep userInfo={setUserinfo} handleNext={handleNext} /> :
                                                        active === 3 ?
                                                            <VerifyAccountStep setUserEmail={setUserEmail} handleNext={handleNext} /> :
                                                            active === 4 ?
                                                                <OTPVerifyStep userEmail={userEmail} handleNext={handleNext} /> :
                                                                active === 5 ?
                                                                    <AccountUpdatedStep handleNext={handleNext} /> : null
                                                }
                                            </div>
                                            :
                                            <div className="row">
                                                <>
                                                    <div className='col-lg-6 mb-10'>
                                                        <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>First Name</label>
                                                        <input value={first_name} disabled className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[14px]' placeholder='First Name' />
                                                    </div>
                                                    <div className='col-lg-6 mb-10'>
                                                        <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>FAMILY NAME </label>
                                                        <input value={first_family_name} disabled className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[16px]' placeholder='Family name' />
                                                    </div>
                                                    <div className='col-lg-6 mb-10'>
                                                        <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>Second FAMILY NAME </label>
                                                        <input value={second_family_name} disabled className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[16px]' placeholder='Second Family name' />
                                                    </div>
                                                    <div className='col-lg-6 mb-10'>
                                                        <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>Third FAMILY NAME </label>
                                                        <input value={third_family_name} disabled className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[16px]' placeholder='Third Family name' />
                                                    </div>
                                                    <div className='col-lg-6 mb-10'>
                                                        <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>Mobile Number</label>
                                                        <input value={phoneNumber} disabled className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[14px]' placeholder='Mobile Number' />
                                                    </div>
                                                    <div className='col-lg-6 mb-10'>
                                                        <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>Email Address</label>
                                                        <input value={email} disabled className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[14px]' placeholder='Email' />
                                                    </div>
                                                    {/* <div className='col-lg-6 mb-10'>
                                                        <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>ReEnter Email Address</label>
                                                        <input value={email} disabled className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[14px]' placeholder='Email' />
                                                    </div> */}
                                                    {/* <div className='col-lg-6 mb-10'>
                                                <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>Address</label>
                                                <input disabled className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[14px]' placeholder='Address' />
                                            </div> */}
                                                    {/* <div className='col-lg-6 mb-10'>
                                                <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>Location</label>
                                                <input disabled className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[14px]' placeholder='Location' />
                                            </div>
                                            <div className='col-lg-6 mb-10'>
                                                <label className='text-[#999FA9] text-[16px] mb-2 font-light block'>Postal Code</label>
                                                <input disabled className='border-b border-[#999FA9] focus:outline-none w-full text-[#626973] font-sans text-[14px]' placeholder='Postal Code' />
                                            </div> */}
                                                </>
                                            </div>
                                    }
                                </div>
                                {/* {isEdit &&
                                    <div className='text-right'>
                                        <button onClick={handleNext} className='bg-[#42946C] text-right  font-semibold font-sans rounded-md px-9 py-3 text-white '>{active === 5 ? "Finish" : "Next Step"}</button>
                                    </div>
                                } */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSetting