import React, { useState, useEffect } from 'react'
import comming_soonvideo from "../assets/videos/comming-soon.mp4"
import { useForm } from "react-hook-form";
import { callApi } from '../utils/CallApi';
import { toast, ToastContainer } from 'react-toastify';
import { IoCloseCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import FeedbackThankyouPopup from '../components/Popups/FeedbackThankyouPopup';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
// import ReadMore from '.'

const UserFeedback = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [userFeedbackPopup, setuserFeedbackPopup] = useState(false)
    const [feedback, setFeedback] = useState(false)
    const onSubmit = async (data) => {

        console.log(data)
        try {
            let formdata = new FormData()
            formdata.append('feedbackimg', data.feedbackimg);
            formdata.append('request', JSON.stringify({
                userEmail: data.email,
                feedbackDescription: data.feedback,
                userName: data.username
            }));
            const res = await callApi("/feedbacks/createPublicFeedback", "post", formdata)
            if (res.status === "Success") {
                toast.success(res.message);
                reset()
                setuserFeedbackPopup(true)
            }
            else {
                toast.error(res.message);

            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <section className="showcase relative ">

                <video src={comming_soonvideo} autoPlay muted loop />
                <div className="overlay" />
                <div className="text_wrapper">
                    <div className='w-full z-[1]'>
                        <div className='bscontainer'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='row justify-center'>
                                    <div className='col-md-8 col-lg-4 z-10 lg:w-[500px]  m-auto'>
                                        <div className='bg-white px-8 py-6 pt-3  rounded-md'>
                                            <Link to="/">
                                                <IoCloseCircleOutline className='hover:text-red-500 text-3xl cursor-pointer  ' />
                                            </Link>
                                            <h1 className='text-center text-2xl font-semibold mb-6' onClick={() => setFeedback(!feedback)}>
                                                Feedback
                                                <br />
                                                <span className='text-red-500 text-[16px] uppercase flex justify-center cursor-pointer'>
                                                    Instructions {feedback ? <IoMdArrowDropup className='text-red-500' /> : <IoMdArrowDropdown className='text-red-500' />} </span>
                                            </h1>

                                            {feedback ?

                                                <div className='border p-2 mb-3  text-[14px] '>
                                                    Thank ypu for your participation and sharing with us for improvement of the time.
                                                    <br />
                                                    <br />
                                                    The most useful feedback to us is a visual one, if that visual product has annotations communicating the issue or change required. The most valuable is a screenshot with ann annotation.
                                                    <br />
                                                    <br />
                                                    You can, of course, use your fingers to pinch and zoom to the page framing the size area you are bringing to our attention and then taking a screeenshot of that area.
                                                    <br />
                                                    <br />
                                                    You can then save that screenshot to your camera roll you can then upload that screen capture and any annotation it contains.Thereafter, you may select it using the controls supplier below:
                                                    <br />
                                                    <br />
                                                    <span className='font-bold'>
                                                        . Add a file"
                                                        <br />
                                                        or
                                                        <br />
                                                        .Add a photo
                                                    </span>
                                                    <br />
                                                    <br />
                                                    Which ever of the above is presented to you through at the weebsite and applicable. Your action will add the screenshot to your feedback giver your developers a clear idea of how to satisfy the problem you have identified.
                                                    <br />
                                                    <br />
                                                    Thank you for participating.

                                                </div>
                                                :
                                                <div className=''>
                                                    <div className='mb-3'>
                                                        <label className='block font-semibold text-lg mb-2'>User name</label>
                                                        <input  {...register('username', { required: true })} className='border-gray-300 w-full rounded' type="text" placeholder='john doe' />
                                                        {errors.username && (<p className="text-red-500 text-sm">User name is required</p>)}
                                                    </div>
                                                    <div className='mb-3'>
                                                        <label className='block font-semibold text-lg mb-2'>Email address</label>
                                                        <input  {...register('email', { required: true })} className='border-gray-300 w-full rounded' type="email" placeholder='john@gmail.com' />
                                                        {errors.email && (<p className="text-red-500 text-sm">Email is required</p>)}
                                                    </div>

                                                    <div className='mb-3'>
                                                        <label className='block font-semibold text-lg mb-2'>Your feedback</label>
                                                        <textarea rows={4} placeholder="feedback" className='border-gray-300 w-full rounded' {...register('feedback', { required: true })} />
                                                        {errors.feedback && (<p className="text-red-500 text-sm">Feedback is required</p>)}
                                                    </div>
                                                    <div className='mb-3'>
                                                        <label className='font-semibold text-lg mb-2'>Image</label>
                                                        <input className='border border-gray-300 focus:outline-blue-700 w-full rounded p-2'{...register('feedbackimg')} type="file" />
                                                        <p className='text-gray-400 text-center text-xs'>png, jpeg, jpg, svg images are allowed </p>
                                                    </div>
                                                    <div >
                                                        <button type='submit' className='bg-red-500 hover:bg-green-600 w-full rounded p-3 text-white font-semibold'>SUBMIT</button>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>

            </section>



        </>
    )
}

export default UserFeedback