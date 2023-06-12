import React, { useState } from 'react'
import { FaRegUser, FaUnlockAlt, FaCheckCircle, FaCheckDouble, FaCloudUploadAlt, FaChevronLeft } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
const ProviderInformation = (props) => {
    const [formData, setFormData] = useState({
        first_name: '',
        first_family_name: '',
        second_family_name: '',
        third_family_name: '',
    })


    const handleChange = (e) => {
        let { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    const handleNext = () => {
        props.SignUpData(formData)
        props.onNext("ReferralLink")
    }

    console.log(formData)

    let { first_name, first_family_name, second_family_name, third_family_name } = formData
    return (
        <div className='w-full px-4 lg:px-16'>
            <div style={{ boxShadow: "0px 3px 6px #00000029" }} className="border border-[#70707045]  pt-4 pb-1 lg:px-6 px-6 rounded-md font-sans">
                <h1 className='text-[#626973] text-center font-sans font-bold text-lg mb-1'>Individual Provider</h1>
                <p className='text-[#626973] text-center font-sans text-[10px] mb-2'>Please share complete details about your business</p>
                <div className='flex justify-center mb-4'>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#42946C]'>
                            <FaRegUser size={15} className='inline text-white' />
                        </div>
                    </div>
                    <div class=" w-[20%] flex items-center">
                        <div className='w-full h-[1px] bg-[#E84125]'></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#E84125]'>
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
                        <h1 className='text-[#707070] text-sm ml-5'>First Name</h1>
                        <input onChange={(e) => handleChange(e)} value={first_name} name="first_name" className='border py-2 block rounded-md px-3 w-full border-[#707070] text-[#707070] text-sm font-sans focus:outline-none placeholder:text-[#707070]' placeholder='Enter Your First Name' />
                    </div>
                    <div className='mb-3 col-lg-7'>
                        <h1 className='text-[#707070] text-sm ml-5'>Family Name</h1>
                        <input onChange={(e) => handleChange(e)} value={first_family_name} name="first_family_name" className='border py-2 block rounded-md px-3 w-full border-[#707070] text-[#707070] text-sm font-sans focus:outline-none placeholder:text-[#707070]' placeholder='Enter Your Family Name' />
                    </div>
                    <div className='mb-3 col-lg-7'>
                        <h1 className='text-[#707070] text-sm ml-5'>Second Family Name</h1>
                        <input onChange={(e) => handleChange(e)} value={second_family_name} name="second_family_name" className='border py-2 block rounded-md px-3 w-full border-[#707070] text-[#707070] text-sm font-sans focus:outline-none placeholder:text-[#707070]' placeholder='Enter Your Second Family Name' />
                    </div>
                    <div className='mb-3 col-lg-7'>
                        <h1 className='text-[#707070] text-sm ml-5'>Third Family Name</h1>
                        <input onChange={(e) => handleChange(e)} value={third_family_name} name="third_family_name" className='border py-2 block rounded-md px-3 w-full border-[#707070] text-[#707070] text-sm font-sans focus:outline-none placeholder:text-[#707070]' placeholder='Enter Your Third Family Name' />
                    </div>
                    {/* <div className='mb-3 col-lg-7'>
                        <h1 className='text-[#707070] text-sm ml-5'>Profile Picture</h1>
                        <label className='border py-2 block rounded-md px-3 w-full border-[#707070] text-[#707070] text-sm font-sans cursor-pointer'>
                            <FaCloudUploadAlt className='inline mr-3' />Upload Profile Picture
                            <input type="file" hidden />
                        </label>
                    </div> */}
                    {/* <div className='col-lg-7'>
                        <div className='row '>
                            <div className='mb-3 col-lg-6'>
                                <h1 className='text-[#707070] text-sm ml-5'>CNIC (Without Dash)</h1>
                                <input className='border py-2 block rounded-md px-3 w-full border-[#707070] text-[#707070] text-sm font-sans focus:outline-none placeholder:text-[#707070]' placeholder='--- --- ---' />
                            </div>
                            <div className='mb-3 col-lg-6'>
                                <h1 className='text-[#707070] text-sm ml-5'>D O B</h1>
                                <input type="date" className='border py-2 block rounded-md px-3 w-full border-[#707070] text-[#707070] text-sm font-sans focus:outline-none placeholder:text-[#707070]' placeholder='D O B' />
                            </div>
                        </div>
                    </div> */}



                    <div className='mb-3 text-center col-lg-7'>
                        {/* <button onClick={() => props.onBack("OtpSelection")} className='border-2 border-[#4DA676] text-[#4DA676] rounded font-sans font-semibold text-lg px-10 py-1 m-10'><FaChevronLeft className='inline' /> Back </button> */}
                        <button onClick={() => handleNext()} className='font-sans font-medium text-lg border-2 border-[#4DA676] rounded px-16 py-1 text-[#4DA676] hover:text-white hover:bg-[#4DA676] transition-all'>Next <IoChevronForward className='inline' /></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProviderInformation