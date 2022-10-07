import React, { useState } from 'react'
import ProviderSelection from '../components/DASComponents/ProviderSelection'
import logoImage from '../images/logo.png'
const DasSignupPage = () => {
    const [activeStep, setactiveStep] = useState("ProviderSelection")
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

    }

    return (
        <div className='h-screen p-0 bscontainer-fluid'>
            <div className='lg:h-full row g-0'>
                <div className='h-20 bg-bottom bg-no-repeat bg-cover lg:h-auto col-lg-4 bg-login-img '>  </div>
                <div className='col-lg-8'>
                    <div className='row g-0'>
                        <div className='mt-2 lg:mt-10 col-lg-12'>
                            <img src={logoImage} className="w-full h-auto max-w-[120px] m-auto  lg:mb-10 mb-3 " alt="loginimg" />
                        </div>
                        <div className='col-lg-12'>
                            {activeStep === "ProviderSelection" ? <ProviderSelection onNext={onNext} provider={signupForm.provider} onProviderChange={onProviderChange} /> : null}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DasSignupPage