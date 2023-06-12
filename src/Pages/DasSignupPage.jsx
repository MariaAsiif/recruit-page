import React, { useState } from 'react'
import OtpSelection from '../components/DASComponents/OtpSelection'
import ProviderSelection from '../components/DASComponents/ProviderSelection'
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
import { useNavigate } from 'react-router-dom'
import { callPublicApi } from '../utils/CallApi'
import { toast, ToastContainer } from 'react-toastify'
const DasSignupPage = () => {
    const [activeStep, setactiveStep] = useState("LoginPage")
    const [formData, setFormData] = useState({})
    const [formComp, setFormComp] = useState({})
    const navigate = useNavigate()
    const [loginFlow, setLoginFlow] = useState(false);
    const [role, setRole] = useState("");
    const [emailVerify, setEmailverify] = useState(false);
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



    const SignUpData = (data) => {
        setFormData((prev) => ({ ...prev, ...data }))
        setRole("individual")
    }


    const SignUpDataComp = (data) => {
        setFormComp((prev) => ({ ...prev, ...data }))

    }


    // const OnSubmit = async () => {
    //     let payload = {
    //         "first_name": formData.first_name,
    //         "first_family_name": formData.first_family_name,
    //         "second_family_name": formData.second_family_name,
    //         "third_family_name": formData.third_family_name,
    //         "email": formData.email,
    //         "password": formData.password,
    //         "phoneNumber": formData.phoneNumber,
    //         "channel": "sms",
    //         "role": "individualtasker",
    //         "approved": "approved",
    //         "location": {
    //             "type": "Point",
    //             "coordinates": [
    //                 74.28911289869138,
    //                 31.624848273644956
    //             ]
    //         },
    //         "hourlyrate": 15,
    //         "hourlyRateCurrency": "US$",
    //         "experience": "5 Years",
    //         "taskfeedbacks": [],
    //         "taskerSkills": [],
    //         "tasksassigned": 0,
    //         "taskscompleted": 0,
    //         "completionrate": 100,
    //         "individualTasker": "",
    //         "isIndividual": true,
    //         "aboutMe": "I am a backend developer"

    //     }
    //     try {

    //         let res = await callPublicApi('/users/signup', "post", payload)
    //         if (res.status === "Success") {
    //             toast.success(res.message)
    //             setEmailverify(true)
    //         }
    //         else {
    //             toast.error(res.message)
                
    //         }
    //     }
    //     catch (err) {
    //         toast.error(err)

    //     }

    // }

    // const CompanySignup = async () => {
        // let payload = {
        //     "first_name": formComp.first_name,
        //     "first_family_name": formComp.first_family_name,
        //     "second_family_name": formComp.second_family_name,
        //     "third_family_name": formComp.third_family_name,
        //     "email": formData.email,
        //     "password": formData.password,
        //     "channel": "sms",
        //     "role": "individualtasker",
        //     "approved": "approved",
        //     "location": {
        //         "type": "Point",
        //         "coordinates": [
        //             74.28911289869138,
        //             31.624848273644956
        //         ]
        //     },
        //     "hourlyrate": 15,
        //     "hourlyRateCurrency": "US$",
        //     "experience": "5 Years",
        //     "taskfeedbacks": [],
        //     "taskerSkills": [],
        //     "tasksassigned": 0,
        //     "taskscompleted": 0,
        //     "completionrate": 100,
        //     "individualTasker": "",
        //     "isIndividual": true,
        //     "aboutMe": "I am a backend developer"

        // }
        // try {

        //     let res = await callPublicApi('/users/signup', "post", payload)
        //     if (res.status === "Success") {
        //         toast.success(res.message)
        //     }
        //     else {
        //         toast.error(res.message)

        //     }
        // }
        // catch (err) {
        //     toast.error(err)

        // }

    // }





    return (
        <div className='h-screen p-0 bscontainer-fluid'>
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
                                    activeStep === "newAccount" ? <DASAccountSignup onNext={onNext} SignUpData={(data) => SignUpData(data)} SignData={formData} CompData={formComp} role={role} /> :
                                        activeStep === "IdentityVerification" ? <IdentityVerification onNext={onNext} onBack={onBack} flow={loginFlow} /> :
                                            activeStep === "OtpSelection" ? <OtpSelection onNext={onNext} onBack={onBack} /> :
                                                activeStep === "SmsVerification" ? <SmsVerification onNext={onNext} onBack={onBack} flow={loginFlow} /> :
                                                    activeStep === "QrVerification" ? <QrVerification onNext={onNext} onBack={onBack} /> :
                                                        activeStep === "QrVideoProcess" ? <QrVideoProcess onNext={onNext} onBack={onBack} flow={loginFlow} /> :
                                                            activeStep === "ReferralLink" ? <ReferralLink onNext={onNext} /> :
                                                                activeStep === "ProviderSelection" ? <ProviderSelection onNext={onNext} provider={signupForm.provider} onProviderChange={onProviderChange} /> :
                                                                    activeStep === "ProviderInformation" ? <ProviderInformation onNext={onNext} SignUpData={(data) => SignUpData(data)} /> :
                                                                        activeStep === "TermsAndConditions" ? <TermsAndConditions onNext={onNext}   /> :
                                                                            activeStep === "Result" ? <Result onNext={onNext}  formData={formData} /> :
                                                                                activeStep === "Assesment" ? <Assesment onNext={onNext} onBack={onBack} /> :
                                                                                    activeStep === "CompanyInformation" ? <CompanyInformation onNext={onNext} SignUpDataComp={(data) => SignUpDataComp(data)} /> :
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