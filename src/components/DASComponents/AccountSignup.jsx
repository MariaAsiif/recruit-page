import React, { useState } from 'react'
import { FaCheckCircle, FaCheckDouble, FaEnvelope, FaLock, FaRegUser, FaUnlockAlt } from 'react-icons/fa'
import { IoChevronForward } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import social_group_2x from '../../images/social_group_2x.png'
import { toast } from 'react-toastify'
import { callPublicApi } from '../../utils/CallApi'
const DASAccountSignup = (props) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''

    })


    const handleChange = (e) => {
        let { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    const handleNext = async () => {
        // props.SignUpData(formData)

        let payloadComp = {
            "first_name": props.CompData.name,
            "first_family_name": "Faisal Akaram",
            "second_family_name": "Faisal Akaram",
            "third_family_name": "Faisal Akaram",
            "email": formData.email,
            "password": formData.password,
            "phoneNumber": "+923074901291",
            "channel": "sms",
            "role": "companytasker",
            "approved": "approved",
            "location": {
                "type": "Point",
                "coordinates": [
                    74.28911289869138,
                    31.624848273644956
                ]
            },
            "hourlyrate": 15,
            "hourlyRateCurrency": "US$",
            "experience": "5 Years",
            "taskfeedbacks": [],
            "taskerSkills": ["6374d33f6d35fc2fbcd4c457"],
            "tasksassigned": 0,
            "taskscompleted": 0,
            "completionrate": 100,
            "isIndividual": false,
            "aboutMe": "We are IT Company",
            "businessName": "DevOps Marks",
            "industries": [props.CompData.industries],
            "tasksCategory": [props.CompData.category],
            "businessProtfolioUrl": props.CompData.logo,
            "businessLogoUrl": props.CompData.portfolio
            
    }
   
        

            let payload = {
                "first_name": props.SignData.first_name,
                "first_family_name": props.SignData.first_family_name,
                "second_family_name": props.SignData.second_family_name,
                "third_family_name": props.SignData.third_family_name,
                "email": formData.email,
                "password": formData.password,
                "phoneNumber": +9230373323233,
                "channel": "sms",
                "role": "individualtasker",
                "approved": "approved",
                "location": {
                    "type": "Point",
                    "coordinates": [
                        74.28911289869138,
                        31.624848273644956
                    ]
                },
                "hourlyrate": 15,
                "hourlyRateCurrency": "US$",
                "experience": "5 Years",
                "taskfeedbacks": [],
                "taskerSkills": [],
                "tasksassigned": 0,
                "taskscompleted": 0,
                "completionrate": 100,
                "individualTasker": "",
                "isIndividual": true,
                "aboutMe": "I am a backend developer"
    
            }
            try {
    
                let res = await callPublicApi('/users/signup', "post", props.role === "individual" ?  payload : payloadComp)
                if (res.status === "Success") {
                    toast.success(res.message)
                    // setEmailverify(true)
                    props.onNext("TermsAndConditions")
                }
                else {
                    toast.error(res.message)
                    
                }
            }
            catch (err) {
                toast.error(err)
    
            }
    

        // if (props.emailVerify === true) {
            
        // }
    }


    const { email, password } = formData

    return (
        <div className='w-full px-4 lg:px-16'>
            <div style={{ boxShadow: "0px 3px 6px #00000029" }} className="border border-[#70707045]  pt-4 pb-1 lg:px-6 px-6 rounded-md font-sans">
                <h1 className='text-[#626973] text-center font-sans font-bold text-lg mb-1'>Account</h1>
                <p className='text-[#626973] text-center font-sans text-[10px] mb-2'>Create new Account</p>
                <div className='flex justify-center mb-4'>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#E84125]'>
                            <FaRegUser size={15} className='inline text-white' />
                        </div>
                    </div>
                    <div class=" w-[20%] flex items-center">
                        <div className='w-full h-[1px] bg-[#42946C]'></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#42946C]'>
                            <FaUnlockAlt size={15} className='inline text-white' />
                        </div>
                    </div>
                    <div class=" w-[20%] flex items-center">
                        <div className='w-full h-[1px] bg-[#E84125]'></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#E84125]'>
                            <FaCheckCircle size={15} className='inline text-white' />
                        </div>
                    </div>
                    <div class=" w-[20%] flex items-center">
                        <div className='w-full h-[1px] bg-[#E84125]'></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#E84125]'>
                            <FaCheckDouble size={15} className='inline text-white' />
                        </div>
                    </div>
                    <div class=" w-[20%] flex items-center">
                        <div className='w-full h-[1px] bg-[#E84125]'></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#E84125]'>
                            <FaCheckDouble size={15} className='inline text-white' />
                        </div>
                    </div>
                </div>
                <div className='justify-center row g-0'>
                    <div className='mb-3 col-lg-7'>
                        {/* <div className='mb-3 col-lg-7'>
                        <h1 className='text-[#707070] text-sm ml-5'>First Name</h1>
                        <input onChange={(e) => handleChange(e)} value={first_name} name="first_name" className='border py-2 block rounded-md px-3 w-full border-[#707070] text-[#707070] text-sm font-sans focus:outline-none placeholder:text-[#707070]' placeholder='Enter Your First Name' />
                    </div> */}
                        <h1 className='text-[#707070] text-sm ml-5'>Email Address</h1>
                        <label className='border py-2 block rounded-md px-3 w-full border-[#707070] text-[#707070] text-sm font-sans cursor-pointer'>
                            <FaEnvelope className='inline mr-3' />
                            <input className="w-[90%] border-transparent focus:border-transparent focus:ring-0 focus:!outline-none
" placeholder='Enter your email here' type="email" name="email" value={email} onChange={handleChange} />
                        </label>
                    </div>
                    <div className='mb-3 col-lg-7'>
                        <h1 className='text-[#707070] text-sm ml-5'>New Password</h1>
                        <label className='border py-2 block rounded-md px-3 w-full border-[#707070] text-[#707070] text-sm font-sans cursor-pointer'>
                            <FaLock className='inline mr-3' />
                            <input placeholder='Enter new password' className="w-[90%] border-transparent focus:border-transparent focus:ring-0 focus:!outline-none
" type="password" name="password" value={password} onChange={handleChange} />
                        </label>
                    </div>


                    <div className='mb-3 text-center col-lg-7'>
                        <button onClick={() => handleNext()} className='font-sans font-medium text-lg border-2 border-[#4DA676] rounded px-16 py-1 text-[#4DA676] hover:text-white hover:bg-[#4DA676] transition-all'>Sigin Up <IoChevronForward className='inline' /></button>
                        <h1 className='text-[#707070] font-medium mb-8 text-xs'>Already have an account. <Link className='text-[#4DA676] underline' onClick={() => props.onNext("LoginPage")}>Login</Link></h1>
                    </div>
                    <img src={social_group_2x} alt="social" className='w-full h-auto max-w-[380px] m-auto mb-10' />

                </div>

            </div>
        </div>
    )
}

export default DASAccountSignup