import React, { useState } from 'react'
import AccountUpdatedStep from '../components/ProfileSettingComponents/AccountUpdatedStep'
import BasicInfoStep from '../components/ProfileSettingComponents/BasicInfoStep'
import MainProfile from '../components/ProfileSettingComponents/MainProfile'
import NeedHelp from '../components/ProfileSettingComponents/NeedHelp'
import OTPVerifyStep from '../components/ProfileSettingComponents/OTPVerifyStep'
import PasswordSecurityStep from '../components/ProfileSettingComponents/PasswordSecurityStep'
import ProfilerStepper from '../components/ProfileSettingComponents/ProfilerStepper'
import VerifyAccountStep from '../components/ProfileSettingComponents/VerifyAccountStep'

// import profile_animation from "../assets/images/profile_animation.gif"

const ProfileSetting = () => {
    const [activeStep, setactiveStep] = useState(1)
    const onNextStep = () => {
        if (activeStep === 5) {
            setactiveStep(1)
        } else {
            setactiveStep(activeStep + 1)
        }

    }
    return (
        <div className='bscontainer-fluid lg:px-6  py-6'>
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
                            <MainProfile />
                        </div>
                        <div className='col-lg-12'>
                            <NeedHelp />
                        </div>
                    </div>
                </div>

                <div className='col-lg-9'>
                    <div className='row gy-4 g-0 gx-sm-4'>
                        <div className='col-lg-12 '>
                            <ProfilerStepper />
                        </div>
                        <div className='col-lg-12'>
                            <div style={{ boxShadow: "0px 3px 6px #00000029" }} className='bg-white rounded-xl px-4 py-8'>
                                <div className='min-h-[470px]'>
                                    <div className='row'>
                                        {activeStep === 1 ?
                                            < BasicInfoStep /> :
                                            activeStep === 2 ?
                                                <PasswordSecurityStep /> :
                                                activeStep === 3 ?
                                                    <VerifyAccountStep /> :
                                                    activeStep === 4 ?
                                                        <OTPVerifyStep /> :
                                                        activeStep === 5 ?
                                                            <AccountUpdatedStep /> : null
                                        }
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <button onClick={onNextStep} className='bg-[#E84025] text-right hover:bg-[#65A33A] font-semibold font-sans rounded-md px-9 py-3 text-white '>Next Step</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSetting