import React, { useState, useEffect } from 'react'
// import uk from "../../assets/images/u_k.png"
import ReactFlagsSelect from 'react-flags-select';
import './topform.css'
// import axios from 'axios';
// import Input from 'react-phone-number-input/input'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PopUp from '../popup/popup';
import { FcCheckmark } from 'react-icons/fc'
import { MdClose } from 'react-icons/md'
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

import { callPublicApi } from '../../utils/CallApi';
import MobileOtpPopup from '../Popups/MobileOtpPopup';

const TopForm = (props) => {

    const [select, setSelect] = useState("SE");
    const [firstname, setfirstname] = useState({ fname: "firstname", value: "", isempty: true })
    const [familyName, setFamilyName] = useState({ fname: "familyname", value: "", isempty: true })
    const [firstFamilyName, setfirstFamilyName] = useState("")
    const [secondFamilyName, setsecondFamilyName] = useState("")
    const [thirdFamilyName, setthirdFamilyName] = useState("")
    const [email, setemail] = useState({ femail: "email", value: "", isempty: true })
    const [mobileno, setmobileno] = useState({ fmobile: "mobile", value: "", isempty: true })
    const [product, setproduct] = useState("")
    const [areaofInterest, setareaofInterest] = useState([])
    const [activeField, setactiveField] = useState("firstname")
    const [countryCode, setCountryCode] = useState("")
    const [verify, setVerify] = useState(false)
    const [mobileCode, setMobileCode] = useState(false)
    const [name, setName] = useState({})
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setErrors] = useState(false)
    const [errors, seterrors] = useState({
        nameError: null,
        familyNameError: null,
        emailError: null,
        mobileError: null,
    })
    const onSelect = (code) => setSelect(code);
    const handleChangeName = (e) => {
        let { value } = e.target
        value = value.replace(/[^a-z ]/gi, '')
        if (value.includes(" ")) {
            let fvalue = value.split(" ")[0]
            let lvalue = value.split(" ")[1].toUpperCase().replace(/[^a-z ]/gi, '')
            value = fvalue + " " + lvalue
        }
        setfirstname((prevname) => ({
            ...prevname,
            value
        }))
    }
    const handleChangeFamilyName = (e) => {
        let { value } = e.target
        value = value.toUpperCase().replace(/[^a-z ]/gi, '')
        setFamilyName((prevname) => ({
            ...prevname,
            value
        }))
    }
    const handleChangeFirstFamilyName = (e) => {
        let { value } = e.target
        value = value.toUpperCase().replace(/[^a-z ]/gi, '')
        setfirstFamilyName(value)
    }
    const handleChangeSecondFamilyName = (e) => {
        let { value } = e.target
        value = value.toUpperCase().replace(/[^a-z ]/gi, '')
        setsecondFamilyName(value)
    }
    const handleChangeThirdFamilyName = (e) => {
        let { value } = e.target
        value = value.toUpperCase().replace(/[^a-z ]/gi, '')
        setthirdFamilyName(value)
    }


    const handleChangeEmail = (e) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { value } = e.target
        const validate = value.trim().toLowerCase();
        // Test if email is valid
        const isValidEmail = re.test(validate);
        console.log("isv", isValidEmail)
        if (isValidEmail === false) {
            seterrors({
                emailError: (<div className='text-red-600'>Email is invalid</div>),
            })
            setemail((prevname) => ({
                ...prevname,
                value
            }))

        }
        else {
            setemail((prevname) => ({
                ...prevname,
                value
            }))

            seterrors({
                emailError: null,
            })
        }
    }
    const handleChangeMobile = (e) => {
        //  let { value } = e.target
        // value = value.replace(/[^0-9]/gi, '')

        setmobileno((prevname) => ({
            ...prevname,
            value: e
        }))
    }

    const handleChangeProduct = (e) => {
        setproduct(e.target.value)
    }
    const handleAreaofInterest = (tags) => {
        setareaofInterest(tags)
    }
    // ===============================================================================
    const goToNameField = () => {
        if (firstname.value === "") {
            seterrors({
                nameError: (<div className='text-red-600'>Name is required</div>),
                mobileError: null,
                familyNameError: null,
                secondFamilyNameError: null,
                emailError: null,
            })
        }
        else {
            seterrors({
                nameError: null,
                mobileError: null,
                emailError: null,
                familyNameError: null,
                secondFamilyNameError: null,
            })
            setactiveField("familyname")
        }
    }


    const goToFamilyField = () => {
        if (familyName.value === "") {
            seterrors({
                familyNameError: (<div className='text-red-600'>Family Name is required</div>),
                mobileError: null,
                emailError: null,
                // familyNameError: null,
                secondFamilyNameError: null,
            })
        }
        else {
            seterrors({
                nameError: null,
                mobileError: null,
                emailError: null,
                familyNameError: null,
                secondFamilyNameError: null,
            })
            setactiveField("additionalfamilyname")
        }
    }
    const goToSecondFamilyField = () => {
        seterrors({
            nameError: null,
            mobileError: null,
            emailError: null,
            familyNameError: null,
            secondFamilyNameError: null,
        })
        setactiveField("email")

    }

    const goToEmailField = async () => {
        if (email.value === "") {
            seterrors({
                nameError: null,
                mobileError: null,
                emailError: (<div className='text-red-600'>Email is required</div>),
            })
        }
        else {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const isValidEmail = re.test(email.value);
            if (!isValidEmail) {
                seterrors({
                    nameError: null,
                    mobileError: null,
                    emailError: (<div className='text-red-600'>Email is invalid</div>),
                })
            }
            else {
                // seterrors({
                //     nameError: null,
                //     mobileError: null,
                //     emailError: null,
                // })

                try {
                    let payload = {
                        email: email.value,
                    }
                    const response = await callPublicApi("/verifications/sendCodeOnEmail", "post", payload)
                    if (response.status === "Success") {
                        toast.success(response.message)
                        setIsSuccess(true)
                        setVerify(false)
                    }
                    else {
                        toast.error("Email already exist")
                    }

                } catch (error) {
                    console.log(error);
                }
                // setactiveField("mobile")

            }

        }
    }

    const goToMobileField = async () => {
        if (mobileno.value === "") {
            seterrors((preverrors) => ({
                ...preverrors,
                mobileError: (<div className='text-red-600'>Mobile is required</div>),
            }))
        }
        else {

            try {
                let payload = {
                    phonenumber: mobileno.value,
                    channel: "sms"
                }
                const response = await callPublicApi("/verifications/sendCodeOnMobile", "post", payload)
                if (response.status === "Success") {
                    toast.success(response.message)
                    setMobileCode(true)
                    setVerify(false)
                }
                else {
                    toast.error("phone number  already exist")
                }

            } catch (error) {
                console.log(error);
            }
           
            // seterrors({
            //     nameError: null,
            //     mobileError: null,
            //     emailError: null,
            // })
            // setactiveField("productfield")

        }
    }


    const goToProductField = () => {
        setactiveField("areaofinterestfield")
    }

    const goToareaodinterestfield = async () => {
        try {
            const payload = {
                first_name: firstname.value,
                first_family_name: familyName.value,
                second_family_name: secondFamilyName,
                third_family_name: thirdFamilyName,
                email: email.value,
                password: "shayan09",
                phoneNumber: mobileno.value,
                interest: areaofInterest,
                channel: "sms",
                role: "subscriber",
                approved: false,
                location: { type: "Point", coordinates: [74.28911285869138, 31.624888273644956] }
            }
            const response = await callPublicApi("/users/signup", "post", payload)
            if (response.status === "Fail") {
                toast.error(response.message);
                setErrors(true)
            } else {
                toast.success(response.message);
                setactiveField('firstname')
            }
        } catch (error) {
            console.log(error);
        }
    }


    const VerificationEmail = (value) => {
        setIsSuccess(value)

    }


    const onSuccessEmailVarification = () => {
        setIsSuccess(false)
        setactiveField("mobile")
    }

    const onSuccessMobileVarification = () => {
        setMobileCode(false)
        setactiveField("productfield")

    } 

    useEffect(() => {

        setCountryCode(props.countryCode.toLowerCase())

        setSelect(props.countryCode)

    }, [props.countryCode])

    return (
        <section className='row mb-1'>
            <div className="col-12">

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

                <div className="flex item-center">
                    {activeField === "familyname" && (
                        <button onClick={() => setactiveField("firstname")} className=' w-16 bg-white border-gray-500 border-r text-center flex flex-col text-[20px] pt-[7px] ' >
                            <BiLeftArrow className='ml-4 text-gray-400' />
                            <span className='hover:underline ml-4 text-[9px] text-red-500 font-bold ' >BACK</span>
                        </button>
                    )}

                    {activeField === "email" && (
                        <button onClick={() => setactiveField("additionalfamilyname")} className=' w-16 bg-white  border-gray-500 border-r text-center flex flex-col text-[20px] pt-[7px] ' >
                            <BiLeftArrow className='ml-4 text-gray-400' />
                            <span className='hover:underline ml-4 text-[9px] text-red-500 font-bold ' >BACK</span>
                        </button>
                    )}

                    <div className='text-center mt-5 relative form_input w-full'>
                        {activeField === "firstname" ?
                            (
                                <>

                                    <ReactFlagsSelect
                                        selected={select}
                                        onSelect={onSelect}
                                        searchable={true}
                                        showSelectedLabel={false}
                                        showOptionLabel={false}
                                    />
                                    <div className='flex justify-end form-field'>
                                        <div className='w-[64%] relative'>
                                            <input name='firstname' value={firstname.value} onChange={handleChangeName} type="text " className=" focus:outline-none border-0  w-full placeholder:font-Poppins placeholder:font-medium p-2" placeholder="Your Name?" />
                                            <span className={`absolute top-1/4 right-3 ${firstname.value.length ? "visible" : "invisible"} `}>
                                                <FcCheckmark />
                                            </span>
                                        </div>

                                        <button onClick={goToNameField} className={`${firstname.value !== "" ? 'bg-green-600' : 'bg-light-red'} border-red-600 w-1/5 h-[40px] text-white font-Poppins font-medium`}>Enter</button>
                                    </div>
                                </>
                            ) : null}

                        {activeField === "familyname" &&
                            (
                                <>

                                    <div className='w-4/5 relative inline-block'>
                                        <input name='familyname' value={familyName.value} onChange={handleChangeFamilyName} type="text " className=" focus:outline-none border-0  w-full placeholder:font-Poppins placeholder:font-medium p-2" placeholder="Family Name?" />
                                        <span className={`absolute top-1/4 right-3 ${familyName.value.length ? "visible" : "invisible"} `}>
                                            <FcCheckmark />
                                        </span>
                                    </div>
                                    <button onClick={goToFamilyField} className={`${familyName.value !== "" ? 'bg-green-600' : 'bg-light-red'} border-red-600 w-1/5 h-[40px] text-white font-Poppins font-medium`}>Enter</button>
                                </>
                            )
                        }

                        {activeField === "additionalfamilyname" &&
                            (

                                <div className='flex flex-wrap'>
                                    <div className='col-md-1 md:block hidden'>
                                        <button onClick={() => setactiveField("familyname")} className=' w-full border-r-2 border-gray-400 text-center flex h-full justify-end items-center flex-col  ' >
                                            <BiLeftArrow size={24} className='text-gray-400  block   ' />
                                            <span className='hover:underline text-[9px] text-green-500 text-bold block'  >BACK</span>
                                        </button>
                                    </div>
                                    <div className='col-md-3 col-12'>
                                        <input name='firstFamilyName' value={firstFamilyName} onChange={handleChangeFirstFamilyName} type="text " className=" focus:outline-blue-500 md:border-0 text-center   border-b-2 border-gray-500 w-full placeholder:font-Poppins placeholder:font-medium p-2" placeholder="NAME" />
                                    </div>
                                    <div className='col-md-3 col-12'>
                                        <input name='secondFamilyName' value={secondFamilyName} onChange={handleChangeSecondFamilyName} type="text " className=" focus:outline-blue-500 text-center   md:border-x-2 border-x-0  md:border-b-0 border-b-2 md:border-gray-400 border-gray-500   w-full placeholder:font-Poppins placeholder:font-medium p-2" placeholder="NAME" />
                                    </div>
                                    <div className='col-md-3 col-12'>
                                        <input name='thirdFamilyName' value={thirdFamilyName} onChange={handleChangeThirdFamilyName} type="text " className=" focus:outline-blue-500 text-center  md:border-0    border-b-2 border-gray-500 w-full placeholder:font-Poppins placeholder:font-medium p-2" placeholder="NAME" />
                                    </div>
                                    <div className='col-md-1 col-4 md:hidden block'>
                                        <button onClick={() => setactiveField("familyname")} className=' w-full border-r-2 border-gray-400 text-center flex h-full justify-end items-center flex-col  ' >
                                            <BiLeftArrow size={24} className='text-gray-400  block   ' />
                                            <span className='hover:underline text-[9px] text-green-500 text-bold block'  >BACKll</span>
                                        </button>
                                    </div>
                                    <div className='col-md-1 col-4'>
                                        <button onClick={goToSecondFamilyField} className={`${firstFamilyName || secondFamilyName || thirdFamilyName ? 'bg-green-600' : 'bg-light-red'} border-red-600 w-full  h-[40px] text-white font-Poppins font-medium`}>Enter</button>
                                    </div>
                                    <div className='col-md-1 col-4'>
                                        <button onClick={() => setactiveField("email")} className=' w-full text-center flex h-full justify-end items-center flex-col  ' >
                                            <BiRightArrow size={24} className='text-gray-400  block   ' />
                                            <span className='hover:underline text-[9px] text-green-500 text-bold block'  >SKIP</span>
                                        </button>
                                    </div>



                                </div>
                            )
                        }

                        {activeField === "email" ?
                            (
                                <>

                                    <div className='flex justify-end form-field'>
                                        <div className='w-4/5 relative inline-block'>
                                            <input name='email' value={email.value} onChange={handleChangeEmail} type="email " className=" focus:outline-none border-0 w-full  placeholder:font-Poppins placeholder:font-medium p-2" placeholder="Email Address" />
                                            {email.value.length && !errors.emailError ?
                                                <span className={`absolute top-1/4 right-3  `}><FcCheckmark /></span>
                                                : errors.emailError && email.value !== "" ?
                                                    <span className={`  absolute top-1/3 right-3`}>  <MdClose className='text-red-600' /> </span>
                                                    :
                                                    null}
                                        </div>

                                        <button onClick={goToEmailField} className={`${!errors.emailError && email.value !== "" ? 'bg-green-600' : 'bg-light-red'} border-red-600 w-1/5 h-[40px] text-white font-Poppins font-medium`}>Enter</button>
                                    </div>
                                </>
                            ) : null}

                        {activeField === "mobile" ?
                            (
                                <>

                                    <div className=' flex justify-end form-field'>
                                        {/* <input name='mobile' value={mobileno.value} onChange={handleChangeMobile} type="text " className=" focus:outline-none border-0 w-4/5  placeholder:font-Poppins placeholder:font-medium p-2" placeholder="Your Mobile?" /> */}
                                        <div className='w-4/5'>
                                            <PhoneInput
                                                country={countryCode}
                                                containerClass="flex items-center h-full "
                                                inputClass="phone_custom_input focus:outline-none"
                                                dropdownClass={"custom-dropdown"}
                                                enableSearch
                                                disableSearchIcon
                                                countryCodeEditable={false}
                                                value={mobileno.value}
                                                onChange={handleChangeMobile} />
                                        </div>


                                        <button onClick={goToMobileField}
                                            className={`${!errors.mobileError && mobileno.value !== "" ? `bg-green-600` : 'bg-light-red'} border-red-600 w-1/5 h-[42px] text-white font-Poppins font-medium`}>
                                            Enter</button>
                                    </div>
                                </>
                            ) : null}

                        {activeField === "productfield" ?
                            (
                                <>
                                    <div className='row g-0'>
                                        <div className='col-8'>
                                            <input name='product' value={product} onChange={handleChangeProduct} type="text " className=" focus:outline-none border-0 w-full  placeholder:font-Poppins placeholder:font-medium p-2" placeholder="Product or service of interest?" />
                                        </div>
                                        <div className='col-4'>
                                            <button onClick={goToProductField}
                                                className={`${!errors.mobileError && mobileno.value !== "" ? `bg-green-600` : 'bg-light-red'} border-red-600  w-full h-[42px] text-white font-Poppins font-medium`}>
                                                Enter</button>
                                        </div>
                                    </div>
                                </>
                            ) : null}

                        {activeField === "areaofinterestfield" ?
                            (
                                <>
                                    <div className='row g-0'>
                                        <div className='col-10'>
                                            <TagsInput
                                                maxTags={5}
                                                className={"custom-react-tagsinput"}
                                                inputProps={{
                                                    className: 'custom-react-tagsinput-input',
                                                    placeholder: 'Add area of interest'
                                                }}
                                                value={areaofInterest}
                                                onChange={handleAreaofInterest} />
                                        </div>
                                        <div className='col-2'>
                                            <button onClick={goToareaodinterestfield}
                                                className={`${!errors.mobileError && mobileno.value !== "" ? `bg-green-600` : 'bg-light-red'} border-red-600  w-full h-[42px] text-white font-Poppins font-medium`}>
                                                Enter</button>
                                        </div>
                                    </div>
                                </>
                            ) : null}


                    </div>

                    <div className='skip_field  '>
                        {activeField === "additionalfamilyname" &&
                            <>


                                {/* <span className='hover:underline mr-3 ml-2' onClick={() => setactiveField("familyname")}>back</span>
                                <span className='hover:underline' onClick={() => setactiveField("email")}>or skip</span> */}
                            </>
                        }
                    </div>






                </div>
                {errors.nameError}
                {errors.familyNameError}
                {errors.secondFamilyNameError}
                {errors.emailError}
                {errors.mobileError}

            </div>

            {isSuccess && <PopUp permition={isSuccess} email={email.value} isVerify={onSuccessEmailVarification} type="verification" Toggle={(value) => VerificationEmail(value)} Firstname={name} />}
            {mobileCode && <MobileOtpPopup permition={mobileCode} email={email.value} mobile={mobileno.value} isVerify={onSuccessMobileVarification} type="verification" Toggle={(value) => VerificationEmail(value)} />}

        </section>
    )
}

export default TopForm