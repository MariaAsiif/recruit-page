import React, { useRef, useEffect, useState } from 'react'
import Transition from '../../utils/Transition';
import { BsFacebook, BsTwitter, BsLinkedin, BsWhatsapp, } from "react-icons/bs";
import { IoSaveOutline, IoPrintOutline, IoMailOutline } from "react-icons/io5";
import flag from '../../assets/images/usflag_logo.png'
import { callApi } from '../../utils/CallApi';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const SavedJobs = ({ id, modalOpen, onClose, setApply, data }) => {
    console.log("Data" , data )

    const modalContent = useRef(null)

    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!modalOpen || keyCode !== 27) return;
            onClose();
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });


    const user = useSelector((state) => state.recruitAuth?.userInfo)



    const SaveJob = async () => {
        try {
            let payload = {
                "userid": user._id,
                "jobid": data
            }

            let res = callApi('/jobs/saveApplicantJob', 'post', payload);
            if (res.status === "Success") {
                toast.success(res.message);
            }
            else {
                toast.error(res.message);

            }
        }
        catch (err) { }
    }


    return (
        <>

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
                <div ref={modalContent} className="bg-white rounded shadow-lg overflow-auto w-2/3 h-2/3">
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
                    <div className=''>
                        <div  className=' border bg-white  shadow-lg'>
                            <div className='p-5'>
                                <h1 className='text-[#65A33A] text-center text-lg font-medium mb-4'>Detail Job</h1>
                                <div className='border-2 border-[#65A33A]  rounded-md p-[2px] mb-2'>
                                    <div>
                                        <img className=' w-full h-auto  rounded-md' src={`${data.job_image_url}`} alt="logo" loading="lazy" />
                                    </div>
                                </div>
                                <h1 className='text-[#0D1829] text-center text-[10px] font-medium mb-2'>{data?.job_title}</h1>
                                <div className='flex justify-between items-center mb-4'>
                                    <h1 className='text-[#626973] text-[8px]'>{data?.jobtype} Job at Google, Inc</h1>
                                    <div>
                                        <span className='w-4 h-4  rounded-full inline-block mr-1 align-middle'>
                                            <img src={flag} alt="flag" />
                                        </span>
                                        <span className='w-4 h-4  rounded-full inline-block mr-1 align-middle'>
                                            <img src={flag} alt="flag" />
                                        </span>
                                        <span className='w-4 h-4  rounded-full inline-block align-middle'>
                                            <img src={flag} alt="flag" />
                                        </span>
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <h1 className='text-[#65A33A]  text-[16px] mb-4'>Qualification :</h1>
                                    <ul className='list-disc pl-4 text-[#0D1829] text-[9px]'>
                                        <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur</li>
                                        <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</li>
                                        <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur</li>
                                        <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</li>
                                        <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur</li>
                                        <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</li>
                                    </ul>
                                </div>
                                <div className='mb-4'>
                                    <h1 className='text-[#65A33A]  text-[16px] mb-4'>Responsibilities & Duties :</h1>
                                    <ul className='list-disc pl-4 text-[#0D1829] text-[15px]'>
                                        <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur</li>
                                        <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</li>
                                        <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur</li>
                                        <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</li>
                                        <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur</li>
                                        <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</li>
                                    </ul>
                                </div>
                                {/* <div className='mb-4 h-8'>
                                    <button className='border-2 transition-all border-[#65A33A] px-2 py-2 text-[9px] bg-[#65A33A] hover:bg-white text-white hover:text-[#65A33A] rounded-md float-left'>Messages</button>
                                    <button onClick={() => { return setApply(true), onClose() }} className='border-2  transition-all border-[#65A33A] px-2 py-2 text-[9px] bg-[#65A33A] hover:bg-white text-white hover:text-[#65A33A] rounded-md float-right'>Apply Now</button>
                                </div> */}
                                <h1 className='text-[#65A33A]  text-[16px] mb-1'>Interested in this job?</h1>
                                {/* <div className='text-[#626973] text-[11px] mb-4 '>
                                    <IoSaveOutline className='inline mr-1' /><span className='mr-2  cursor-pointer' onClick={() => SaveJob}>Save Job</span>
                                    <IoPrintOutline className='inline mr-1' /><span className='mr-2'>Print this Job</span>
                                    <IoMailOutline className='inline mr-1' /><span>Email this Job</span>
                                </div> */}

                                <div className='flex items-center flex-wrap mt-1'>
                                    <div className='border rounded-full p-1 '>
                                        <span className='text-[14px] px-2'>English Transitions</span>
                                    </div>
                                    <div className='border rounded-full p-1 m-2 '>
                                        <span className='text-[14px] px-2'>English</span>
                                    </div>
                                    <div className='border rounded-full p-1 mb-2'>
                                        <span className='text-[14px] px-2'>English Transitions</span>
                                    </div>
                                </div>
                                <h1 className='text-[#65A33A]  text-[16px] mb-1'>Share on Social Media</h1>
                                <div className='mb-4'>
                                    <BsFacebook className='inline text-blue-600 mr-2' />
                                    <BsTwitter className='inline text-[#33ACE2] mr-2' />
                                    <BsLinkedin className='inline text-[#0177B5] mr-2' />
                                    <BsWhatsapp className='inline text-[#26CC64]' />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </Transition>
        </>
    )
}

export default SavedJobs