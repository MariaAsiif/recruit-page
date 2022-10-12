import React, { useState } from 'react'
import OtpSelection from '../components/DASComponents/OtpSelection'
import ProviderSelection from '../components/DASComponents/ProviderSelection'
import OtpVerification from '../components/DASComponents/OtpVerification'
import logoImage from '../images/logo.png'
import CompanyInformation from '../components/DASComponents/CompanyInformation'
import ReferralLink from '../components/DASComponents/ReferralLink'
import IdentityVerification from '../components/DASComponents/IdentityVerification'
import SmsVerification from '../components/DASComponents/SmsVerification'
import QrVerification from '../components/DASComponents/QrVerification'
import ProviderInformation from '../components/DASComponents/ProviderInformation'
import TermsAndConditions from '../components/DASComponents/TermsAndConditions'
import Assesment from '../components/DASComponents/Assesment'
import Result from '../components/DASComponents/Result'
const DasSignupPage = () => {
    const [activeStep, setactiveStep] = useState("OtpSelection")
    const [signupForm, setsignupform] = useState({
        provider: ""
    })
    const onProviderChange = (e) => {
        setsignupform((prevform) => ({
            ...prevform,
            provider: e.target.value
        }))
    }
    const onNext = (data) => {
        console.log("kjshdgfdsfdsf", data)
        setactiveStep(data)
    }

    return (
        <div className='h-screen p-0 bscontainer-fluid'>
            <div className='lg:h-full row g-0'>
                <div className='h-20 bg-bottom bg-no-repeat bg-cover lg:h-auto col-lg-4 bg-login-img '>  </div>
                <div className='col-lg-8'>
                    <div className='row g-0'>
                        <div className='mt-2 lg:mt-6 col-lg-12'>
                            <img src={logoImage} className="w-full h-auto max-w-[120px] m-auto  lg:mb-4 mb-3 " alt="loginimg" />
                        </div>
                        <div className='col-lg-12'>
                            {activeStep === "OtpSelection" ? <OtpSelection onNext={onNext} /> :
                                activeStep === "OtpVerification" ? <OtpVerification onNext={onNext} /> :
                                    activeStep === "IndividualProviderInformation" ? <ProviderInformation onNext={onNext} /> :
                                        activeStep === "IdentityVerification" ? <IdentityVerification onNext={onNext} /> :
                                            activeStep === "SmsVerification" ? <SmsVerification onNext={onNext} /> :
                                                activeStep === "QrVerification" ? <TermsAndConditions onNext={onNext} /> :
                                                    activeStep === "TermsAndConditions" ? <TermsAndConditions onNext={onNext} /> :
                                                        activeStep === "Assesment" ? <Assesment onNext={onNext} /> :
                                                            activeStep === "Result" ? <Result onNext={onNext} /> :
                                                                activeStep === "ProviderSelection" ? <ProviderSelection onNext={onNext} provider={signupForm.provider} onProviderChange={onProviderChange} /> :
                                                                    activeStep === "CompanyInformation" ? <CompanyInformation onNext={onNext} /> :
                                                                        activeStep === "ReferralLink" ? <ReferralLink onNext={onNext} /> : null
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DasSignupPage