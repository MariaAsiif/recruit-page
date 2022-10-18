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
import QrVideoProcess from '../components/DASComponents/QrVideoProcess'
import Dashboard from './Dashboard'
import NewDashboardPage from './NewDashboardPage'
import { useNavigate } from 'react-router-dom'
const DasSignupPage = () => {
    const [activeStep, setactiveStep] = useState("LoginPage")
    const navigate = useNavigate()
    const [loginFlow, setLoginFlow] = useState(false);
    const [signupForm, setsignupform] = useState({
        provider: "individualProvider"
    })
    const onProviderChange = (e) => {
        console.log("kgsdhfsdfds", e.target.value)
        const provider = e.target.value;
        if (provider) {
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



    }
    const onNext = (data) => {
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
    const onFlowChange = (flowStatus) => {
        setLoginFlow(flowStatus);
    }
    console.log("skjgdhfsdf", loginFlow)
    return (
        <div className='h-screen p-0 bscontainer-fluid'>
            <div className='lg:h-full row g-0'>
                <div className='h-20 bg-bottom bg-no-repeat bg-cover lg:h-auto col-lg-4 bg-login-img '>  </div>
                <div className='col-lg-8'>
                    <div className='row g-0'>
                        <div className='mt-2 lg:mt-6 col-lg-12'>
                            <img src={logoImage} className="w-full h-auto max-w-[120px] m-auto  lg:mb-4 mb-3 " alt="loginimg" />
                        </div>
                        <div className='col-lg-12 mt-15'>
                            {
                                activeStep === "LoginPage" ? <DasSignInPage onNext={(data) => onNext(data)} onLogin={(flowStatus) => onFlowChange(flowStatus)} /> :
                                    activeStep === "newAccount" ? <DASAccountSignup onNext={onNext} /> :
                                        activeStep === "IdentityVerification" ? <IdentityVerification onNext={onNext} onBack={onBack} /> :
                                            activeStep === "SmsVerification" ? <SmsVerification onNext={onNext} onBack={onBack} /> :
                                                activeStep === "OtpSelection" ? <OtpSelection onNext={onNext} onBack={onBack} /> :
                                                    activeStep === "QrVerification" ? <QrVerification onNext={onNext} onBack={onBack} /> :
                                                        activeStep === "QrVideoProcess" ? <QrVideoProcess onNext={onNext} onBack={onBack} /> :
                                                            activeStep === "ReferralLink" ? <ReferralLink onNext={onNext} flow={loginFlow} /> :
                                                                activeStep === "ProviderSelection" ? <ProviderSelection onNext={onNext} provider={signupForm.provider} onProviderChange={onProviderChange} /> :
                                                                    activeStep === "ProviderInformation" ? <ProviderInformation onNext={onNext} /> :
                                                                        activeStep === "TermsAndConditions" ? <TermsAndConditions onNext={onNext} /> :
                                                                            activeStep === "Result" ? <Result onNext={onNext} /> :
                                                                                activeStep === "Assesment" ? <Assesment onNext={onNext} onBack={onBack} /> :
                                                                                    activeStep === "CompanyInformation" ? <CompanyInformation onNext={onNext} /> :
                                                                                        activeStep === "IndividualProviderInformation" ? <ProviderInformation onNext={onNext} onBack={onBack} /> :
                                                                                            activeStep === "Dashboard" ? navigate("/newdashboard") :
                                                                                                setactiveStep("LoginPage")
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DasSignupPage