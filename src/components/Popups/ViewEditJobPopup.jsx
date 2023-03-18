import React, { useRef, useEffect, useState } from 'react'
import Transition from '../../utils/Transition';
import { callApi } from '../../utils/CallApi';

// ========================= 3rd party packages
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { FcCheckmark } from 'react-icons/fc'
import moment from "moment"
import Validator, { ValidationTypes as V_Type } from "react-form-supervalidator"
import { toast, ToastContainer } from 'react-toastify';



const ViewEditJobPopup = ({ id, modalOpen, onClose, mode, data }) => {
    const modalContent = useRef(null);
    const [file, setFile] = useState('')
    const [expiryDate, setexpiryDate] = useState({ day: 10, month: 8, year: 2022 })
    const [jobModel, setjobModel] = useState({
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

    const [validationModel, setvalidationModel] = useState({
        job_titleError: null,
        salaryError: null,
        descriptionError: null,
        jobtypeError: null,
        jobstatusError: null,
        jobclassError: null,
        employerError: null,
        responsibilitiesError: null,
        jobQualicationsError: null,
    })





    const setValidation = () => {
        let myvalidation_Obj = {
            ...validationModel,
            job_titleError: Validator(jobModel.job_title, [V_Type.required], ['job title is required field',]),
            salaryError: Validator(jobModel.salary, [V_Type.required], ['Salary is required field']),
            descriptionError: Validator(jobModel.description, [V_Type.required,], ['Description is required field']),
            jobtypeError: Validator(jobModel.jobtype, [V_Type.required], ['job type is required field', "Email not correct"]),
            jobstatusError: Validator([jobModel.jobstatus], [V_Type.required], ['job status is required  ']),
            jobclassError: Validator(jobModel.jobclass, [V_Type.required], ['job class is  required field']),
            employerError: Validator(jobModel.employer, [V_Type.required], ['Employere is required field']),
            responsibilitiesError: Validator(jobModel.responsibilities, [V_Type.required], ['responsibilities is required field']),
            jobQualicationsError: Validator(jobModel.jobQualicationsError, [V_Type.required], ['jobQualications is required field']),

        };
        setvalidationModel(myvalidation_Obj);
        return Validator(myvalidation_Obj, V_Type.NullCheck);
    }

    const handleChange = (e) => {
        let { name, value } = e.target
        setjobModel((prevmodel) => ({
            ...prevmodel,
            [name]: value
        }))
    }

    const handleUpdateJob = async () => {
        let isValidate = setValidation()
        if (isValidate) return
        let obj = { ...jobModel }
        obj.expiryDate = `${expiryDate.year}/${expiryDate.month}/${expiryDate.day}`
        obj._id = data._id;
        obj.job_image_url = file;
        try {
            const response = await callApi("/jobs/updatejob", "post", obj)
            console.log(response);
            toast.success(response.message);
            onClose()
        } catch (error) {
            console.log(error);
        }

    }


    const handleImage = async (e) => {
        let file = e.target.files[0]

        let formData = new FormData();
        formData.append('file', file);   //append the values with key, value pair

        try {
            const res = await callApi("/uploads/uploadJobImage", "post", formData)
            if (res) {
                let obj = Object.assign({}, ...res)
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






    // ****************** Datepicker Content ***********
    const renderCustomInput = ({ ref }) => (
        < div className='relative cursor-pointer'>
            <input readOnly ref={ref} // necessary  placeholder="yyy-mm-dd"
                value={expiryDate ? `${expiryDate.year}/${expiryDate.month}/${expiryDate.day}` : ''}
                className={`date_picker border p-2 w-full focus:outline-blue-500 rounded-sm  cursor-pointer z-30   px-2 py-2`}
            />
            <div className={`visible absolute top-3 cursor-pointer right-5`}>   <FcCheckmark />   </div>

        </div >
    )

    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!modalOpen || keyCode !== 27) return;
            onClose();
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    useEffect(() => {
        setjobModel((prevmodel) => ({
            ...prevmodel,
            ...data
        }))
    }, [data])

    return (
        <>
            {/* Modal backdrop */}
            <Transition
                className="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
                show={modalOpen}
                enter="transition ease-out duration-200"
                enterStart="opacity-0"
                enterEnd="opacity-100"
                leave="transition ease-out duration-100"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
                aria-hidden="true"
            />
            {/* Modal dialog */}
            <Transition
                id={id}
                className="fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center px-4 sm:px-6"
                role="dialog"
                aria-modal="true"
                show={modalOpen}
                enter="transition ease-in-out duration-200"
                enterStart="opacity-0 translate-y-4"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-200"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 translate-y-4"
            >
                <div ref={modalContent} className="bg-white rounded shadow-lg overflow-auto w-3/4 h-2/3">

                    {/* Modal header */}
                    <div className="px-5 py-3 border-b border-slate-200">
                        <div className="flex justify-between items-center">
                            <div className="font-semibold text-slate-800">View Job</div>
                            <button className="text-slate-400 hover:text-slate-500" onClick={onClose}>
                                <div className="sr-only">Close</div>
                                <svg className="w-4 h-4 fill-current">
                                    <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className='bscontainer'>
                        <div className='row p-5'>

                            <div className='col-lg-4 mb-5'>
                                <label className="block text-lg font-medium mb-1" htmlFor="description">JOB TITLE</label>
                                {mode === "view" ?
                                    (
                                        <p>{data.job_title}</p>
                                    ) : (
                                        <input name='job_title' value={jobModel.job_title} onChange={handleChange} type="text" className={`border p-2 w-full focus:outline-blue-500 rounded-sm `} />
                                    )}
                                {validationModel.job_titleError}
                            </div>
                            <div className='col-lg-4 mb-5'>
                                <label className="block text-lg font-medium mb-1" htmlFor="description">SALARY</label>
                                {mode === "view" ?
                                    (
                                        <p>{data.salary}</p>
                                    ) : (
                                        <input name='salary' value={jobModel.salary} onChange={handleChange} type="text" className={`border p-2 w-full focus:outline-blue-500 rounded-sm `} />
                                    )}
                                {validationModel.salaryError}
                            </div>
                            
                            <div className='col-lg-4 mb-5'>
                                <label className="block text-lg font-medium mb-1" htmlFor="description">EMPLOYEER</label>
                                {mode === "view" ?
                                    (
                                        <p>{data.employer}</p>
                                    ) : (
                                        <input name='employer' value={jobModel.employer} onChange={handleChange} type="text" className={`border p-2 w-full focus:outline-blue-500 rounded-sm `} />
                                    )}
                                {validationModel.employerError}
                            </div>
                            <div className='col-lg-4 mb-5'>
                                <label className="block text-lg font-medium mb-1" htmlFor="description">JOBTYPE</label>
                                {mode === "view" ?
                                    (
                                        <p>{data.jobtype}</p>
                                    ) : (

                                        <select name='jobtype' value={jobModel.jobtype} onChange={handleChange} className={`border p-2 w-full focus:outline-blue-500 rounded-sm `}>
                                            <option>full time</option>
                                            <option>part time</option>
                                            <option>internship</option>
                                        </select>
                                    )}
                                {validationModel.jobtypeError}
                            </div>
                            <div className='col-lg-4 mb-5'>
                                <label className="block text-lg font-medium mb-1" htmlFor="description">JOB STATUS</label>
                                {mode === "view" ?
                                    (
                                        <p>{data.jobstatus}</p>
                                    ) : (
                                        <select name='jobstatus' value={jobModel.jobstatus} onChange={handleChange} className={`border p-2 w-full focus:outline-blue-500 rounded-sm `}>
                                            <option >active</option>
                                            <option >pending</option>
                                            <option>completed</option>
                                        </select>
                                    )}
                                {validationModel.jobstatusError}
                            </div>
                            <div className='col-lg-4 mb-5'>
                                <label className="block text-lg font-medium mb-1" htmlFor="description">JOB CLASS</label>
                                {mode === "view" ?
                                    (
                                        <p>{data.jobclass}</p>
                                    ) : (
                                        <select name='jobclass' value={jobModel.jobclass} onChange={handleChange} className={`border p-2 w-full focus:outline-blue-500 rounded-sm `}>
                                            <option>onsite</option>
                                            <option >remote</option>
                                            <option >hybrid</option>
                                        </select>
                                    )}
                                {validationModel.jobclassError}
                            </div>
                            <div className='col-lg-4 mb-5'>
                                <label className="block text-lg font-medium mb-1" htmlFor="description">EXPIRY DATE</label>
                                {mode === "view" ?
                                    (
                                        <p>{moment(data.expiryDate).format('MM/DD/YYYY')}</p>
                                    ) : (
                                        <DatePicker
                                            value={expiryDate}
                                            onChange={setexpiryDate}
                                            renderInput={renderCustomInput} // render a custom input
                                            shouldHighlightWeekends
                                        />
                                    )}
                            </div>

                            <div className='col-lg-4'>
                                <label className="block text-sm font-medium mb-3"  >Image</label>
                                <input type="file" className={`border p-[6px] focus:outline-blue-500 rounded-sm w-full h-[30px`} onChange={handleImage} />
                                <small className='text-red-500'>only png, svg images can be added</small>
                            </div>

                            <div className='col-lg-12 mb-5'>
                                <label className="block text-lg font-medium mb-1" htmlFor="description">DESCRIPTION</label>
                                {mode === "view" ?
                                    (
                                        <p>{data.description}</p>
                                    ) : (
                                        <textarea name='description' value={jobModel.description} onChange={handleChange} type="text" className={`border p-2 w-full focus:outline-blue-500 rounded-sm `} />
                                    )}
                                {validationModel.descriptionError}
                            </div>


                            <div className='col-lg-12 mb-5'>
                                <label className="block text-lg font-medium mb-1" htmlFor="description">Responsibilities</label>
                                {mode === "view" ?
                                    (
                                        <p>{data.responsibilities}</p>
                                    ) : (
                                        <textarea
                                            autoComplete="off"
                                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full `}
                                            name='responsibilities' id="responsibilities"
                                            value={jobModel.responsibilities} onChange={handleChange}
                                            placeholder="Responsibilities"
                                            cols={5}
                                        ></textarea>
                                    )}
                                {validationModel.responsibilitiesError}
                            </div>


                            <div className='col-lg-12 mb-5'>
                                <label className="block text-lg font-medium mb-1" htmlFor="description">Job Qualications</label>
                                {mode === "view" ?
                                    (
                                        <p>{data.jobQualications}</p>
                                    ) : (
                                        <textarea
                                            autoComplete="off"
                                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full `}
                                            name='jobQualications' id="jobQualications"
                                            value={jobModel.jobQualications} onChange={handleChange}
                                            placeholder="Job Qualications"
                                            cols={5}
                                        ></textarea>
                                    )}
                                {validationModel.jobQualicationsError}
                            </div>



                            {
                                mode !== "view" ? (
                                    <div className='col-lg-12'>
                                        <button onClick={handleUpdateJob} className="p-2 bg-red-500 hover:bg-green-600 text-white" >Update Job</button>
                                    </div>
                                ) : null
                            }


                        </div>


                    </div>

                </div>
            </Transition>
        </>
    )
}

export default ViewEditJobPopup