import React, { useState } from 'react'
import { FaRegUser, FaUnlockAlt, FaCheckCircle, FaCheckDouble, FaCloudUploadAlt } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
import { callApi, callPublicApi } from '../../utils/CallApi';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    name: yup.string().required('Business Name is Required'),
    employe: yup.string().required('Employe is Required'),
    industry: yup.string().required('Industry  is Required'),
    category: yup.string().required('Category is Required'),


});

const CompanyInformation = (props) => {
    const [logo, setLogo] = useState('')
    const [portfolio, setPortfolio] = useState('')

    const {
        register,
        watch,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });



    const allcatagories = [
        { id: 0, name: "IT" }]
    const allindustry = [
        { id: 0, name: "software development" },
        { id: 1, name: "software documentation" },
        { id: 2, name: "QA" },
        { id: 3, name: "software designs" }]

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const payload = {
    //                 "sortproperty": "createdAt",
    //                 "sortorder": -1,
    //                 "offset": 0,
    //                 "limit": 15

    //             }

    //             const payloadStore = {
    //                 sortproperty: "created_at",
    //                 sortorder: -1,
    //                 offset: 0,
    //                 limit: 50,
    //                 query: {
    //                     critarion: { active: true },
    //                     addedby: "_id email first_name",
    //                     lastModifiedBy: "_id email first_name"
    //                 }
    //             }
    //             const responseCata = await callApi("/taskCategories/getTaskCategoriesWithFullDetails", "post", payload)
    //             setallcatagories(responseCata?.data?.taskCategories)
    //             const responseIndustry = await callApi("/taskerCompanies/getTaskerCompaniesWithFullDetails", "post", payloadStore)
    //             setallIndustry(responseIndustry?.data?.taskerCompanies)
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     })();

    // }, [])


    const handleFile = async (e) => {
        try {
            let file = e.target.files[0]
            let name = e.target.name
            const formData = new FormData()
            formData.append('file', file)
            let res = await callPublicApi('/uploads/uploadProductImgs', "post", formData)
            if (res) {
                console.log("Res", res)
                if (name === "logo") {
                    setLogo(res[0]?.url)
                    toast.success("File are Uploaded");
                }
                else {
                    setPortfolio(res[0]?.url)
                    toast.success("File are Uploaded");

                }
            }
        }
        catch (err) {

        }
    }


    const onSubmit = async (data) => {

        props?.SignUpDataComp(data)
        props.onNext('ReferralLink')

    }



    return (
        <div className='w-full px-4 lg:px-16'>
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
            <div style={{ boxShadow: "0px 3px 6px #00000029" }} className="border border-[#70707045]  pt-4 pb-1 lg:px-6 px-6 rounded-md font-sans">
                <h1 className='text-[#626973] text-center font-sans font-bold text-lg mb-1'>Company Information</h1>
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='justify-center row g-0'>
                        <div className='mb-3 col-lg-7'>
                            <h1 className='text-[#707070] text-sm ml-5'>Business Logo</h1>
                            <label className='border py-2 block rounded-md px-3 w-full border-[#707070] text-[#707070] text-sm font-sans cursor-pointer'>
                                <FaCloudUploadAlt className='inline mr-3' />  {logo ? "File Successfully uploaded" : "Upload business logo"}
                                <input type="file" onChange={handleFile} name="logo" hidden />
                            </label>
                        </div>
                        <div className='mb-3 col-lg-7'>
                            <h1 className='text-[#707070] text-sm ml-5'>Business Name</h1>
                            <input className='border py-2 block rounded-md px-3 w-full border-[#707070] text-[#707070] text-sm font-sans focus:outline-none placeholder:text-[#707070]'
                                {...register(('name'))}
                                placeholder='Enter Your Business Name' />
                            {errors.name && (
                                <p className="text-red-500 text-sm">{errors.name.message}</p>
                            )}
                        </div>
                        <div className='mb-3 col-lg-7'>
                            <h1 className='text-[#707070] text-sm ml-5'>Number of Employees</h1>
                            <input  {...register(('employe'))} className='border py-2 block rounded-md px-3 w-full border-[#707070] text-[#707070] text-sm font-sans focus:outline-none placeholder:text-[#707070]' placeholder='Enter Number of employees (Numbers only)' type="Number" />
                            {errors.employe && (
                                <p className="text-red-500 text-sm">{errors.employe.message}</p>
                            )}
                        </div>
                        <div className='mb-3 col-lg-7'>
                            <h1 className='text-[#707070] text-sm ml-5'>Industry</h1>
                            <div className="relative dropdown">
                                <select className='border font-sans p-2 text-sm border-[#707070] text-[#707070] w-full rounded-md focus:outline-none focus:ring-0 transition duration-150 ease-in-out ' {...register('industry')}>
                                    <option value="">Select Industry</option>
                                    {
                                        allindustry?.map((cat, i) => (
                                            <option key={i} value={cat?._id}>{cat?.name}</option>
                                        ))
                                    }
                                </select>
                                {errors.industry && (
                                    <p className="text-red-500 text-sm">{errors.industry.message}</p>
                                )}
                                {/* <button className=" dropdown-toggle py-2 px-3  border font-sans text-sm border-[#707070] text-[#707070] w-full rounded-md justify-between focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center whitespace-nowrap " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Industry
                                <IoChevronDownCircleOutline size={20} className='inline' />
                            </button>
                            <ul style={{ boxShadow: "0px 3px 6px #00000029" }} className="absolute z-50 hidden float-left w-full py-2 m-0 text-base text-left list-none bg-white border-none rounded-b-lg dropdown-menu min-w-max bg-clip-padding" aria-labelledby="dropdownMenuButton1">
                                <li onCl>
                                    <p className='block w-full px-2 py-2 text-sm font-normal text-[#707070] font-sans bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-gray-100'>IT</p>
                                </li>
                            </ul> */}
                            </div>
                        </div>
                        <div className='mb-3 col-lg-7'>
                            <h1 className='text-[#707070] text-sm ml-5'>Category</h1>
                            <div className="relative dropdown">

                                <select {...register('category')} className='border font-sans p-2 text-sm border-[#707070] text-[#707070] w-full rounded-md focus:outline-none focus:ring-0 transition duration-150 ease-in-out '>
                                    <option value="">Select Category</option>
                                    {
                                        allcatagories?.map((cat, i) => (
                                            <option key={i} value={cat?._id}>{cat?.name}</option>
                                        ))
                                    }
                                </select>
                                {errors.category && (
                                    <p className="text-red-500 text-sm">{errors.category.message}</p>
                                )}
                            </div>
                        </div>
                        <div className='mb-3 col-lg-7'>
                            <h1 className='text-[#707070] text-sm ml-5'>Business Portfolio</h1>
                            <label className='border py-2 block rounded-md px-3 w-full border-[#707070] text-[#707070] text-sm font-sans cursor-pointer'>
                                <FaCloudUploadAlt className='inline mr-3' />  Upload business Portfolio
                                <input type="file"  onChange={handleFile} hidden />
                            </label>
                        </div>
                        <div className='mb-3 text-center col-lg-7'>
                            {/* <button onClick={() => props.onBack("ProviderSelection")} className='font-sans font-medium text-lg border-2 border-[#4DA676] rounded px-16 py-1 text-[#4DA676] hover:text-white hover:bg-[#4DA676] transition-all m-10'><IoChevronBack className='inline' />Back</button> */}
                            <button className='font-sans font-medium text-lg border-2 border-[#4DA676] rounded px-16 py-1 text-[#4DA676] hover:text-white hover:bg-[#4DA676] transition-all'>Next <IoChevronForward className='inline' /></button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default CompanyInformation