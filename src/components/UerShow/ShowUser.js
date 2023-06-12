import React, { useState } from 'react'
import ModalBasic from '../ModelBasic';
import Flatpickr from 'react-flatpickr';
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { validateJob } from '../../helpers/validation';
import { useFormJob } from '../../helpers/useForm';
import { FcCheckmark } from 'react-icons/fc'
import { MdClose, MdOutlineClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
const ShowUser = ({ permition,toggle , title, data, type }) => {
    const [feedbackModalOpen, setFeedbackModalOpen] = useState(false)
    const token = useSelector((state) => state.userAuth.loginInfo.token);
    let navigate = useNavigate();
    const [jobModel, setjobModel] = useState({
        expiryDate: "",
        job_title: "",
        salary: "",
        description: "",
        jobtype: "",
        jobstatus: "",
        jobclass: "",
        employer: "",
        job_image_url: "/uploads/dp/default.png",
        jobCategory: ["62fa17bbdd8f3425747ee221", "62fa188bdd8f3425747ee222"],
        physicalLocation: {
            country: "Lahore",
            state: "Lahore",
            province: "Lahore",
            city: "Lahore"
        },
        location: {
            type: "Point",
            coordinates: [
                74.28911285869138,
                31.624888273644956
            ]
        }
    })


    const handleSaveJob = async () => {
        try {
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };
            let response = await axios.post('http://localhost:5873/jobs/createjob', values, config);
            console.log(response);
            if (response.data.status === "Success") {
                navigate("/jobs", { replace: true });
                toast.success(response.data.message);

            }
            else {
                toast.error(response.data.message);
            }

        } catch (error) {
            console.log(error);
        }
    }


    //   usefORM HOOKS

    const {
        values,
        errors,
        handleChange,
        handleExpiryDateChange,
        handleSubmit,
    } = useFormJob(handleSaveJob, validateJob);





    // ****************** Flatpicker Content ***********
    const options = {

        static: true,
        monthSelectorType: 'static',
        enableTime: false,
        dateFormat: 'M j, Y',
        defaultDate: [new Date().setDate(new Date().getDate() - 6), new Date()],
        prevArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
        nextArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
        // onReady: (selectedDates, dateStr, instance) => {
        //     instance.element.value = dateStr.replace('to', '-');
        //     const customClass = (align) ? align : '';
        //     instance.calendarContainer.classList.add(`flatpickr-${customClass}`);
        // },
        // onChange: (selectedDates, dateStr, instance) => {
        //     instance.element.value = dateStr.replace('to', '-');
        // },
    }

    return (
        <div>

            {/* <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" aria-controls="basic-modal" onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(true); }}>Send Feedback</button> */}

            <ModalBasic  id="basic-modal" modalOpen={permition} setModalOpen={toggle} title={title}>
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
                    <form onSubmit={handleSubmit} noValidate>
                        <div className='row '>

                        
                            <div className='col-lg-4 mb-4 relative'>
                                <label className="block text-sm font-medium mb-1" htmlFor="job_title">Job Title</label>
                                <div className='absolute right-5 top-10'>
                                    {!errors.job_title && values.job_title > 0 ? <FcCheckmark /> : errors.job_title || values.job_title < 0 ? <div className=' text-red-500'><MdClose /></div> : null}
                                </div>
                                <input
                                    onChange={handleChange}
                                    autoComplete="off"
                                    className={`form-input w-full  ${errors.job_title && 'border-red-500'}`}
                                    value={values.job_title || ''}
                                    name='job_title' id="job_title"
                                    // className="form-input w-full"
                                    type="text"
                                    placeholder="Job Title"
                                />

                                {errors.job_title && (
                                    <p className="text-red-500 text-sm">{errors.job_title}</p>
                                )}
                            </div>
                            <div className='col-lg-4 mb-4 relative'>
                                <label className="block text-sm font-medium mb-1" htmlFor="salary">Salary </label>
                                {/* <small>suggestion: US$ 150,000 / Anum</small> */}
                                <div className='absolute right-5 top-10'>
                                    {!errors.salary && values.salary ? <FcCheckmark /> : errors.salary ? <div className=' text-red-500'><MdClose /></div> : null}
                                </div>
                                <input
                                    onChange={handleChange}
                                    autoComplete="off"
                                    className={`form-input w-full  ${errors.salary && 'border-red-500'}`}
                                    value={values.salary || ''}
                                    name='salary' id="salary"
                                    // className="form-input w-full"
                                    type="text"
                                    placeholder="US$ 150,000 / Anum"

                                />

                                {errors.salary && (
                                    <p className="text-red-500 text-sm">{errors.salary}</p>
                                )}
                            </div>
                            <div className='col-lg-4 mb-4 relative'>
                                <label className="block text-sm font-medium mb-1" htmlFor="description">Description</label>
                                <div className='absolute right-5 top-10'>
                                    {!errors.description && values.description ? <FcCheckmark /> : errors.description ? <div className=' text-red-500'><MdClose /></div> : null}
                                </div>
                                <input
                                    onChange={handleChange}
                                    autoComplete="off"
                                    className={`form-input w-full  ${errors.description && 'border-red-500'}`}
                                    value={values.description || ''}
                                    name='description' id="description"
                                    // className="form-input w-full"
                                    placeholder="Desription"

                                    type="text" />

                                {errors.description && (
                                    <p className="text-red-500 text-sm">{errors.description}</p>
                                )}
                            </div>
                            <div className='col-lg-4 mb-4 relative'>
                                <label className="block text-sm font-medium mb-1" htmlFor="employer">Employer</label>
                                <div className='absolute right-5 top-10'>
                                    {!errors.employer && values.employer ? <FcCheckmark /> : errors.employer ? <div className=' text-red-500'><MdClose /></div> : null}
                                </div>
                                <input
                                    onChange={handleChange}
                                    autoComplete="off"
                                    className={`form-input w-full  ${errors.employer && 'border-red-500'}`}
                                    value={values.employer || ''}
                                    name='employer' id="employer"
                                    // className="form-input w-full"
                                    placeholder="Employer"

                                    type="text" />

                                {errors.employer && (
                                    <p className="text-red-500 text-sm">{errors.employer}</p>
                                )}
                            </div>
                            <div className='col-lg-4 mb-4 relative'>
                                <label className="block text-sm font-medium mb-1" htmlFor="jobtype">jobtype</label>
                                <div className='absolute right-10 top-10'>
                                    {!errors.jobtype && values.jobtype ? <FcCheckmark /> : errors.jobtype ? <div className=' text-red-500'><MdClose /></div> : null}
                                </div>
                                <select
                                    onChange={handleChange}
                                    value={values.jobtype}
                                    name="jobtype"
                                    id="jobtype"
                                    className={`form-input w-full  ${errors.jobtype && 'border-red-500'}`}
                                >
                                    <option defaultChecked disabled>Select Job Type</option>
                                    <option>full time</option>
                                    <option>part time</option>
                                    <option>internship</option>
                                </select>
                                {errors.jobtype && (
                                    <p className="text-red-500 text-sm">{errors.jobtype}</p>
                                )}
                            </div>
                            <div className='col-lg-4 mb-4 relative'>
                                <label className="block text-sm font-medium mb-1" htmlFor="jobstatus">Job Status</label>
                                <div className='absolute right-10 top-10'>
                                    {!errors.jobstatus && values.jobstatus ? <FcCheckmark /> : errors.jobstatus ? <div className=' text-red-500'><MdClose /></div> : null}
                                </div>
                                <select
                                    onChange={handleChange}
                                    value={values.jobstatus}
                                    name="jobstatus"
                                    id="jobstatus"
                                    className={`form-input w-full  ${errors.jobstatus && 'border-red-500'}`}
                                >
                                    <option defaultChecked disabled>Select Job Status </option>
                                    <option >active</option>
                                    <option >pending</option>
                                    <option>completed</option>
                                </select>
                                {errors.jobstatus && (
                                    <p className="text-red-500 text-sm">{errors.jobstatus}</p>
                                )}
                            </div>
                            <div className='col-lg-4 mb-4 relative'>
                                <label className="block text-sm font-medium mb-1" htmlFor="jobclass">Job Class</label>
                                <div className='absolute right-10 top-10'>
                                    {!errors.jobclass && values.jobclass ? <FcCheckmark /> : errors.jobclass ? <div className=' text-red-500'><MdClose /></div> : null}
                                </div>
                                <select
                                    onChange={handleChange}
                                    value={values.jobclass}
                                    name="jobclass"
                                    id="jobclass"
                                    className={`form-input w-full   ${errors.jobclass && 'border-red-500'}`}
                                >
                                    <option defaultChecked disabled>Select Job Class </option>
                                    <option>onsite</option>
                                    <option >remote</option>
                                    <option >hybrid</option>
                                </select>
                                {errors.jobclass && (
                                    <p className="text-red-500 text-sm">{errors.jobclass}</p>
                                )}
                            </div>
                            <div className='col-lg-4 mb-4 '>
                                <label className="block text-sm font-medium mb-1"  >Expiry Date</label>
                                <div className="relative">
                                    {/* <div className='absolute right-20 top-0 z-2'>
                            {!errors.jobtype && values.jobtype  ? <FcCheckmark /> : errors.jobtype ? <div className=' text-red-500'><MdClose/></div> : null }
                        </div> */}
                                    <Flatpickr data-enable-time
                                        value={values.expiryDate}
                                        placeholder="dd-mm-yyyy"
                                        onChange={handleExpiryDateChange}
                                        className={`form-input w-full pl-9 text-slate-500 hover:text-slate-600 font-medium focus:border-slate-300  first-letter: ${errors.expiryDate && 'border-red-500'}`} options={options} />
                                    <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
                                        <svg className="w-4 h-4 fill-current text-slate-500 ml-3" viewBox="0 0 16 16">
                                            <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.expiryDate && (
                                    <p className="text-red-500 text-sm">{errors.expiryDate}</p>
                                )}
                            </div>
                            <div className='col-lg-12'>
                                <button className="btn bg-red-500 hover:bg-green-600 text-white" >Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </ModalBasic>

        </div>
    )
}

export default ShowUser