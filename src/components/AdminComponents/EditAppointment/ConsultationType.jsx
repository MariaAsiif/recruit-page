import React, { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { callApi } from '../../../utils/CallApi';
import { toast, ToastContainer } from 'react-toastify';


const schema = yup.object({
    // symptoms: yup.string().required('symptoms is Required'),
    // consultationFee: yup.string().required('consultation Fee is Required'),
    // communication: yup.string().required('communication  is Required'),
    // allergies: yup.string().required('allergies is Required'),
    // image: yup.mixed().test('required', 'file is Required', value => { return value && value.length }),
    // video: yup.mixed().test('required', 'file is Required', value => { return value && value.length }),
});

const ConsultationType = ({ control, register, watch, errors }) => {

    const [image, setImage] = useState('')
    const [video, setVideo] = useState('')
  



    const handleFile = async (e, type) => {
        try {
            if (type === "image") {
                let file = e.target.files[0]
                let formData = new FormData();
                formData.append('pictures', file)
                let res = await callApi('/appointmentrequests/uploadMedicalImages', "post", formData)
                if (res.status === "Success") {
                    console.log("Res", res)
                    toast.success(res.message);
                    setImage(res?.data)
                }
                else {
                    toast.error(res.message);

                }
            }
            else {
                let file = e.target.files[0]
                let formData = new FormData();
                formData.append('videos', file)

                let res = await callApi('/appointmentrequests/uploadMedicalVideos', "post", formData)
                if (res.status === "Success") {
                    console.log("Res", res)
                    toast.success(res.message);
                    setVideo(res?.data)
                }
                else {
                    toast.error(res.message);

                }
            }

        } catch (error) {
            toast.error(error);


        }
    }



    // const onSubmit = async (values) => {

    //     let payload = {
    //         ...values,
    //         image,
    //         video
    //     }
    //     updateState(payload)
    //     handleNext()
    // };

    return (
        <div >

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

            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                <div className='row p-11'>

                    <div className='col-lg-4 mb-4 relative'>
                        <label className='block text-sm font-medium mb-1' htmlFor='name'>
                            Symptoms
                        </label>
                        <div className='absolute right-5 top-10'>
                            {!errors.symptoms && watch('symptoms') ? (
                                <FcCheckmark />
                            ) : errors.symptoms ? (
                                <div className=' text-red-500'>
                                    <MdClose />
                                </div>
                            ) : null}
                        </div>
                        <input
                            {...register('symptoms')}
                            autoComplete='off'
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.symptoms && 'border-red-400'
                                }`}
                            name='symptoms'
                            id='name'
                            type='text'
                            placeholder='Symptoms'
                        />

                        {errors.symptoms && (
                            <p className='text-red-500 text-sm'>{errors.symptoms.message}</p>
                        )}
                    </div>

                    <div className='col-lg-4 mb-4 relative'>
                        <label className='block text-sm font-medium mb-1' htmlFor='name'>
                            Consultation Fee
                        </label>
                        <div className='absolute right-5 top-10'>
                            {!errors.consultationFee && watch('consultationFee') ? (
                                <FcCheckmark />
                            ) : errors.consultationFee ? (
                                <div className=' text-red-500'>
                                    <MdClose />
                                </div>
                            ) : null}
                        </div>
                        <input
                            {...register('consultationFee')}
                            autoComplete='off'
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.consultationFee && 'border-red-400'
                                }`}
                            name='consultationFee'
                            id='name'
                            type='text'
                            placeholder='consultation Fee'
                        />

                        {errors.consultationFee && (
                            <p className='text-red-500 text-sm'>{errors.consultationFee.message}</p>
                        )}
                    </div>

                    <div className='col-lg-4 mb-4 relative'>
                        <label className='block text-sm font-medium mb-1' htmlFor='name'>
                            Communication
                        </label>

                        <select
                            {...register('communication')}
                            className={`border p-[10px] focus:outline-blue-500 rounded-sm w-full -mt-[1px]   ${errors.communication && 'border-red-400'
                                }`}>
                            <option value="">Select Communication</option>
                            <option>Chat</option>

                        </select>
                        {errors.communication && (
                            <p className='text-red-500 text-sm'>{errors.communication.message}</p>
                        )}

                    </div>
                    <div className='col-lg-4 mb-4 relative'>
                        <label className='block text-sm font-medium mb-1' htmlFor='name'>
                            Allergies
                        </label>
                        <div className='absolute right-5 top-10'>
                            {!errors.allergies && watch('allergies') ? (
                                <FcCheckmark />
                            ) : errors.allergies ? (
                                <div className=' text-red-500'>
                                    <MdClose />
                                </div>
                            ) : null}
                        </div>
                        <input
                            {...register('allergies')}
                            autoComplete='off'
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.allergies && 'border-red-400'
                                }`}
                            name='allergies'
                            id='name'
                            type='text'
                            placeholder='Allergies'
                        />

                        {errors.allergies && (
                            <p className='text-red-500 text-sm'>{errors.allergies.message}</p>
                        )}
                    </div>

                    <div className='col-lg-4 mb-4 '>
                        <label className='block text-sm font-medium mb-1 '>
                            Pictures
                        </label>
                        <div className='relative'>
                            <input
                                type="file"
                                onChange={(e) => handleFile(e, 'image')}
                                className={`border p-2 focus:outline-blue-500 rounded-sm w-full  `}
                            />

                            {/* {errors.image && (
                                <p className='text-red-500 text-sm'>{errors.image.message}</p>
                            )} */}

                        </div>
                    </div>
                    <div className='col-lg-4 mb-4 '>
                        <label className='block text-sm font-medium mb-1 '>
                            Videos
                        </label>
                        <div className='relative'>
                            <input
                                // {...register('')}
                                type="file"
                                onChange={(e) => handleFile(e, "video")}
                                className={`border p-2 focus:outline-blue-500 rounded-sm w-full  `}
                            />

                            {/* {errors.video && (
                                <p className='text-red-500 text-sm'>{errors.video.message}</p>
                            )} */}
                        </div>
                    </div>
                    {/* <div className='col-lg-12 flex justify-between'>
                        <button onClick={(e) => handleBack(e)} className='p-2 bg-red-500 hover:bg-green-600 text-white'>
                            Back
                        </button>
                        <button type='submit' className='p-2 bg-red-500 hover:bg-green-600 text-white'>Next</button>
                    </div> */}
                </div>
            {/* </form> */}
        </div>
    );
};

export default ConsultationType;
