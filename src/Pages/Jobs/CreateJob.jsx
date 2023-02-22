import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { FcCheckmark } from 'react-icons/fc'
import { MdClose,  } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';

import { Link } from "react-router-dom"
import { callApi } from '../../utils/CallApi';

const schema = yup.object({
    job_title: yup.string().required(),
    salary: yup.string().required(),
    description: yup.string().required(),
    jobtype: yup.string().required(),
    jobstatus: yup.string().required(),
    jobclass: yup.string().required(),
    employer: yup.string().required(),
    // age: yup.number().positive().integer().required(),
}).required();

const CreateJob = () => {
    const [file, setFile] = useState('')
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();



    const [expiryDate, setexpiryDate] = useState({ day: dd, month: mm, year: yyyy })
    const token = useSelector((state) => state.userAuth.loginInfo.token);
    const UserData = useSelector((state) => state.userAuth.userInfo);
    // let navigate = useNavigate();
    // const [jobModel, setjobModel] = useState({
    //     expiryDate: new Date(),
    //     job_title: "",
    //     salary: "",
    //     description: "",
    //     jobtype: "",
    //     jobstatus: "",
    //     jobclass: "",
    //     employer: "",
    //     job_image_url: "/uploads/dp/default.png",
    //     jobCategory: ["62fa17bbdd8f3425747ee221", "62fa188bdd8f3425747ee222"],
    //     physicalLocation: {
    //         country: "Lahore",
    //         state: "Lahore",
    //         province: "Lahore",
    //         city: "Lahore"
    //     },
    //     location: {
    //         type: "Point",
    //         coordinates: [
    //             74.28911285869138,
    //             31.624888273644956
    //         ]
    //     }
    // })







    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
    
const handleImage = async (e) => {
    let file = e.target.files[0]

    let formData = new FormData();    
    formData.append('file', file);   //append the values with key, value pair

    try {
        const res = await callApi("/uploads/uploadJobImage", "post", formData)
        if (res) {
            let obj = Object.assign({} , ...res)
            setFile(obj.url)
            toast.success("Job Image are Successfully uploaded");
        }
        else {
            toast.error(res.message);

        }

    } catch (error) {
        console.log(error);
    }
}
    
    
    
    const onSubmit = async (data) => {
        let updated = `${expiryDate.year}-${expiryDate.month}-${expiryDate.day}`;
        try {

            let payload = {
                "job_title": data.job_title,
                "recruitmentid" : "63f4f4b3d19cb80014256535",
                "salary": data.salary,
                "description": data.description,
                "job_image_url": file,
                "jobtype": data?.jobtype,
                "jobstatus": data?.jobstatus,
                "jobclass": data?.jobclass,
                "expiryDate": updated,
                "employer": data?.employer,
                location: {
                    type: "Point",
                    coordinates: [
                        74.28911285869138,
                        31.624888273644956
                    ]
                }
            }

            // let formdata = new FormData()

            // formdata.append('job_title' , data.job_title)
            // formdata.append('job_image_url' , file)



            let response = await callApi('/jobs/createjob', 'post', payload);
            console.log(response);
            if (response.data.status === "Success") {
                // navigate("/jobs", { replace: true });
                reset()
                setFile('')
                toast.success(response.message);

            }
            else {
                toast.error(response.message);
            }

        } catch (error) {
            console.log(error);
        }
    }




    // ****************** Flatpicker Content ***********
    const renderCustomInput = ({ ref }) => (
        < div className='relative cursor-pointer'>
            <input readOnly ref={ref} // necessary  placeholder="yyy-mm-dd"
                value={expiryDate ? `${expiryDate.year}/${expiryDate.month}/${expiryDate.day}` : ''}
                className={`date_picker w-full outline-blue-400 cursor-pointer z-30  border px-2 py-2`}
            />
            <div className={`visible absolute top-3 cursor-pointer right-5`}>   <FcCheckmark />   </div>

        </div >
    )

    return (
        <div className='bscontainer-fluid'>
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row p-11'>

                    <div className='col-12 mb-6'>
                        <div className='mb-3'>
                            <ul className="inline-flex flex-wrap text-sm font-medium">
                                <li className="flex items-center">
                                    <Link to="/admindashboard" className="text-slate-500 hover:text-indigo-500" >Dashboard </Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    <Link to="/jobs" className="text-slate-500 hover:text-indigo-500" >Jobs</Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    <Link to="/jobs/create-job" className="text-slate-500 hover:text-indigo-500" href="#0">Create job</Link>
                                </li>
                            </ul>
                        </div>

                        <header className="  py-4">
                            <h2 className="font-semibold text-slate-800">Add new job </h2>
                        </header>
                    </div>
                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="job_title">Job Title</label>
                        <div className='absolute right-5 top-10'>
                            {!errors.job_title && watch('job_title') ? <FcCheckmark /> : errors.job_title ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input
                            autoComplete="off"

                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.job_title && 'border-red-500'}`}
                            {...register('job_title')}
                            name='job_title' id="job_title"
                            type="text"
                            placeholder="Job Title"
                        />

                        {errors.job_title && (
                            <p className="text-red-500 text-sm">{errors.job_title.message}</p>
                        )}
                    </div>
                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="salary">Salary </label>
                        {/* <small>suggestion: US$ 150,000 / Anum</small> */}
                        <div className='absolute right-5 top-10'>
                            {!errors.salary && watch('salary') ? <FcCheckmark /> : errors.salary ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input
                            {...register('salary')}
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.salary && 'border-red-500'}`}
                            name='salary' id="salary"
                            placeholder="US$ 150,000 / Anum"

                        />

                        {errors.salary && (
                            <p className="text-red-500 text-sm">{errors.salary.message}</p>
                        )}
                    </div>
                   

                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-3" htmlFor="employer">Employer</label>
                        <div className='absolute right-5 top-10'>
                            {!errors.employer && watch('employer') ? <FcCheckmark /> : errors.employer ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input
                            {...register('employer')}
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.employer && 'border-red-500'}`}
                            name='employer' id="employer"
                            placeholder="Employer"
                        />

                        {errors.employer && (
                            <p className="text-red-500 text-sm">{errors.employer.message}</p>
                        )}
                    </div>
                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="jobtype">jobtype</label>
                        <div className='absolute right-10 top-10'>
                            {!errors.jobtype && watch('jobtype') ? <FcCheckmark /> : errors.jobtype ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <select
                            {...register('jobtype')}
                            name="jobtype"
                            id="jobtype"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.jobtype && 'border-red-500'}`}
                        >
                            <option  value="">Select Job Type</option>
                            <option>full time</option>
                            <option>part time</option>
                            <option>internship</option>
                        </select>
                        {errors.jobtype && (
                            <p className="text-red-500 text-sm">{errors.jobtype.message}</p>
                        )}
                    </div>

                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="jobstatus">Job Status</label>
                        <div className='absolute right-10 top-10'>
                            {!errors.jobstatus && watch('jobstatus') ? <FcCheckmark /> : errors.jobstatus ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <select
                            {...register('jobstatus')}
                            name="jobstatus"
                            id="jobstatus"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.jobstatus && 'border-red-500'}`}
                        >
                            <option value="">Select Job Status </option>
                            <option >active</option>
                            <option >pending</option>
                            <option>completed</option>
                        </select>
                        {errors.jobstatus && (
                            <p className="text-red-500 text-sm">{errors.jobstatus.message}</p>
                        )}
                    </div>
                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="jobclass">Job Class</label>
                        <div className='absolute right-10 top-10'>
                            {!errors.jobclass && watch('jobclass') ? <FcCheckmark /> : errors.jobclass ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <select
                            {...register('jobclass')}
                            name="jobclass"
                            id="jobclass"
                            className={`border p-[10px] focus:outline-blue-500 rounded-sm w-full   ${errors.jobclass && 'border-red-500'}`}
                        >
                            <option  value="">Select Job Class </option>
                            <option>onsite</option>
                            <option >remote</option>
                            <option >hybrid</option>
                        </select>
                        {errors.jobclass && (
                            <p className="text-red-500 text-sm">{errors.jobclass.message}</p>
                        )}
                    </div>
                    {/* <div className='col-lg-4 mb-4 '>
                        <label className="block text-sm font-medium mb-1"  >Expiry Date</label>
                        <div className="relative">

                            <Controller
                                name={'expiryDate'}
                                control={control}
                                render={({ onChange, value }) => (
                                    <DatePicker
                                        value={value}
                                        onChange={onChange}
                                        renderInput={renderCustomInput} // render a custom input
                                        shouldHighlightWeekends
                                    />
                                )}
                            />
                            <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
                                <svg className="w-4 h-4 fill-current text-slate-500 ml-3" viewBox="0 0 16 16">
                                    <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
                                </svg>
                            </div>
                            <div className='absolute right-5 top-3 '>
                                {!errors.expiryDate ? <FcCheckmark /> : errors.expiryDate ? <div className=' text-red-500 '><MdClose /></div> : null}
                            </div>
                        </div>
                        {errors.expiryDate && (
                            <p className="text-red-500 text-sm">{errors.expiryDate.message}</p>
                        )}
                    </div> */}
                    <div className='col-lg-6'>
                        <label className="block text-sm font-medium mb-3"  >Expiry Date</label>
                        <DatePicker
                            value={expiryDate}
                            onChange={setexpiryDate}
                            renderInput={renderCustomInput} // render a custom input
                            shouldHighlightWeekends
                        />
                    </div>
                    <div className='col-lg-6'>
                        <label className="block text-sm font-medium mb-3"  >Image</label>
                        <input type="file" className={`border p-[6px] focus:outline-blue-500 rounded-sm w-full h-[30px`} onChange={handleImage} />
                        <small className='text-red-500'>only png, svg images can be added</small>
                    </div>
                    <div className='col-lg-12 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="description">Description</label>
                        <div className='absolute right-5 top-10'>
                            {!errors.description && watch('description') ? <FcCheckmark /> : errors.description ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <textarea
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.description && 'border-red-500'}`}
                            name='description' id="description"
                            {...register('description')}
                            placeholder="Desription"
                            cols={5}
                            ></textarea>

                        {errors.description && (
                            <p className="text-red-500 text-sm">{errors.description.message}</p>
                        )}
                    </div>

                    {/*  */}
                    <div className='col-lg-12'>
                        <button className="p-2 bg-red-500 hover:bg-green-600 text-white" >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateJob