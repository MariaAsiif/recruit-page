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
import DasSignInPage from './DasSignInPage'
import DASAccountSignup from '../components/DASComponents/AccountSignup'
const DasSignupPage = () => {
    const [activeStep, setactiveStep] = useState("LoginPage")
    const [signupForm, setsignupform] = useState({
        provider: ""
    })
    const onProviderChange = (e) => {
        console.log("kgsdhfsdfds", e.target.value)
        const provider = e.target.value;
        setsignupform((prevform) => ({
            ...prevform,
            provider: provider
        }))
        if (provider === "individualProvider") {
            setactiveStep("ProviderInformation")
        } else {
            setactiveStep("CompanyInformation")
        }

    }
    const onNext = (data) => {
        console.log("kjshdgfdsfdsf", data)
        if (signupForm === "individualProvider") {
            setactiveStep("ProviderInformation")
        } else if (signupForm === "companyInformation") {
            setactiveStep("CompanyInformation")
        } else {
            setactiveStep(data)
        }
    }
    const onBack = (data) => {
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
                            {
                                activeStep === "LoginPage" ? <DasSignInPage onNext={(data) => onNext(data)} /> :
                                    activeStep === "newAccount" ? <DASAccountSignup onNext={onNext} /> :
                                        activeStep === "ProviderSelection" ? <ProviderSelection onNext={onNext} provider={signupForm.provider} onProviderChange={onProviderChange} /> :
                                            activeStep === "ProviderInformation" ? <ProviderInformation onNext={onNext} /> :
                                                activeStep === "ReferralLink" ? <ReferralLink onNext={onNext} /> :
                                                    activeStep === "Assesment" ? <Assesment onNext={onNext} onBack={onBack} /> :
                                                        activeStep === "Result" ? <Result onNext={onNext} /> :
                                                            activeStep === "IdentityVerification" ? <IdentityVerification onNext={onNext} onBack={onBack} /> :
                                                                activeStep === "SmsVerification" ? <SmsVerification onNext={onNext} onBack={onBack} /> :
                                                                    activeStep === "QrVerification" ? <TermsAndConditions onNext={onNext} onBack={onBack} /> :
                                                                        setactiveStep("LoginPage")
                                //     activeStep === "OtpSelection" ? <OtpSelection onNext={onNext} onBack={onBack} /> :
                                //         activeStep === "OtpVerification" ? <OtpVerification onNext={onNext} onBack={onBack} /> :
                                //             activeStep === "IndividualProviderInformation" ? <ProviderInformation onNext={onNext} onBack={onBack} /> :
                                //                 
                                //                     
                                //                         
                                //                             activeStep === "TermsAndConditions" ? <TermsAndConditions onNext={onNext} /> :
                                //                                 
                                //                                     
                                //                                         
                                //                                             activeStep === "CompanyInformation" ? <CompanyInformation onNext={onNext} /> :
                                //                                                 
                                //                                                     
                                //                                                         activeStep === "IdentityVerification" ? <IdentityVerification onNext={onNext} /> : null
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DasSignupPage