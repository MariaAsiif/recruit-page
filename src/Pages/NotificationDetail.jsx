import React from 'react'
import { GrInstagram } from 'react-icons/gr'
import {
    FaTiktok,
    FaSnapchatGhost,
    FaTwitter,
    FaYoutube,

} from 'react-icons/fa'
const NotificationDetail = () => {
    return (
        < >
            <div className='bscontainer-fluid h-full py-5 px-5'>
                <div className='row'>
                    <div className='col-lg-12 flex items-end px-10 mb-5'>
                        <div className='w-[90%]'>
                            <h1 className='text-[#0D1829] font-semibold mb-2'>All Notification</h1>
                            <h1 className='text-[#626973] text-xs font-normal'>Here all the notification shows</h1>
                        </div>



                    </div>
                    <div className='col-lg-12 '>
                        <div className="overflow-x-auto bg-white rounded-md  h-full pb-4">
                            <div className=' max-w-[600px] m-auto  '>
                                <div className="bg-outer-notif mt-[2rem]">
                                    <div className='bg-notification bg-bottom bg-no-repeat bg-cover h-[450px] pt-[3rem]'>
                                        <div className='border bg-white max-w-[450px] h-auto m-auto p-3 rounded-md text-center'>
                                            <h2 className='text-[22px] mb-[20px] mt-4'>Hy Robert,</h2>
                                            <span className='text-[12px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magni eius reiciendis reprehenderit voluptate! Repellendus ipsam debitis fuga animi, magnam ipsa vero id neque sapiente nihil temporibus reprehenderit vitae pariatur?</span>

                                            <div className='text-center mb-4'>
                                                <button className='rounded-full bg-red-500 text-white w-[40%] p-2 mt-[6rem] '>Accept order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center mt-5'>
                                    <div className='flex items-center justify-center'>
                                        <GrInstagram className='text-[20px] text-gray-400 mx-4' />
                                        <FaTiktok className='text-[20px] text-gray-400 mx-4' />
                                        <FaSnapchatGhost className='text-[20px] text-gray-400 mx-4' />
                                        <FaTwitter className='text-[20px] text-gray-400 mx-4' />
                                        <FaYoutube className='text-[20px] text-gray-400 mx-4' />
                                    </div>
                                    <div className='mt-4 max-w-[350px] m-auto'>
                                        <h2 className='text-[13px] text-gray-400'>if you have any questions, feel free message us at <span className='font-bold text-black'>support@mailus.com </span> . All right reserved. Update email preferences or unsubscribe.</h2>

                                        <span className='text-[13px] text-gray-400'>5781 Spring St Salinas, Idaho 88606 <br />
                                            United States</span>

                                        <div>
                                            <span className='text-[14px] cursor-pointer hover:underline text-gray-400'>Term of use</span>
                                            <span className='text-[14px] cursor-pointer hover:underline border-l ml-3 pl-3 text-gray-400'>Privacy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NotificationDetail