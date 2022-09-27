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
const ViewCandidate = ({ permition, toggle, title, data, type }) => {
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

            <ModalBasic id="basic-modal" modalOpen={permition} setModalOpen={toggle} title={title}>
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
                    <div className='row '>


                        <div className='col-lg-4 mb-4 relative'>
                            <label className="block text-sm font-medium mb-1" htmlFor="fullname">Full Name </label>
                            <soan> MR, LAHER ASIF</soan>
                        </div>
                        <div className='col-lg-4 mb-4 relative'>
                            <label className="block text-sm font-medium mb-1" htmlFor="salary">First Family Name </label>

                        </div>
                        <div className='col-lg-4 mb-4 relative'>
                            <label className="block text-sm font-medium mb-1" htmlFor="secondFname">Second Family Name </label>
                        </div>
                        <div className='col-lg-4 mb-4 relative'>
                            <label className="block text-sm font-medium mb-1" htmlFor="thirdFname">Third Family Name </label>

                        </div>
                        <div className='col-lg-4 mb-4 relative'>
                            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>

                        </div>
                        <div className='col-lg-4 mb-4 relative'>
                            <label className="block text-sm font-medium mb-1" htmlFor="Remail">Re Email </label>

                        </div>
                        <div className='col-lg-4 mb-4 relative'>
                            <label className="block text-sm font-medium mb-1" htmlFor="country">Country</label>

                        </div>
                        <div className='col-lg-4 mb-4 relative'>
                            <label className="block text-sm font-medium mb-1" htmlFor="state">State</label>

                        </div>
                        <div className='col-lg-4 mb-4 relative'>
                            <label className="block text-sm font-medium mb-1" htmlFor="city">City</label>

                        </div>
                        <div className='col-lg-4 mb-4 relative '>
                            <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone</label>

                        </div>
                        <div className='col-lg-4 mb-4 relative'>
                            <label className="block text-sm font-medium mb-1" htmlFor="industry">Industry </label>

                        </div>
                        <div className='col-lg-4 mb-4 relative'>
                            <label className="block text-sm font-medium mb-1" htmlFor="position">Position </label>

                        </div>
                        <div className='col-lg-4 mb-4 relative'>
                            <label className="block text-sm font-medium mb-1" htmlFor="age">Age </label>

                        </div>
                        <div className='col-lg-4 mb-4 relative'>
                            <label className="block text-sm font-medium mb-1" htmlFor="secondFname">Cv </label>


                        </div>
                        <div className='col-lg-4 mb-4 '>
                            <label className="block text-sm font-medium mb-1 "  >Expiry Date</label>
                            <div className="relative">
                                {/* <div className='absolute right-20 top-0 z-2'>
       {!errors.jobtype && values.jobtype  ? <FcCheckmark /> : errors.jobtype ? <div className=' text-red-500'><MdClose/></div> : null }
   </div> */}

                            </div>

                        </div>
                       
                    </div>
                </div>


            </ModalBasic >

        </div >
    )
}

export default ViewCandidate